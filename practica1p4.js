document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("generateTableBtn").addEventListener("click", function() {
        let numero = prompt("Introduce un número:");
        if (numero !== null && !isNaN(numero) && numero.trim() !== "") {
            numero = parseInt(numero);
            crearTablaDeMultiplicar(numero);
        } else {
            alert("Por favor, introduce un número válido.");
        }
    });
});

function crearTablaDeMultiplicar(numero) {
    const contenedorTabla = document.getElementById("multiplicationTable");
    contenedorTabla.innerHTML = ""; // Limpiar cualquier tabla existente

    const tabla = document.createElement("table");
    const encabezado = document.createElement("thead");
    const cuerpo = document.createElement("tbody");

    // Crear encabezado de la tabla
    const filaEncabezado = document.createElement("tr");
    const th1 = document.createElement("th");
    th1.textContent = "Multiplicación";
    const th2 = document.createElement("th");
    th2.textContent = "Resultado";
    filaEncabezado.appendChild(th1);
    filaEncabezado.appendChild(th2);
    encabezado.appendChild(filaEncabezado);

    // Crear cuerpo de la tabla
    for (let i = 1; i <= 10; i++) {
        const fila = document.createElement("tr");
        const td1 = document.createElement("td");
        td1.textContent = `${numero} x ${i}`;
        const td2 = document.createElement("td");
        td2.textContent = numero * i;
        fila.appendChild(td1);
        fila.appendChild(td2);
        cuerpo.appendChild(fila);
    }

    tabla.appendChild(encabezado);
    tabla.appendChild(cuerpo);
    contenedorTabla.appendChild(tabla);
}