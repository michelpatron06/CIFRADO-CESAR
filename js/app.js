 //El programa cifra y decifrar tanto letras mayúsculas como minúsculasmediante el ALGORITMO DE CIFRADO CESAR 
//   // El usuario no debe poder ingresar un campo vacío o que contenga números
function cipher (string){  
    if(typeof(string)=== "number" && string.length === 0){  /*si el dato ingresado es un numero o un campo vacion retorna mensaje */
      return "Porfavor Ingresa un valor valido";
    }
    else {
        var caesarCipher = ''; /* declaro un variable que contenga un string vacio recibira las letrar cifradas */
        for(var i=0;i<string.length;i++){/*recorro el string por medio de un for para obtener las posiciones iniciales*/
            var positionAscii = string.charCodeAt(i);/*mediante charCodeAt obtengo la posicion asciii*/
            var posicitionCaesarCipher =(positionAscii-65+33)%26+65; /*obtengo la nueva posicion ascii segun el cifrado cesar*/
            var newLetter= String.fromCharCode(posicitionCaesarCipher); /*convierto la posicion ascii en una nueva letra*/
        caesarCipher = caesarCipher + newLetter; 
        }return caesarCipher;/*obtengo la nueva frase cifrada*/
    }
}

// console.log(cipher(window.prompt("cifrado").toUpperCase()));

function decipher (string){  
    if(typeof(string)=== "number" && string.length === 0){  /*si el dato ingresado es un numero o un campo vacion retorna mensaje */
      return "Porfavor Ingresa un valor valido";
    }
    else {
        var caesarDecipher = ''; /* declaro un variable de decifrado que contenga las nuevas letras*/
        for(var i=0;i<string.length;i++){/*recorro el string por medio de un for para obtener las posiciones iniciales de las letras que introdujimos*/
            var positionAscii = string.charCodeAt(i);/*mediante charCodeAt obtengo la posicion asciii*/
            var posicitionCaesarCipher =(positionAscii-65+33)%26+65; /*obtengo la nueva posicion ascii segun el cifrado cesar*/
            var newLetter= String.fromCharCode(posicitionCaesarCipher); /*convierto la posicion ascii en una nueva letra*/
        caesarDecipher = caesarDecipher + newLetter; 
        }return caesarDecipher; /*obtengo la frase decifrada*/
    }
}

// console.log(decipher(window.prompt().toUpperCase()));


function decide (answer){ /*creo una funcion que me permite ejecutar el codigo dependiendo de lo que quiero hacer cifrar o decifrar*/
  if (answer === "CIFRAR"){
    return console.log(cipher(window.prompt("Ingrese frase a cifrar").toUpperCase()));/*dependiendo de la respuesta ejecutamos funcion indicada*/
  }
  else if (answer === "DECIFRAR"){
    return console.log(decipher(window.prompt("Ingrese frase a decifrar").toUpperCase()));
  }
}


decide ((window.prompt("CIFRAR O DECIFRAR")).toUpperCase());




















