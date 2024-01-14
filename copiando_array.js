// o codigo ... avisa para o javascript que nao é para mudar a array original, apenas a acrescentar apartir da nova criada


const notas = [7, 7, 8, 9];

const novasNotas = [5, ...notas , 10];



console.log (`As novas notas sao ${novasNotas}`);
console.log (`As notas Originais sao ${notas}`);
