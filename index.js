var numero1
var numero2
var resultado
var resultadoOperacoes = []
var cont = 0

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

function mostrarResultados (){
    for(var i=0; i<resultadoOperacoes.length; i++) {
        alert( "Resultado da " +  (i + 1) +  "a operação realizada: " +  resultadoOperacoes[i])
    }
}

var resposta = true

while (resposta) {
    numero1 = parseFloat(prompt("Digite o primeiro número"))
    numero2 = parseFloat(prompt("Digite o segundo número"))
    var operacao = prompt("Digite 1 - ADIÇÃO; 2 - SUBTRAÇÃO; 3 - MULTIPLICACAO; 4 - DIVISÃO")
    switch (operacao) {
        case "1":
             resultado = Somar(numero1, numero2)
            alert("O resultado da soma é: "+ resultado)
            break;
        case "2":
             resultado = Subtrair(numero1, numero2)
            alert("O resultado da subtração é: "+ resultado)
            break
        case "3":
             resultado = Multiplicar(numero1, numero2)
            alert("O resultado da multiplicacao é: "+ resultado)
            break;
        case "4":
            var resultado = Dividir(numero1, numero2)
            alert("O resultado da divisão é: "+ resultado)
            break;
        default:
            alert("Operação inválida")
            break;      
    }
    resultadoOperacoes[cont] = resultado
    cont++
    var desejo = prompt("Deseja realizar outra operação? [s/n]")
    if(desejo == "n") {
        resposta = false
    }
}

mostrarResultados()
