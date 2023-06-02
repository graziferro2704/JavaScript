function ExibirFilmes() {
    var filmes = [`Velozes e Furiosos 10`, `Harry Potter`, `Homem Aranha`,
                  `Toy Story 4`, `Jumandi 2`, `Vingadores`]

    document.getElementById("resultado").innerHTML = ``              

    for (var i = 0; i < filmes.length; i++) {
        
        document.getElementById("resultado").innerHTML += `Posição do vetor ${i} - Filme ${filmes[i]} <br>`
    }             
}