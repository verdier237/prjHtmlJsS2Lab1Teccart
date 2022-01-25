// JavaScript source code
var lineBr = document.createElement("br")
var render = document.getElementById("render");
var p = document.createElement("p")
     alert("Bienvenue")   
for (var i = 1; i <= 12; i++) {
   var p = document.createElement("p")
   var t = document.createTextNode("12 x "+i+" = "+(i*12));
   p.appendChild(t)
   render.appendChild(p)
   render.appendChild(lineBr)
   console.log(i)
}
