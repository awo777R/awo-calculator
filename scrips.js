const pantalla = document.getElementById("pantalla");
const botones = document.querySelectorAll("button");
const historial = document.getElementById("historial");

let operacion = "";

// Recorremos todos los botones
botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const valor = boton.textContent;

        if (valor === "C") {
            // Limpiar pantalla y operación
            operacion = "";
            pantalla.textContent = "0";

        } else if (valor === "=") {
            // Calcular el resultado
            try {
                let resultado = eval(operacion); // eval interpreta la expresión
                historial.innerHTML += `<li>${operacion} = ${resultado}</li>`;
                pantalla.textContent = resultado;
                operacion = resultado.toString(); // para seguir calculando desde el resultado
            } catch {
                pantalla.textContent = "Error";
                operacion = "";
            }

        } else {
            // Agregar número u operador a la operación
            if (pantalla.textContent === "0" && !isNaN(valor)) {
                operacion = valor; // reemplaza el cero inicial
            } else {
                operacion += valor;
            }
            pantalla.textContent = operacion;
        }
    });
});
