function GerarTabuada2() {
    var nrDigitado = Number(document.getElementById("numero").value)
    document.getElementById("resultado").innerHTML = `Tabuada do ${nrDigitado} <br>`

    for (var contador = 1; contador <= 10; contador++) {
    var multiplicacao = nrDigitado * contador    
    document.getElementById("resultado").innerHTML += `${nrDigitado} x ${contador} = ${multiplicacao} <br>`
}
}