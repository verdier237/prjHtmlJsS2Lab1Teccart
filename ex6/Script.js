// JavaScript source code
var out = false;
var pU,numA,tva,ttcR,ttc;
var render = document.getElementById("render");
do {
    out = false
     alert("Bienvenue")
      pU= prompt("Prix unitaire HT :");
      numA= prompt("Nombre articles :");
      tva = 0;
    try {
        pU = parseFloat(pU);
        numA = parseInt(numA);
        tva = ((pU*numA)*17)/100;
        ttcR = 0;
        ttc=0;
    } catch (Error) {
        console.error(Error);
        out = true
        alert("error code")
    }
        if (out == false) {
            ttc = (pU*numA)+tva;
            alert("Le prix total TTC : "+ttc);
            if (ttc < 1000) {
            render.innerHTML="remise obtenue "+ttcR+" $  le nouveau montant ttc est "+ttc+" $";
            out = true 
            }else if (ttc >=1000 && ttc <2000){
            alert("Felicitation vous obtenez une remise 🎇")
            ttcR = ttc/100
            render.innerHTML="remise obtenue "+ttcR+" $  le nouveau montant ttc est "+(ttc-ttcR)+" $";
            out = true 
            }else if (ttc >=2000 && ttc <5000){
            alert("Felicitation vous obtenez une remise 🎇")
            ttcR = (2*ttc)/100
            render.innerHTML="remise obtenue "+ttcR+" $  le nouveau montant ttc est "+(ttc-ttcR)+" $";
            out = true         
            }else if (ttc >=5000){
            alert("Felicitation vous obtenez une remise 🎇")
            ttcR = (5*ttc)/100
            render.innerHTML="remise obtenue "+ttcR+" $  le nouveau montant ttc est "+(ttc-ttcR)+" $";
            out = true 
            }else{
             out = false
            alert("error code")               
            }
        }else{
            out = false
            alert("error code")
        }
}while(out == false)