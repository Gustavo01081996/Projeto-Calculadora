var numero1 = parseFloat(prompt("Digite o primeiro número"))
var numero2 = parseFloat(prompt("Digite o segundo número"))

function Somar(num1, num2) {
    var soma = num1 + num2
    return soma
}

var resultadoSoma = Somar(numero1, numero2)
alert("O resultado da soma é: " + resultadoSoma)
