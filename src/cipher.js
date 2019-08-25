window.cipher = {

  encode: (message, offset) => {
      let result="";
      let ascii= "";
      let character = "";
    
    for (let i = 0; i < message.length ; i++) {
       character = message[i].charCodeAt();
      
      if(character===32){
        ascii = String.fromCharCode(32);
        result+= ascii;

      }else{
        let ascii = ((message.charCodeAt(i) - 65 + offset)%26 + 65);
        ascii = String.fromCharCode(ascii);
        result += ascii;
      } 
  }return result;
},
  decode: (message, offset) => {

     let resultDecode="";
     let ascii= "";
     let character= "";

    for (let i = 0; i < message.length ; i++) {
      character = message[i].charCodeAt();

    if(character===32){
        ascii = String.fromCharCode(32);
        resultDecode += ascii;

    }else{
      let ascii = ((message.charCodeAt(i) - 90 - offset)%26 + 90);
      ascii = String.fromCharCode(ascii);
      resultDecode += ascii;
    }
    
    }return resultDecode;
  }}; 
