
// treinando com aerofunction, basta voce tirar o function e substituir por um => o restuldo será o mesmo, como no exemplo abaixo
// tres exemplos de executar a mesma função 
// A sintaxe mais usada no mercado é a AEROFUNCtION =>   
//essa logo abaixo 

/* nomes.forEach ((nome) => {
    console.log(nome)
})
 */

const nomes = ["Evaldo", "Mari", "Camis" ];

nomes.forEach (function (nome) {
    console.log(nome)
})

nomes.forEach ((nome) => {
    console.log(nome)
})

function imprimeNome (nome){
    console.log(nome)
}

nomes.forEach (imprimeNome)