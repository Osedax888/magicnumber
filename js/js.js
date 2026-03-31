const numeroEntrada = document.getElementById("numero");
const intentosDiv = document.getElementById("intentos");
const mensajeDiv = document.getElementById("mensaje")

let numeroMagico = Math.floor(Math.random () *100) +1;
let numeroIntentos = 5;

function adivinar(){

let intento = numeroEntrada.value;

numeroIntentos = numeroIntentos - 1;
if (intento === numeroMagico){
mensajeDiv.textContent = "ganaste!";
return;
}

if (numeroIntentos === 0){
mensajeDiv.textContent = "perdiste :( el numero era: "+numeroMagico;
return;
}

if (intento < numeroMagico){
mensajeDiv.textContent = "el nuemro magico es mayor";

}else{
mensajeDiv.textContent = "el nuemro magico es menor";
}

intentosDiv.textContent="te quedan..."+numeroIntentos+ "intentos"
numeroEntrada.value="";



}