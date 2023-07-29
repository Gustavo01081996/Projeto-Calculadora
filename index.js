var numero1 
var numero2 

function Somar(num1, num2) {
    var soma = num1 + num2
    return soma
}



function Subtrair(num1, num2) {
    var subtracao = num1 - num2
    return subtracao
}


function Multiplicar(num1, num2) {
    var multiplicacao = num1 * num2
    return multiplicacao
}



function Dividir(num1, num2) {
    var divisao = num1 / num2
    return divisao
}
var resposta  = true
while (resposta) {
    numero1 = parseFloat(prompt("Digite o primeiro número"))
    numero2 = parseFloat(prompt("Digite o segundo número"))

    var operacao = prompt("Digite 1 - ADIÇÃO; 2 - SUBTRAÇÃO; 3 - MULTIPLICACAO; 4 - DIVISÃO")
    switch (operacao) {
        case "1":
            var resultadoSoma = Somar(numero1, numero2)
            alert("O resultado da soma é: " + resultadoSoma)
            break;
        case "2":
            var resultadoSubtracao = Subtrair(numero1, numero2)
            alert("O resultado da subtração é: "+ resultadoSubtracao)
            break
        case "3":
            var resultadoMultiplicacao = Multiplicar(numero1, numero2)
            alert("O resultado da multiplicacao é: "+ resultadoMultiplicacao)
            break;
        case "4":
            var resultadoDivisão = Dividir(numero1, numero2)
           alert ("O resultado da divisão é: "+ resultadoDivisão)
            break;
        default:
            alert("Operação inválida")
            break;      
    }
    var desejo = prompt("Deseja realizar outra operação? [s/n]")
    if(desejo == "n") {
        resposta = false
    }
}

