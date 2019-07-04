var documenterSearchIndex = {"docs":
[{"location":"#OMEinsum.jl-1","page":"Home","title":"OMEinsum.jl","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Modules = [OMEinsum]","category":"page"},{"location":"#OMEinsum.einsum-Union{Tuple{iy}, Tuple{ixs}, Tuple{EinCode{ixs,iy},Any,Any}} where iy where ixs","page":"Home","title":"OMEinsum.einsum","text":"einsum(::EinCode{ixs, iy}, out, size_dict) where {ixs, iy}\n\nreturn the tensor that results from contracting the tensors xs according to their indices ixs, where all indices that do not appear in the output are summed over. The indices are contracted in the order implied by their numerical value, smaller first. The result is permuted according to out.\n\nixs - tuple of tuple of integers that label all indices of a tensor.      Indices that appear twice (in different tensors) are summed over\nxs - tuple of tensors\nout - tuple of integers that should correspond to remaining indices in ixs after contractions.\n\nexample\n\njulia> a = rand(2,2);\n\njulia> b = rand(2,2);\n\njulia> einsum(ein\"ij,jk->ij\", (a, b)) ≈ a * b\ntrue\n\njulia> einsum(ein\"ij,jk->ki\", (a, b)) ≈ permutedims(a * b, (2,1))\ntrue\n\n\n\n\n\n","category":"method"},{"location":"#OMEinsum.einsumexp!-Union{Tuple{iy}, Tuple{ixs}, Tuple{IT}, Tuple{T}, Tuple{L}, Tuple{N}, Tuple{EinCode{ixs,iy},Tuple{Vararg{AbstractArray{#s17,M} where #s17 where M,N}},AbstractArray{T,L},Any}} where iy where ixs where IT<:Union{AbstractChar, Integer} where T where L where N","page":"Home","title":"OMEinsum.einsumexp!","text":"einsumexp!(::EinCode, xs, y, size_dict)\n\nThe inplace brute-force looping einsum, y is the output tensor.\n\n\n\n\n\n","category":"method"},{"location":"#OMEinsum.einsumexp-Union{Tuple{iy}, Tuple{ixs}, Tuple{T}, Tuple{N}, Tuple{EinCode{ixs,iy},Tuple{Vararg{AbstractArray{#s13,M} where #s13 where M,N}},Any}} where iy where ixs where T where N","page":"Home","title":"OMEinsum.einsumexp","text":"einsumexp(::EinCode, xs, size_dict)\n\nThe brute-force looping einsum, xs is a tuple of input tensors.\n\n\n\n\n\n","category":"method"},{"location":"#OMEinsum.einsumopt-Union{Tuple{iy}, Tuple{ixs}, Tuple{EinCode{ixs,iy},Any}} where iy where ixs","page":"Home","title":"OMEinsum.einsumopt","text":"einsumopt(::EinCode{ixs, iy}, xs) where {ixs, iy}\n\nreturns the result of the einsum operation implied by ixs, iy but evaluated in the optimal order according to meinsumcost.\n\n\n\n\n\n","category":"method"},{"location":"#OMEinsum.Diag","page":"Home","title":"OMEinsum.Diag","text":"Diag{N,T}\n\nis a type that represents a (generalized) diagonal of N edges of type T of one tensor which are stored in its edges field, e.g. 'iij -> ij' is represented by Diag{1}((i,))\n\n\n\n\n\n","category":"type"},{"location":"#OMEinsum.EinsumOp","page":"Home","title":"OMEinsum.EinsumOp","text":"EinsumOp{N}\n\nabstract supertype of all einsum operations involving N edges or N tensors (for OuterProduct{N}).\n\n\n\n\n\n","category":"type"},{"location":"#OMEinsum.Fallback","page":"Home","title":"OMEinsum.Fallback","text":"Fallback{N,T}\n\nis a type that represents an einsum resulting in N indices of type T, which are stored in its iy field. It's used as a general fallback if no more efficient method is available.\n\n\n\n\n\n","category":"type"},{"location":"#OMEinsum.IndexReduction","page":"Home","title":"OMEinsum.IndexReduction","text":"IndexReduction{N,T}\n\nis a type that represents an index reduction of N edges/indices of type T which are stored in its edges field, e.g. 'ij -> i' is represented by IndexReduction{1,Char}((j,)).\n\n\n\n\n\n","category":"type"},{"location":"#OMEinsum.MixedDiag","page":"Home","title":"OMEinsum.MixedDiag","text":"MixedDiag{N,T}\n\nis a type that represents a (generalized) mixed diagonal of N edges of type T of more than one tensor which are stored in its edges field,  e.g. 'iij, ik -> ijk' is represented by MixedDiag{1,Char}((i,))\n\n\n\n\n\n","category":"type"},{"location":"#OMEinsum.MixedStarContract","page":"Home","title":"OMEinsum.MixedStarContract","text":"MixedStarContract{N,T}\n\nis a type that represents a mixed star-contraction of N edges of type T which are stored in its edges field. A MixedStarContract{N} results from N tensors sharing at least one index and at least one tensor has duplicate shared indices, e.g. 'ij,ik,iil -> jkl' is represented by MixedStarContract{1,Char}((i,)).\n\n\n\n\n\n","category":"type"},{"location":"#OMEinsum.OuterProduct","page":"Home","title":"OMEinsum.OuterProduct","text":"OuterProduct{N}\n\nis a type that represents an outer product of N tensors.\n\n\n\n\n\n","category":"type"},{"location":"#OMEinsum.Permutation","page":"Home","title":"OMEinsum.Permutation","text":"Permutation{N,T}\n\nis a type that represents a permutation of N indices which are stored in its perm field as a tuple of N integers of type T.\n\n\n\n\n\n","category":"type"},{"location":"#OMEinsum.StarContract","page":"Home","title":"OMEinsum.StarContract","text":"StarContract{N,T}\n\nis a type that represents a star-contraction of N edges of type T which are stored in its edges field. A StarContract{N} results from N tensors sharing at least one index but no tensor has duplicate shared indices, e.g. 'ij,ik,il -> jkl' is represented by StarContract{1,Char}((i,)).\n\n\n\n\n\n","category":"type"},{"location":"#OMEinsum.TensorContract","page":"Home","title":"OMEinsum.TensorContract","text":"TensorContract{N,T}\n\nis a type that represents a tensorcontraction of N edges of type T which are stored in its edges field, e.g. 'ij,jk -> ik' is represented by TensorContract{1,Char}((j,)).\n\n\n\n\n\n","category":"type"},{"location":"#OMEinsum.Trace","page":"Home","title":"OMEinsum.Trace","text":"Trace{N,T}\n\nis a type that represents a trace operation of N edges of type T, i.e. 2N indices, which are stored in its edges field, e.g. 'ijjk -> ik' is represented by Trace{1,Char}((j,))\n\n\n\n\n\n","category":"type"},{"location":"#OMEinsum.allunique-Tuple{Tuple{Vararg{T,N}} where T where N}","page":"Home","title":"OMEinsum.allunique","text":"allunique(ix)\n\nreturn true if all elements of ix appear only once in ix\n\n\n\n\n\n","category":"method"},{"location":"#OMEinsum.bpcheck-Tuple{Any,Vararg{Any,N} where N}","page":"Home","title":"OMEinsum.bpcheck","text":"bpcheck(f, args...; η = 1e-5, verbose=false)\n\nreturns a Bool indicating whether Zygote calculates the gradient of f(args...) -> scalar correctly using the relation f(x - ηg) ≈ f(x) - η|g|². If verbose=true, print f(x) - f(x - ηg)and η|g|².\n\n\n\n\n\n","category":"method"},{"location":"#OMEinsum.combineops-Union{Tuple{S}, Tuple{T}, Tuple{T,S}} where S<:OMEinsum.EinsumOp where T<:OMEinsum.EinsumOp","page":"Home","title":"OMEinsum.combineops","text":"combineops(op1, op2)\n\nreturn an operator that combines the operations of op1 and op2.\n\n\n\n\n\n","category":"method"},{"location":"#OMEinsum.edgesfrominds-Tuple{Any,Any}","page":"Home","title":"OMEinsum.edgesfrominds","text":"edgesfrominds(ixs,iy)\n\nreturn the edges of the ixs that imply an operation e.g. in ixs = ((1,2),(2,3)), iy = (1,3), edge 2 requires a tensor contraction\n\n\n\n\n\n","category":"method"},{"location":"#OMEinsum.einsum_grad-Union{Tuple{iy}, Tuple{ixs}, Tuple{EinCode{ixs,iy},Any,Any,Any,Any}} where iy where ixs","page":"Home","title":"OMEinsum.einsum_grad","text":"einsum_grad(ixs, xs, iy, y, i)\n\nreturn gradient w.r.t the ith tensor in xs\n\n\n\n\n\n","category":"method"},{"location":"#OMEinsum.einsumcost-Tuple{Any,Any,Any}","page":"Home","title":"OMEinsum.einsumcost","text":"einsumcost(ixs, sxs, ops)\n\nreturns the cost of evaluating the einsum of ixs, sxs according to the sequence in ops, where sxs is a tuple of sizes.\n\n\n\n\n\n","category":"method"},{"location":"#OMEinsum.evaluate-Tuple{OMEinsum.EinsumOp,Any,Any}","page":"Home","title":"OMEinsum.evaluate","text":"evaluate(op::EinsumOp, allixs, allxs)\n\nreturns a tuple of xs and ixs that result from the evaluation of the operator op.\n\n\n\n\n\n","category":"method"},{"location":"#OMEinsum.evaluateall-NTuple{4,Any}","page":"Home","title":"OMEinsum.evaluateall","text":"evaluateall(ixs, xs, ops,iy)\n\nevaluate the einsum specified by 'ixs -> iy' by going through all operations in ops in order.\n\n\n\n\n\n","category":"method"},{"location":"#OMEinsum.get_size_dict-Union{Tuple{X}, Tuple{T}, Tuple{N}, Tuple{Tuple{Vararg{Tuple{Vararg{T,M}} where M,N}},Tuple{Vararg{AbstractArray,X}}}} where X where T where N","page":"Home","title":"OMEinsum.get_size_dict","text":"get the dictionary of index=>size, error if there are conflicts\n\n\n\n\n\n","category":"method"},{"location":"#OMEinsum.index_map-Tuple{CartesianIndex,Tuple}","page":"Home","title":"OMEinsum.index_map","text":"take an index subset from ind\n\n\n\n\n\n","category":"method"},{"location":"#OMEinsum.indicesafteroperation-Tuple{OMEinsum.EinsumOp,Any}","page":"Home","title":"OMEinsum.indicesafteroperation","text":"indicesafteroperation(op, allixs)\n\nreturns all indices of tensors after operation op was applied.\n\n\n\n\n\n","category":"method"},{"location":"#OMEinsum.iscombineable-Union{Tuple{S}, Tuple{T}, Tuple{T,S}} where S<:OMEinsum.EinsumOp where T<:OMEinsum.EinsumOp","page":"Home","title":"OMEinsum.iscombineable","text":"iscombineable(a,b)\n\nreturn true if EinsumOps a and b can be combined into one operator.\n\n\n\n\n\n","category":"method"},{"location":"#OMEinsum.loop!-Union{Tuple{T}, Tuple{N}, Tuple{Tuple{Vararg{Any,N}},Tuple{Vararg{AbstractArray,N}},Any,AbstractArray{T,N} where N,CartesianIndices,CartesianIndices}} where T where N","page":"Home","title":"OMEinsum.loop!","text":"loop and accumulate products to y, the CPU version.\n\n\n\n\n\n","category":"method"},{"location":"#OMEinsum.map_prod-Union{Tuple{T}, Tuple{N}, Tuple{Type{T},Tuple,CartesianIndex,Tuple{Vararg{Any,N}}}} where T where N","page":"Home","title":"OMEinsum.map_prod","text":"indiex tensors, and return the product of elements\n\n\n\n\n\n","category":"method"},{"location":"#OMEinsum.match_rule-Tuple{Any,Any}","page":"Home","title":"OMEinsum.match_rule","text":"Find the matched rule.\n\n\n\n\n\n","category":"method"},{"location":"#OMEinsum.match_rule-Tuple{Type{OMEinsum.Hadamard},Any,Any}","page":"Home","title":"OMEinsum.match_rule","text":"Hadamard\n\n\n\n\n\n","category":"method"},{"location":"#OMEinsum.match_rule-Tuple{Type{OMEinsum.PTrace},Any,Any}","page":"Home","title":"OMEinsum.match_rule","text":"Ptrace rule if all indices of one ix in ixs all appear in iy or appear twice and don't appear in iy\n\n\n\n\n\n","category":"method"},{"location":"#OMEinsum.match_rule-Tuple{Type{OMEinsum.Permutedims},Any,Any}","page":"Home","title":"OMEinsum.match_rule","text":"permutation rule\n\n\n\n\n\n","category":"method"},{"location":"#OMEinsum.match_rule-Tuple{Type{OMEinsum.Sum},Any,Any}","page":"Home","title":"OMEinsum.match_rule","text":"a einsum code is sum.\n\n\n\n\n\n","category":"method"},{"location":"#OMEinsum.match_rule-Tuple{Type{OMEinsum.Tr},Any,Any}","page":"Home","title":"OMEinsum.match_rule","text":"a einsum code is trace\n\n\n\n\n\n","category":"method"},{"location":"#OMEinsum.match_rule-Union{Tuple{T}, Tuple{M}, Tuple{N}, Tuple{Type{PairWise},Tuple{Vararg{Tuple{Vararg{T,X}} where X,N}},Tuple{Vararg{T,M}}}} where T where M where N","page":"Home","title":"OMEinsum.match_rule","text":"a einsum code is a pairwise graph.\n\n\n\n\n\n","category":"method"},{"location":"#OMEinsum.nopermute-Tuple{Tuple{Vararg{T,N}} where T where N,Tuple{Vararg{T,N}} where T where N}","page":"Home","title":"OMEinsum.nopermute","text":"nopermute(ix,iy)\n\ncheck that all values in iy that are also in ix have the same relative order, e.g. nopermute((1,2,3),(1,2)) is true while nopermute((1,2,3),(2,1)) is false\n\n\n\n\n\n","category":"method"},{"location":"#OMEinsum.opcost-Tuple{OMEinsum.EinsumOp,Any,Any,Tuple{Vararg{Tuple{Vararg{Int64,N}} where N,M}} where M}","page":"Home","title":"OMEinsum.opcost","text":"opcost(op, ocost, allixs, allsxs)\n\nreturns the cost (in number of iterations it would require in a for loop) of evaluating op with arguments allixs and allsxs plus ocost as well as the new indices and sizes after evaluation.\n\nallsxs is a tuple of tuples of Ints - the sizes of the respective arrays\n\n\n\n\n\n","category":"method"},{"location":"#OMEinsum.operatorfromedge-Tuple{Any,Any,Any}","page":"Home","title":"OMEinsum.operatorfromedge","text":"operatorfromedge(edge, ixs, iy)\n\nreturns a subtype of EinsumOp which specifies the kind of operation that the reduction of edge corresponds to.\n\n\n\n\n\n","category":"method"},{"location":"#OMEinsum.operatorsfromedges-Tuple{Any,Any,Any}","page":"Home","title":"OMEinsum.operatorsfromedges","text":"operatorsfromedges(ixs, sxs, edges, iy)\n\ngiven a list of  edges edges, return a list of operations where consecutive operations are combined if possible.\n\n\n\n\n\n","category":"method"},{"location":"#OMEinsum.optimalorder-Tuple{Any,Any,Any}","page":"Home","title":"OMEinsum.optimalorder","text":"optimalorder(ixs, xs, iy)\n\nreturn a tuple of operations that represents the (possibly nonunique) optimal order of reduction-operations.\n\n\n\n\n\n","category":"method"},{"location":"#OMEinsum.optimiseorder-NTuple{4,Any}","page":"Home","title":"OMEinsum.optimiseorder","text":"optimiseorder(ixs, sxs, edges, iy)\n\nreturn a tuple of operations that represents the (possibly nonunique) optimal order of reduction-operations in ops and its cost.\n\n\n\n\n\n","category":"method"},{"location":"#OMEinsum.overlap-Tuple{Any,Any}","page":"Home","title":"OMEinsum.overlap","text":"overlap(s1, s2)\n\nreturn true if s1 and s2 share any element.\n\n\n\n\n\n","category":"method"}]
}
