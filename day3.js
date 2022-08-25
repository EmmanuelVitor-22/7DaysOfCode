let i = 0, op, qtdDeLinguagemns;
op = parseInt(prompt("Digite 1 se quer aprender a programar, ou outro numero caso não queira"))
if (op == 1) {
    qtdDeLinguagemns = parseInt(prompt("Insira quantas linguagens de programação que quer conhecer: "))
    for (i0 = 0; i < qtdDeLinguagemns.length; i++) {
        let linguagemProgramacao = prompt("Diga qual Linguagem de programação quer conhecer: ");
        console.log(`${i} - ${linguagemProgramacao}`);
    }
} else {
    console.log("Sucesso na carreira que decidir escolher!!")
}



