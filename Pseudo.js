
var template=`for each vértice u ∈ V[G]do
estado[u] = NO_VISITADO
padre[u] = NULL
tiempo =0
for each vértice u ∈ V[G]do
if estado[u] = NO_VISITADO then
        TOPOLÓGICO-Visitar(u)
TOPOLÓGICO-Visitar(nodo u)
estado[u]=VISITADO
tiempo = tiempo+1
distancia[u] = tiempo
for each v ∈ Adyacencia[u] do
if estado[v]=NO_VISITADO then
        padre[v]=u
        TOPOLÓGICO-Visitar(v)
estado[u] = TERMINADO
tiempo = tiempo+1
finalización[u] = tiempo
insertar (lista, u)  `

console.log(template)

