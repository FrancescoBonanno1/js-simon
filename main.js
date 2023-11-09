valore = [(Math.floor(Math.random()*5)+1),(Math.floor(Math.random()*5)+1), (Math.floor(Math.random()*5)+1), (Math.floor(Math.random()*5)+1), (Math.floor(Math.random()*5)+1)];
document.getElementById("numeri").innerHTML = (valore);

setInterval(function() {
    document.getElementById("numeri").classList.add("displaynone")
}, 3000);

for (let i = 0; i < valore.length; i++) {
 var cifra = valore[i] ;
    console.log(cifra);
   
}
setInterval(function() {
let domanda = prompt("Inserisci i valori che hai visto")
}, 5000);