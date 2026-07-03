function validarNome(nome) {
    if (nome.length <= 3) {
        console.log("Nome deve ter pelo menos 3 caracteres.");
    }else{
        console.log("Nome válido.");
    }
}

function validarIdade(idade){
    if (idade < 0){
        console.log("Idade Inválida");
    }else{
        console.log ("Idade válida");
    }
}

module.exports = {
    validarNome,
    validarIdade
}
    