var listaUsuarios = []
//Buscando as informações do localStorage gravadas no Navegador
//Utilizo o método getItem com o nome exatamente que utilizamos no setItem
listaUsuarios = JSON.parse(localStorage.getItem('bdUsuarios'))
if (listaUsuarios == null) {
    listaUsuarios = []
}
exibirUsuarios()

//Exibindo no console a lista de usuários que carrega no vetor
console.log(listaUsuarios)

function validarCadastro(nome, login, senha, confirmarSenha) {
    if (nome == '' || login == '' || senha == '' || confirmarSenha == ''){
        return true
    } else {
        return false
    }
}

function CadastrarUsuario() {

    //Atibui o valor a variável
    var nome = document.getElementById("nome").value
    var login = document.getElementById("login").value
    var senha = document.getElementById("senha").value
    var confirmarSenha = document.getElementById("confirmarSenha").value

    var possoCadastrar = validarCadastro(nome, login, senha, confirmarSenha)
    if (possoCadastrar == true) {
        alert("Verifique se há espaços em branco!!")
        return
    } if (senha != confirmarSenha) {
        alert("Verifique sua senha!")
        return true
    }

    var usuario = {
        nome: nome,
        usuario: login,
        senha: senha
    }
    listaUsuarios.push(usuario)
    //Utilizando o localStorage que irá gravar o nosso vetor de usuarios no método setItem, preciso passar
    //como parâmetro o nome do espaço que o navegador irá reservar e passo também o vetor de usuarios
    //convertido em formato JSON
    localStorage.setItem( 'bdUsuarios', JSON.stringify(listaUsuarios))

    exibirUsuarios()

    document.getElementById("nome").value = ``
    document.getElementById("login").value = ``
    document.getElementById("senha").value = ``
    document.getElementById("confirmarSenha").value = ``
    document.getElementById("nome").focus()
}


function exibirUsuarios() {
    // Limpa os usuários que estão carregados na página. Limpa todo o conteúdo da página
    document.getElementById("resultado").innerHTML = ''

    listaUsuarios.forEach ( (item, indice) => {
    
        document.getElementById("resultado").innerHTML +=
            `<div>
                <br> <b> Nome: </b> ${item.nome} - <b> Login: </b> ${item.usuario}
                <img src='excluir.svg' class='excluir' onclick='excluirUsuario(${indice})'>
            </div>` 
    } )

    /* for (var i in listaUsuarios) {
            document.getElementById("resultado").innerHTML +=
            `<p> <b> Nome: </b> ${listaUsuarios[i].nome} - <b> Login: </b> ${listaUsuarios[i].usuario} </p>`  
    } */
}

function excluirUsuario(indice) {
    listaUsuarios.splice (indice, 1)
    localStorage.setItem( 'bdUsuarios', JSON.stringify(listaUsuarios))
    exibirUsuarios()
}


function Entrar() {

    var usuario = document.getElementById("usuarioLogin").value
    var senha = document.getElementById("senhaLogin").value

    var encontrou = false
    listaUsuarios.forEach ( item => {
        console.log (item)
        if (usuario == item.usuario && senha == item.senha) {
        alert(`${item.nome}, bem vindo ao sistema!`)
        encontrou  = true
        }
    } )

    if (encontrou == false) {
        alert("Usuário não encontrado")
    }

    /* for (var i in listaUsuarios ){
       if (usuario = listaUsuarios[i].usuario && senha == listaUsuarios[i].senha) {
        alert(`${listaUsuarios[i].nome}, bem vindo ao sistema!`)
        return true
        }
    } */
    
    exibirUsuarios()

}

function Cadastrar() {
    location.href = 'ex025.html'
}

function Login() {
    location.href = 'ex026.html'
}