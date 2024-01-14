
//   O MÉTODO .include serve para verificar se realmente o elemento está incluso na Array 

// o .include retorna um valor booleano ( true or false)

//O método indexOf() pode ser útil para verificar a presença de um elemento e, se necessário, obter o índice desse elemento na array. 
//No entanto, é importante notar que ele faz uma comparação estrita (usando ===), o que significa que considera tanto o valor quanto o tipo. 
//Se você estiver lidando com tipos diferentes, você pode querer usar outras abordagens, como o método includes() ou o método findIndex().

const alunos = ['Joao', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias ]

function exibeNomeENota (aluno) {
        if (listaDeAlunosEMedias[0].includes(aluno)) {

            const [alunos , medias] = listaDeAlunosEMedias

            const indice = alunos.indexOf(aluno);

            const mediaDoAluno = medias[indice]

            console.log(`${aluno} tem a média ${mediaDoAluno} `)
        } else {
            console.log ("Aluno não encontrado ")
        }
}

exibeNomeENota('Andre')
