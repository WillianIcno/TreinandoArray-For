// ESTUDAR ESSE MÉTODO POR QUE ELE É O FOR MAIS UTILIZADO DO MERCADO, E TAMBÉM O MAIS SIMPLES, EM JAVASCRIPT

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0

notas.forEach (function(nota) {
    somaDasNotas += nota
    console.log(indice)
});

const media = somaDasNotas / notas.length;

console.log(` A media do aluno é de ${media} pontos, Parabéns APROVADO `)

 /* forEach é um método disponível em arrays em JavaScript, e ele é utilizado para iterar sobre os elementos da array. 
 A principal vantagem do forEach é fornecer uma forma simples e legível de percorrer todos os elementos de uma array, 
 aplicando uma função de callback a cada um deles.

Aqui está um exemplo básico de uso do forEach:

javascript
Copy code
const minhaArray = [1, 2, 3, 4, 5];

minhaArray.forEach(function(elemento) {
    console.log(elemento);
});
Neste exemplo, a função de callback dentro do forEach é executada para cada elemento da array, imprimindo cada elemento no console.

Vantagens de usar forEach:

Simplicidade e Legibilidade: O uso do forEach torna o código mais claro e legível, 
especialmente quando você precisa realizar uma ação para cada elemento na array.

Sem Necessidade de Contadores ou Índices: Ao contrário de um loop for tradicional, 
o forEach evita a necessidade de usar contadores ou índices para percorrer a array. 
Ele lida automaticamente com o controle de iteração.

Função de Callback: O forEach aceita uma função de callback como argumento, 
permitindo que você especifique a lógica a ser executada para cada elemento. 
Isso facilita a aplicação de operações específicas em cada item da array.

Exemplo usando arrow function como callback:

javascript
Copy code
const minhaArray = [1, 2, 3, 4, 5];

minhaArray.forEach(elemento => {
    console.log(elemento);
});
Lembre-se de que, embora forEach seja uma escolha conveniente e clara para iteração em arrays, 
outras construções como for...of, map, filter, e reduce também são poderosas e podem ser mais adequadas 
dependendo da tarefa específica que você está realizando. */






