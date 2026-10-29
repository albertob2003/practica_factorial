
function calcularFactorial() {
    let numero;
    let entradaValida = false;

    // Ciclo para solicitar el número hasta que la entrada sea válida
    while (!entradaValida) {
        let input = prompt("Por favor, ingresa un número entero para calcular su factorial:");

        // Validar si el usuario canceló el prompt
        if (input === null) {
            console.log("Operación cancelada por el usuario.");
            return;
        }

        // Convertir la entrada a número
        let numeroConvertido = Number(input);

        // Validar si no está vacío, si es un número real, si es entero y si es mayor o igual a 0
        if (input.trim() !== "" && typeof numeroConvertido === "number" && !isNaN(numeroConvertido) && Number.isInteger(numeroConvertido) && numeroConvertido >= 0) {
            numero = numeroConvertido;
            entradaValida = true;
        } else {
            alert("Error: El dato ingresado no es un número válido. Inténtalo de nuevo.");
        }
    }

    // Cálculo del factorial
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

    // Impresión del resultado por consola y alerta en el DOM
    console.log(`El factorial de ${numero} es: ${factorial}`);
    alert(`El factorial de ${numero} es: ${factorial}`);
}

// Ejecutar la función
calcularFactorial();