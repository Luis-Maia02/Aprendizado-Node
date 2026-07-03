const operacao = require("./utils/operacoes.js");
const validacao = require("./utils/validacoes.js");
 
console.log("Bem-vindo à calculadora!");
 
const a = 2;
const b = 3;
 
if (validacao.validarNumeros(a) && validacao.validarNumeros(b)) {
    console.log(operacao.somar(a, b));
    console.log(operacao.subtrair(a, b));
} else {
    console.log("Erro: os valores precisam ser números");
}
 