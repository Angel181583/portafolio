
// Función para manejar el evento del botón y mostrar el resultado
function revisar() {
    var entrada = document.getElementById("entrada").value;
    var resul = document.getElementById("res");
    var res2 = palindromo(entrada);
    resul.textContent = res2;
}

// Función para verificar si una cadena es un palíndromo
function palindromo(cadena) {
    var resultado = "La frase \"" + cadena + "\"";
    var cadenaOriginal = cadena.toLowerCase();
    var letrasEspacios = cadenaOriginal.split("");
    var cadenaSinEspacios = "";
    
    // Eliminar los espacios de la cadena
    for (let i in letrasEspacios) {
        if (letrasEspacios[i] != " ") {
            cadenaSinEspacios += letrasEspacios[i];
        }
    }

    var letras = cadenaSinEspacios.split("");
    var letrasReves = cadenaSinEspacios.split("").reverse();
    var iguales = true;

    // Comparar la cadena original con su versión invertida
    for (let i in letras) {
        if (letras[i] != letrasReves[i]) {
            iguales = false;
            break;
        }
    }

    // Determinar si es un palíndromo
    if (iguales) {
        resultado += " es un palíndromo.";
    } else {
        resultado += " no es un palíndromo.";
    }
    return resultado;
}

