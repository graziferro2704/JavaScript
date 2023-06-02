function GerarImpares() {

    document.getElementById("resultado").innerHTML = `Relação de Nº impares até 20 <br>`
    var contador = 1
     
    while (contador <= 20) {
        if (contador % 2 == 1) {
            document.getElementById("resultado").innerHTML += `${contador} <br>`
        }
        contador++
    }

}

function GerarImpares2() {
    var nrInicial = document.getElementById("inicial").value
    var nrFinal = document.getElementById("final").value

    nrInicial = Number(nrInicial)
    nrFinal = Number(nrFinal)
    document.getElementById("resultado2").innerHTML = `Relação de Nº impares de ${nrInicial} até ${nrFinal}`

    for (nrInicial; nrInicial <= nrFinal; nrInicial++) {
        if (nrInicial % 2 == 1 ) {
          document.getElementById("resultado2").innerHTML += `${nrInicial} <br>`   
        }  
    }
    
}