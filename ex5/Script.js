// JavaScript source code
var out = false;
var note;
var render = document.getElementById("render");
do {
    alert("Bienvenue")
     note = prompt("Votre note finale")
    try {
        note = parseInt(note)
    } catch (Error) {
        console.error(Error);
    }
    if (note > 0 && note <= 59) {
        render.innerHTML = "cours echoue";
        out = true;
    } else if (note > 59 && note <= 100) {
        render.innerHTML = "cours reussi";
        out = true
    } else if (note == 0) {
        render.innerHTML = "cours abandonne";
        out = true
    }else{

        alert("Entree incorrecte reessayer")
        out = false
    }
}while(out == false)
