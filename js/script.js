const display = document.querySelector('#display'); // Cambia 'display' por '#display'
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id === "=") {
            try {
                display.value = eval(display.value); // Evalúa la expresión
            } catch {
                display.value = "Error"; // Muestra "Error" si eval falla
            }
        } else if (button.id === "ac") {
            display.value = ''; // Limpia el display
        } else if (button.id === "de") {
            display.value = display.value.slice(0, -1); // Borra el último carácter
        } else if (button.id === "00") {
            display.value += "00"; // Agrega "00" al display
        } else {
            display.value += button.id; // Agrega el valor del botón al display
        }
    });
});
