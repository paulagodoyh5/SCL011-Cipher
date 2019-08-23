//Mostrar y ocultar página de bienvenida
let btnShow;
let divHidden;

btnShow = document.getElementById("showButton");
btnShow.addEventListener("click", () => {

divHidden = document.getElementById("firstBox");
divHidden.style.display= "none";
})

//Mostrar página principal de cifrado

btnShow = document.getElementById("showButton");
btnShow.addEventListener("click", () => {
    
divHidden = document.getElementById("principalPage");
divHidden.style.display= "block";
})

//Variables y constantes

/*
const offset = document.getElementById("offsetText");

const message = document.getElementById("principalText");

const showResult = document.getElementById("cipherText");
*/

//Funcion para que ingresar texto 
const btnSave = document.getElementById("cipherButton");
btnSave.addEventListener("click", () => {
let message = document.getElementById("principalText").value.toUpperCase();
    //message= message.toUpperCase();
let offset = parseInt(document.getElementById("offsetText").value);

document.getElementById("cipherText").innerHTML = window.cipher.encode(message, offset);

});


//Funcion para ingresar numero de offset

/*document.getElementById("cipherButton").addEventListener("click",
()=> {

offset = parseInt(document.getElementById("offsetText").value);
    console.log(offset)
});
*/

const btnSave1 = document.getElementById("decipherButton");
btnSave1.addEventListener("click", () => {
let message = document.getElementById("principalText1").value.toUpperCase();
let offset = parseInt(document.getElementById("offsetText").value);

document.getElementById("decipherText").innerHTML = window.cipher.decode(message, offset);

});