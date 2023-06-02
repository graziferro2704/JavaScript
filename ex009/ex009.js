function Verificar() {

    var nome = document.getElementById("nome").value
    var idade = document.getElementById("idade").value

    if (idade >= 18) {
        document.getElementById("resultados").innerHTML = `PARABÉNS! ${nome}, você pode tirar CHN <br> 
        <img src="../img/CNH.img" alt="Imagem de carteira de motorista">`
    } else {
        document.getElementById("resultados").innerHTML = `QUE PENA! ${nome}, você NÃO pode tirar CNH <br>
        <img src="../img/CNH.jpg" alt="Imagem de carteira de motorista cancelada">`
    }
}