function Verificar() {
    var nome = document.getElementById("nome").value
    var idade = document.getElementById("idade").value

    debugger

    if (idade >= 18 && idade <= 65) {
    document.getElementById("resultado").innerHTML = `<strong class="verde"> ${nome}, você é obrigado a votar </strong>`
    } else if (idade >= 16 && idade < 18 || idade > 65) {
        document.getElementById("resultado").innerHTML = `<strong class="verde"> ${nome}, você pode votar, mais NÃO é obrigado a votar </strong>` 
    } else if (idade < 16) {
        document.getElementById("resultado").innerHTML = `<strong class="verde"> ${nome}, você NÃO pode votar </strong>`
    }
}