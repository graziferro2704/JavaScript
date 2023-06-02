var numero = parseInt(Math.random() * 100)+ 1
//alert(numero)
console.log(numero)
var tentativa = 0  

function ChutarNumero() {
    var chutar = prompt("Adivinhe o número!") 
    tentativa++

    if (numero == chutar) {
        document.getElementById("resultado").innerHTML += `<strong> PARABÉNS VOCÊ ACERTOU NO Nº${chutar} EM ${tentativa} TENTATIVAS <br>`
    } else if (numero > chutar) {
        document.getElementById("resultado").innerHTML += `Você chutou ${chutar} pensei em um número MAIOR <br>`
    } else {
        document.getElementById("resultado").innerHTML += `Você chutou ${chutar} pensei em um número MENOR <br>`
    }
}    

function NovoJogo() {
    document.getElementById("resultado").innerHTML = ``
    numero = parseInt(Math.random() * 100) + 1
    tentativa = 0
}