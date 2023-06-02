function BotaoCalcular() {
    var nr1 = document.getElementById("nrdigitado1").value
    var nr2 = document.getElementById("nrdigitado2").value

    var mais = Number(nr1) + Number(nr2)
    var menos = nr1 - nr2
    var vezes = nr1 * nr2
    var dividir = nr1 / nr2
    var sobra = nr1 % nr2
    var exponenciacao = nr1 ** nr2

    document.getElementById("resultados").innerHTML +=  `<br> ${nr1} + ${nr2} = ${mais}`
    document.getElementById("resultados").innerHTML +=  `<br> ${nr1} - ${nr2} = ${menos}`
    document.getElementById("resultados").innerHTML +=  `<br> ${nr1} * ${nr2} = ${vezes}`
    document.getElementById("resultados").innerHTML +=  `<br> ${nr1} / ${nr2} = ${dividir}`
    document.getElementById("resultados").innerHTML +=  `<br> ${nr1} % ${nr2} = ${sobra}`
    document.getElementById("resultados").innerHTML +=  `<br> ${nr1} ** ${nr2} = ${exponenciacao}`
}