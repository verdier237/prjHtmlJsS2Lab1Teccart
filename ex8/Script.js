// JavaScript source code
do {
    out = false
    alert("Parite")
      nbr_1= prompt("Veuillez saisir un Nombre:");
    try {
        nbr_1 = parseInt(nbr_1);
    } catch (Error) {
        console.error(Error);
        out = true
        alert("error code")
    }
        if (out == false) {
            if (nbr_1%2 == 0) {
                alert("Ce nombre est paire")
            }else{
                alert("ce nombre est impaire")
            }
            render.innerHTML="Merci";
            out = true
        }
}while(out == false)
