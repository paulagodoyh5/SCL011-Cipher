window.cipher = {
  encode: (message, offset) => {
let result="";

  for (let i = 0; i < message.length ; i++) {

   let ascii = ((message.charCodeAt(i) - 65 + offset)%26 + 65);

//CIFRADO MAYUSCULAS 
 //if (ascii >= 65 && ascii <= 90) {
    //result = (ascii - 65 + offset) % 26 + 65;
     ascii = String.fromCharCode(ascii);
    result += ascii;
    
  }return result;
},
  decode: (message, offset) => {
    /* Acá va tu código */
  let resultDecode="";

  for (let i = 0; i < message.length ; i++) {

   let ascii = ((message.charCodeAt(i) - 90 - offset)%26 + 90);

//CIFRADO MAYUSCULAS 
 //if (ascii >= 65 && ascii <= 90) {
    //result = (ascii - 65 + offset) % 26 + 65;
     ascii = String.fromCharCode(ascii);
    resultDecode += ascii;
    
  }return resultDecode;
  }
  }; 
