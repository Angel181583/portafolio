function verificarTexto() {
    var texto = document.getElementById("textoInput").value;
    var mensajeResultado = document.getElementById("mensajeResultado");
  
    if (texto.match(/[a-z]/) && texto.match(/[A-Z]/)) {
      mensajeResultado.innerText = "El texto contiene mayúsculas y minúsculas.";
    } else if (texto.match(/[a-z]/)) {
      mensajeResultado.innerText = "El texto contiene solo minúsculas.";
    } else if (texto.match(/[A-Z]/)) {
      mensajeResultado.innerText = "El texto contiene solo mayúsculas.";
    } else {
      mensajeResultado.innerText = "El texto no contiene ni mayúsculas ni minúsculas.";
    }
  }
  