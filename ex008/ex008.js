function FecharNota() {
    debugger

    var nome = document.getElementById("nomeAluno").value
    var nota1 = document.getElementById("Nota1").value
    var nota2 = document.getElementById("Nota2").value

    if (nota1 > 10) {
        alert("Nota 1 não pode ser maior que 10")
        return
    }

    if (nota2 > 10) {
        alert("Nota 2 não pode ser maior que 10")
        return
    }

    var media = (Number(nota1) + Number(nota2)) / 2
    
    document.getElementById("resultados").innerHTML = `O(A) aluno(Aluna) ${nome} tirou nota ${nota1}
    e ${nota2} sua média foi ${media}`

    if (media >= 7) {
        document.getElementById("aprovado").innerHTML = `APROVADO`
    } else {
        document.getElementById("aprovado").innerHTML = `REPROVADO`
    }

} 