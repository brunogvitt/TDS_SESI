const aluno = {
    nome: "Rafael",
    idade: 15,
    curso: "Desenvolvimento de Sistemas"
}

console.log(aluno);
console.log(aluno.nome);
console.log(aluno["idade"]);

// Para adicionar/alterar algo no objeto:
aluno.matricula = "2026 A";
aluno.idade = 17;

console.log(aluno);

// Para deletar algo:
delete aluno.curso;
console.log(aluno);
