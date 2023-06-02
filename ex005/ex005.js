function calcular() {
    var nr = document.getElementById("nrdigitado").value
    var dobro = nr * 2
    var metade = nr / 2
    document.getElementById("resultados").innerHTML += `<br> O dobro do número ${nr} é igual a ${dobro} e a metade
    é igual a ${metade}`

}

function limpar() {
    document.getElementById("resultados").innerHTML = ""
    document.getElementById("nrdigitado").value = ""
}