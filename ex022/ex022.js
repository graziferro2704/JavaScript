var filmes = []
var imagem = []

function CadastrarFilmes() {
    document.getElementById("resultado").innerHTML = ``

    var nomefilme = document.getElementById("nomefilme").value
    var linkimagem = document.getElementById("imagem").value

    filmes.push(nomefilme)
    imagem.push(linkimagem)
    
    for (var i in filmes) {
   //for (var i = 0; i < filmes.length; i++) {
        document.getElementById("resultado").innerHTML += `<div> 
                                                            <p> ${filmes[i]} </p> 
                                                            <img class="img" src="${imagem[i]}" alt="" 
                                                            </div>` 
    }
}

function IndicarFilme() {
    document.getElementById("indicar").innerHTML = ``

    var indicar = parseInt(Math.random() * filmes.length)
    document.getElementById("indicar").innerHTML += `<div>
                                                        <p> ${filmes[indicar]} </p> 
                                                        <img class="img" src="${imagem[indicar]}" alt=""
                                                        </div>`
}

function Limpar() {
    document.getElementById("nomefilme").value = ``
    document.getElementById("imagem").value = ``
}
