var listaFilmes = []
//Buscando as informações do localStorage gravadas no Navegador
//Utilizo o método getItem com o nome exatamente que utilizamos no setItem
listaFilmes = JSON.parse(localStorage.getItem('bdFilmes'))
if (listaFilmes == null) {
    listaFilmes = []
}
exibirFilmes()

//Exibindo no console a lista de filmes que carrega no vetor
console.log(listaFilmes)

function validarCadastro(nomeFilme, imagemFilme) {
    if (nomeFilme != '' && imagemFilme != ''){
        return true
    } else {
        return false
    }
}

function CadastrarFilmes() {

    var nomeFilme = document.getElementById("nomefilme").value
    var imagemFilme = document.getElementById("imagem").value

    var possoCadastrar = validarCadastro(nomeFilme, imagemFilme)
    if (possoCadastrar == false) {
        alert("Verifique se há espaços em branco!!")
        return
    }

    var filme = {
        nome: nomeFilme,
        link : imagemFilme
    }
    listaFilmes.push(filme)
    //Utilizando o localStorage que irá gravar o nosso vetor de filmes no método setItem, preciso passar
    //como parâmetro o nome do espaço que o navegador irá reservar e passo também o vetor de filmes
    //convertido em formato JSON
    localStorage.setItem( 'bdFilmes', JSON.stringify(listaFilmes))

    exibirFilmes()

    document.getElementById("nomefilme").value = ``
    document.getElementById("imagem").value = ``
    document.getElementById("nomefilme").focus()
}

function IndicarFilme() {


    document.getElementById("indicar").innerHTML = ``

    var indicar = parseInt(Math.random() * listaFilmes.length)
    document.getElementById("indicar").innerHTML += `<div>
                                                        <p> ${listaFilmes[indicar].nome} </p> 
                                                        <img class="img" src="${listaFilmes[indicar].link}" alt=""
                                                        </div>`
}

function exibirFilmes() {
    // Limpa os filmes que estão carregados na página. Limpa todo o conteúdo da página
    document.getElementById("resultado").innerHTML = ``

    for (var i in listaFilmes) {
            document.getElementById("resultado").innerHTML += `<div> 
                                                                <p> ${listaFilmes[i].nome} </p> 
                                                                <img class="img" src="${listaFilmes[i].link}" alt="" 
                                                                </div>` 
    }
}

function Limpar() {
    listaFilmes = []
    localStorage.setItem( 'bdFilmes', JSON.stringify(listaFilmes))
    exibirFilmes()
}
