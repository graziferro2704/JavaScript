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
