function GerarImagens() {
    var nrDigitado = document.getElementById("quantidade").value
    nrDigitado = Number(nrDigitado)

    for (var i = 1; i <= nrDigitado; i++) {
        document.getElementById("resultado").innerHTML += `<img src="/img/coracao.jpg">`
    }
}

var vidas = 0

function Cogumelo() {
    vidas++

    document.getElementById("coracao").innerHTML = ""

    for (var i = 1; i <= vidas; i++) {
        document.getElementById("coracao").innerHTML += `<img src="/img/coracao.jpg">`
  }
}

function Bomba() {
    vidas--

    document.getElementById("coracao").innerHTML = ``

    for (var i = 1; i <= vidas; i++) {
    document.getElementById("coracao").innerHTML = ``
   }
}

