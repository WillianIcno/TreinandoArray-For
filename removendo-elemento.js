// O codigo .pop() serve para Remover um elemento dentro de uma array (lista) sempre retira o ultimo posicionado 
// O codigo .splice () te permite tirar um elemento dentro de um array à sua escolha, basta colocaro posicionamento do elemento
// desejado que voce quer retirar da lista 


/*const notas = [10, 6, 8, 5.5, 10];

notas.pop()

const media = (notas[0] + notas[1] + notas[2] +notas[3]) / notas.length 


console.log(media); */  // vai retornar a média retirando o ultimo elemento da array, o elemento 4 que é o 10

const notas = [10, 6, 8, 5.5, 10];

const novas = notas.splice(2)

const media = (notas[0] + notas[1] + notas[2] +notas[3]) / notas.length 


console.log(novas); 


