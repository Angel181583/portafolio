function genera_rfc() {
    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById("nombre").value.trim().toUpperCase();
    var ap = document.getElementById("ap").value.trim().toUpperCase();
    var am = document.getElementById("am").value.trim().toUpperCase();
    var anio = document.getElementById("anio").value.trim();
    var mes = document.getElementById("mes").value.trim();
    var dia = document.getElementById("dia").value.trim();

    // Verificar que el año tenga 4 dígitos
    if (anio.length !== 4) {
        alert("Por favor ingresa un año válido de 4 dígitos.");
        return;
    }

    // Convertir el mes y día a dos dígitos si son menores a 10
    if (mes.length === 1) {
        mes = "0" + mes;
    }
    if (dia.length === 1) {
        dia = "0" + dia;
    }

    // Obtener los primeros dos caracteres del apellido paterno
    var primerosDosAp = ap.substring(0, 2);

    // Obtener el primer caracter del apellido materno
    var primerCaracterAm = am.charAt(0);

    // Obtener los últimos dos dígitos del año
    var ultimosDosAnio = anio.substring(2);

    // Formar el RFC
    var rfc = primerosDosAp + primerCaracterAm + ultimosDosAnio + mes + dia;

    // Mostrar el RFC en el cuadro de texto de resultado
    document.getElementById("resultado").value = rfc;
}
