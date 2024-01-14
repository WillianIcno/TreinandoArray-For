
// array é uma estrutura de dados ( LISTA ) e é utilizado apartir das chaves []

// posiçoes 
//              0    1     2     3

const notas = [10, 6.5, 8, 7.5];
const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media);

console.log (notas[3])


/*Em JavaScript, a propriedade .length é usada em arrays para obter o número de elementos contidos na array. Essa propriedade 
retorna um número representando a quantidade de elementos presentes na array.

Por exemplo:

javascript
Copy code
var minhaArray = [1, 2, 3, 4, 5];
console.log(minhaArray.length);  // Saída: 5
Neste exemplo, minhaArray tem cinco elementos, então minhaArray.length retorna 5.

É importante notar que a propriedade .length não indica o índice máximo disponível na array. 
Ela fornece o número de elementos atualmente presentes. 
Se você adicionar elementos além desse número, a propriedade .length será atualizada para refletir a nova quantidade de elementos.

javascript
Copy code
var outraArray = [10, 20, 30];
console.log(outraArray.length);  // Saída: 3

outraArray[5] = 50;
console.log(outraArray.length);  // Saída: 6
Neste segundo exemplo, mesmo que o índice 5 seja atribuído, a array terá um comprimento de 6, porque agora há seis elementos,
 mesmo que alguns índices intermediários não tenham valores definidos. */