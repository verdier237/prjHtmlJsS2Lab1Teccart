        // JavaScript source code
var out = false;
var f,c;
var render = document.getElementById("render");
do {
    out = false
     alert("Bienvenue( ℉ to ℃) convertion")
      f= prompt("Temperature en ℉ :");
    try {
        f= parseFloat(f);
    } catch (Error) {
        console.error(Error);
        out = true
        alert("error code")
    }
        if (out == false) {
            if (f>0) {
            render.innerHTML="La reponse est "+((f-32)/1.8)+" ℃"
            out = true               
        }else{
            out = false
            alert("error code")
        }

        }
}while(out == false)