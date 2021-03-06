using ZygoteRules: @adjoint

@doc raw"
    einsum_grad(::EinCode{ixs, iy}, xs, size_dict, cdy, i)

return the gradient of the result of evaluating the `EinCode` w.r.t
the `i`th tensor in `xs`. `cdy` is the result of applying the `EinCode`
to the `xs`.

# example
```jldoctest; setup = :(using OMEinsum)
julia> using OMEinsum: einsum_grad, get_size_dict

julia> a, b = rand(2,2), rand(2,2);

julia> c = einsum(EinCode((('i','j'),('j','k')), ('i','k')), (a,b));

julia> sd = get_size_dict((('i','j'),('j','k')), (a,b));

julia> einsum_grad(EinCode((('i','j'),('j','k')), ('i','k')), (a,b), sd, c, 1) ≈ c * transpose(b)
true
```
"
function einsum_grad(::EinCode{ixs, iy}, xs, size_dict, cdy, i) where {ixs, iy}
    nixs = TupleTools.insertat(ixs, i, (iy,))
    nxs  = TupleTools.insertat( xs, i, (cdy,))
    niy = ixs[i]
    y = einsum(EinCode(nixs, niy), nxs, size_dict)
    try
        conj!(y)
    catch e
        y = conj(y)
    end
    typeof(y) == typeof(xs[i]) && return y
    xs[i] isa Array{<:Real} && return convert(typeof(xs[i]), real(y))
    convert(typeof(xs[i]), y)
end

@adjoint function einsum(code::EinCode{ixs, iy}, xs::NTuple{N,T where T}, size_dict::IndexSize) where {N, ixs, iy}
    y = einsum(code, xs, size_dict)
    return y, dy -> let cdy = map(conj,dy)
                (
                    nothing,
                    ntuple(i -> einsum_grad(code, xs, size_dict, cdy, i), N),
                    nothing
                )
            end
end

# @Zygote.nograd get_size_dict
@adjoint get_size_dict(arg...) = get_size_dict(arg...), Δ -> map(_->nothing, arg)
