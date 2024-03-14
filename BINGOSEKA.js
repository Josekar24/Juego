function verificarEdad() {
    var edad;

    // Solicitar la edad al usuario en un bucle hasta que se ingrese un valor válido
    while (true) {
        // Solicitar la edad al usuario
        var inputEdad = prompt("Por favor, ingrese su edad:");

        // Verificar si se ingresó un valor
        if (inputEdad === null) {
            // Si se presiona el botón de cancelar, se muestra un mensaje y se sale del bucle
            alert("Debes ingresar tu edad.");
            continue;
        }

        // Convertir la entrada del usuario a un número entero
        edad = parseInt(inputEdad);

        // Verificar si se ingresó un número válido
        if (!isNaN(edad) && edad >= 0) {
            break; // Salir del bucle si se ingresó una edad válida
        } else {
            // Mostrar un mensaje de error si se ingresó un valor inválido
            alert("Por favor, ingrese una edad válida.");
        }
    }

    // Verificar si la edad es mayor o igual a 18 años
    if (edad >= 18) {
        // Mostrar un mensaje de bienvenida
        alert("¡Bienvenido a nuestra web!");

    } else {
        // Redirigir al usuario a la página correspondiente según su rango de edad
        if (edad >= 0 && edad <= 3) {
            window.location.href = "https://www.dodot.es/";
        } else if (edad >= 4 && edad <= 6) {
            window.location.href = "https://www.pocoyo.com/";
        } else if (edad >= 7 && edad <= 12) {
            window.location.href = "https://www.wizardingworld.com/";
        } else if (edad >= 13 && edad <= 17) {
            window.location.href = "https://www.lego.com/";
        }
    }
}

// Llamar a la función para verificar la edad cuando la página se carga
window.onload = verificarEdad;