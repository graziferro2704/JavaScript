function Sortear() {

    document.getElementById("resultado").innerHTML = ""
    
    for (var i = 1; i <= 6; i++ ) {
        document.getElementById("resultado").innerHTML += parseInt(Math.random() * 60) + 1 + " "
    } 
}