function Login() {
    var usuario = document.getElementById("usuario").value 
    var senha = document.getElementById("senha").value

    if (usuario == "adm" && senha == "123") {
        document.getElementById("resultado").innerHTML = `<strong class="strong1"> Seja bem vindo ${usuario}! 
        Você validou e entrou no sistema </strong>`
    } else {
        document.getElementById("resultado").innerHTML = `<strong class="strong2"> Usuário ou Senha inválido! </strong>`
    }
}