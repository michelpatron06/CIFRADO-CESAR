# CIFRADO CESAR
Se pide crear una web que por medio de un prompt() ingresemos una frase y devuelva el mismo mensaje encriptado según el algoritmo de Cifrado César con el parámetro de desplazamiento de 33 espacios hacia la derecha.
## Pseudo codigo
~~~ Funcion decide (anwer)
        solicitar entre cifrar y decifrar
        si cifrar ejecutar funcion cipher
        si decifrar ejecutar funcion decipher
    fin de la funcion
    Funcion cipher(string)
        solicita ingresar frase  
        si es una frase o un campo invalido pide ingresar un valor valido
        si es un frase for(var i=0;i<string.length;i++)
            la posicion se remplaza en (position-65+33)%26+65;
            obtenemos la nueva posicion y con  String.fromCharCode(caesarCipher)  
            obtenemos la nueva letra cifrada.
    fin de la funcion
    Funcion decipher(string)
        solicita ingresar frase  
        si es una frase o un campo invalido pide ingresar un valor valido
        si es un frase for(var i=0;i<string.length;i++)
            la posicion se remplaza en (position+65-33)%26+65;
            obtenemos la nueva posicion y con  String.fromCharCode(caesarCipher)  
            obtenemos la nueva letra cifrada.
    fin de la funcion ~~~