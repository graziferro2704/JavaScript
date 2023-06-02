function Calcular() {

    var nome = document.getElementById("nomeAluno").value
    var nota1 = document.getElementById("Nota1").value
    var nota2 = document.getElementById("Nota2").value

    var valida =  validarNota(nota1, nota2)
    if (valida == false) {
        return 
    }
    var media = calcularMedia(nota1, nota2)
    
    exibirAprovação(media, nome, nota1, nota2)

}

    function validarNota(nota1, nota2) {
    if (nota1 > 10) {
        alert("Nota 1 não pode ser maior que 10")
        return false
    }
    if (nota2 > 10) {
        alert("Nota 2 não pode ser maior que 10")
        return false
    }
}

function calcularMedia(nota1, nota2) {
    var media = (Number(nota1) + Number(nota2)) / 2
    return media
}

function exibirAprovação(media, nome, nota1, nota2) {    

    if (media >= 7) {
        document.getElementById("aprovado").innerHTML = `O(A) aluno(Aluna) ${nome} tirou nota ${nota1}
        e ${nota2} sua média foi ${media} <br>
        APROVADO`
    } else {
        document.getElementById("aprovado").innerHTML = `O(A) aluno(Aluna) ${nome} tirou nota ${nota1}
        e ${nota2} sua média foi ${media} <br>
        REPROVADO`
    }

}
