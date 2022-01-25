// JavaScript source code
var lineBr = document.createElement("br")
var render = document.getElementById("render");
var p = document.createElement("p")
var i =1;
     alert("Bienvenue")   
while(i<=12) {
   var p = document.createElement("p")
   var t = document.createTextNode("12 x "+i+" = "+(i*12));
   p.appendChild(t)
   render.appendChild(p)
   render.appendChild(lineBr)
   i++;
   console.log(i)
}
