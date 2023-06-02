
function ChutarMes() {
    var mesSorteado = parseInt(Math.random() * 15) + 1
    var nome = document.getElementById("nome").value

    switch (mesSorteado) {
        case 1:
           document.getElementById("resultado").innerHTML = `${nome}, você vai se casar no de mês de Janeiro <br>` 
           break  
  
        case 2:
            document.getElementById("resultado").innerHTML = `${nome}, você vai se casar no de mês de Fevereiro <br>` 
           break
  
        case 3:
            document.getElementById("resultado").innerHTML = `${nome}, você vai se casar no de mês de Março <br>` 
           break
  
        case 4:
            document.getElementById("resultado").innerHTML = `${nome}, você vai se casar no de mês de Abril <br>` 
           break
  
        case 5:
            document.getElementById("resultado").innerHTML = `${nome}, você vai se casar no de mês de Maio <br>` 
           break
  
        case 6:
            document.getElementById("resultado").innerHTML = `${nome}, você vai se casar no de mês de Junho <br>` 
           break
  
        case 7:
            document.getElementById("resultado").innerHTML = `${nome}, você vai se casar no de mês de Julho <br>` 
           break

        case 8:
            document.getElementById("resultado").innerHTML = `${nome}, você vai se casar no de mês de Agosto <br>` 
           break

        case 9:
            document.getElementById("resultado").innerHTML = `${nome}, você vai se casar no de mês de Setembro <br>` 
           break

        case 10:
            document.getElementById("resultado").innerHTML = `${nome}, você vai se casar no de mês de Outubro <br>` 
           break

        case 11:
            document.getElementById("resultado").innerHTML = `${nome}, você vai se casar no de mês de Novembro <br>` 
           break

        case 12:
            document.getElementById("resultado").innerHTML = `${nome}, você vai se casar no de mês de Dezembro <br>` 
            break
  
        default:
          document.getElementById("resultado").innerHTML = `<strong> ${nome}, VOCÊ NÃO VAI SE CASAR </strong> <br>
          <img src="../img/gif.festa2.gif" alt="GIF de festa">` 
    }

}