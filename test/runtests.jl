using OMEinsum
using Test

@testset "einsum" begin
    include("einsum.jl")
end

@testset "autodiff" begin
    include("autodiff.jl")
end

@testset "traits" begin
    include("traits.jl")
end
