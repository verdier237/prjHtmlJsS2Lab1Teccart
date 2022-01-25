// JavaScript source code
var out = false;
var pU,numA,tva;
var render = document.getElementById("render");
do {
    out = false
     alert("Bienvenue")
      pU= prompt("Prix unitaire HT :");
      numA= prompt("Nombre articles :");
      tva = prompt("Taux TVA :")
    try {
        pU = parseFloat(pU);
        numA = parseFloat(numA);
        tva = parseFloat(tva);
    } catch (Error) {
        console.error(Error);
        out = true
        alert("error code")
    }
        if (out == false) {
            if (pU > 0 && numA >0 && tva >0) {
             alert("Le prix total HT  :"+(pU*numA))
            alert("Le prix total TTC :"+((pU*numA)+tva))
            render.innerHTML="Merci !"
            out = true               
        }else{
            out = false
            alert("error code")
        }

        }
}while(out == false)