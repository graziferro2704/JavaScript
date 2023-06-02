var filmes = []

function CadastrarFilmes() {

    var nomefilme = document.getElementById("nomefilme").value
    filmes.push(nomefilme)
    document.getElementById("resultado").innerHTML =``

    for (var i = 0; i < filmes.length; i++) {
        document.getElementById("resultado").innerHTML += `${filmes[i]} <br>`
    }
}

function Limpar() {
    document.getElementById("resultado").innerHTML = ``
    document.getElementById("nomefilme").value = ``
}