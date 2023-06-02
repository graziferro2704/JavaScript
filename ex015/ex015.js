function GerarTabuada() {
    var nrDigitado = Number(document.getElementById("numero").value)
    document.getElementById("resultado").innerHTML = `Tabuada do ${nrDigitado} <br>`
    var contador = 1
    
    while (contador <=10 ) {
        var multiplicacao = contador * nrDigitado
        document.getElementById("resultado").innerHTML += `${nrDigitado} x ${contador} = ${multiplicacao} <br>`

        contador++
 
    }
}