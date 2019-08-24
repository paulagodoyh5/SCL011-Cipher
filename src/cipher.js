window.cipher = {

  encode: (message, offset) => {
      let result="";
      let ascii= "";

    for (let i = 0; i < message.length ; i++) {
      ascii = ((message.charCodeAt(i) - 65 + offset)%26 + 65);
    
    if (ascii === 32) {
        result = String.fromCharCode(32);
    }
      ascii = String.fromCharCode(ascii);
       result += ascii;
    
  }return result;
},
  decode: (message, offset) => {

     let resultDecode="";

  for (let i = 0; i < message.length ; i++) {

    let ascii = ((message.charCodeAt(i) - 90 - offset)%26 + 90);
    ascii = String.fromCharCode(ascii);
    resultDecode += ascii;
    
    }return resultDecode;}
  }; 
