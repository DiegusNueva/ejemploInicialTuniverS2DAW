// Función para generar un color aleatorio en formato hexadecimal
function generateRandomColor() {
    const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    console.log(color)
    return color
}

// Función para cambiar el color de fondo del body
function changeBackgroundColor() {
    const newColor = generateRandomColor();
    document.body.style.backgroundColor = newColor;
}

// Agregar un evento al botón para cambiar el color al hacer clic
const changeColorBtn = document.getElementById("changeColorBtn");
changeColorBtn.addEventListener("click", changeBackgroundColor);