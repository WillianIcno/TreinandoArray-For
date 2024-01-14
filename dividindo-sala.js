
// o codigo .slice serve para Dividir uma array em duas array, 
// exemplo vc tem uma array com 10 elementos,, voce usa o .slice na array e coloca o paramentro que voce quer 
// mas nesse caso voce tem que criar uma constante para armazenar o valor das novas array

const alunos = [ 'João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 
'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

const sala1 = alunos.slice(0, alunos.length/2);
const sala2 = alunos.slice(alunos.length/2)
// uma forma mais pratica, seria  const sala1 = alunos.slice(0, alunos.legth/2)

console.log (sala1, sala2);