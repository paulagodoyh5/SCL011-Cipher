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

//Funcion para ingresar texto y offset - Cifrar 

const btnSave = document.getElementById("cipherButton");

    btnSave.addEventListener("click", () => {

let message = document.getElementById("principalText").value.toUpperCase(); 

let offset = parseInt(document.getElementById("offsetText").value);

    document.getElementById("cipherText").innerHTML = window.cipher.encode(message, offset);

});

//Funcion para ingresar texto y offset - Descifrar 

const btnSaave = document.getElementById("decipherButton");

    btnSaave.addEventListener("click", () => {

let message = document.getElementById("principalText1").value.toUpperCase();

let offset = parseInt(document.getElementById("offsetText").value);

    document.getElementById("decipherText").innerHTML = window.cipher.decode (message, offset);

});