// JavaScript source code
var out = false;
var nbr_1,nbr_2,sum,prod;
var render = document.getElementById("render");
do {
    out = false
     alert("Veuillez saisir respectivement deux nombres :")
      nbr_1= prompt("Nombre 1 ");
      nbr_2 = prompt("Nombre 2");
    try {
        nbr_1 = parseInt(nbr_1);
        nbr_2 = parseInt(nbr_2);
    } catch (Error) {
        console.error(Error);
        out = true
        alert("error code")
    }
        if (out == false) {
            render.innerHTML="La reponse est : "+nbr_1+nbr_2;
            out = true
        }
}while(out == false)
