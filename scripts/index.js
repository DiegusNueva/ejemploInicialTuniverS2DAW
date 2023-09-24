// Función para generar un color aleatorio en formato hexadecimal
const generateRandomColor = () => {
    const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    console.log("Color hexadecimal generado: " + color)
    return color
}

// Función para cambiar el color de fondo del body
const changeBackgroundColor = () => {
    const newColor = generateRandomColor();
    document.body.style.backgroundColor = newColor;
}

// Función para transformar la temperatura de Celsius a Fahrenheit
const convertTemperature = () => {

    // Obtenemos la temperatura en grados Celsius ingresada por el usuario
    const celsius = parseFloat(document.getElementById('celsius').value);

    // Comprobamos que hemos realizado el parseFloat() correctamente
    console.log(typeof (celsius))

    // Verificar si la entrada es válida
    if (isNaN(celsius)) {
        alert('Por favor, ingresa una temperatura válida.');
        return;
    }

    /** Calcular la temperatura en grados Fahrenheit:
     Multiplica la temperatura en grados Celsius (celsius) por 9/5.
     Luego, suma 32 al resultado obtenido en el paso anterior.
     El resultado, almacenado en la variable fahrenheit, representa la misma temperatura en grados Fahrenheit que la temperatura original en grados Celsius. */
    const fahrenheit = (celsius * 9 / 5) + 32;

    // Mostrar el resultado en la página
    document.getElementById('fahrenheit').textContent = fahrenheit.toFixed(2);

}

// Agregar un evento al botón para cambiar el color al hacer clic
const changeColorBtn = document.getElementById("changeColorBtn");

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

// Función para realizar operaciones matemáticas
const calculate = () => {

    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
    let result;

    // Uso del Switch en este caso

    switch (operator) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                result = 'No se puede dividir por cero';
            } else {
                result = num1 / num2;
            }
            break;
        default:
            result = 'Operación no válida';
    }

    // if (operator === 'add') {
    //     result = num1 + num2;
    // } else if (operator === 'subtract') {
    //     result = num1 - num2;
    // } else if (operator === 'multiply') {
    //     result = num1 * num2;
    // } else if (operator === 'divide') {
    //     if (num2 === 0) {
    //         result = 'No se puede dividir por cero';
    //     } else {
    //         result = num1 / num2;
    //     }
    // } else {
    //     result = 'Operación no válida';
    // }

    document.getElementById('result').textContent = 'Resultado: ' + result;
}

// Función para reiniciar el formulario
const resetForm = () => {
    document.getElementById('calculator-form').reset();
    document.getElementById('result').textContent = '';
}

// Manejar el envío del formulario
document.getElementById('calculator-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Evitar el envío del formulario
    calculate();
});

// Manejar el botón de reinicio
document.getElementById('reset').addEventListener('click', function () {
    resetForm();
});


