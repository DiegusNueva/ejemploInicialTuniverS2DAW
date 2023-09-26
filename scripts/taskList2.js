// Declaramos e inicializamos un array
const tasks = [];

// Cargamos todo el HTML y el CSS antes de realizar eventos con JavaScript
document.addEventListener("DOMContentLoaded", () => {

    // Relacionamos las etiquetas de HTML con el JavaScript
    const taskInput = document.getElementById("task-input");
    const addTaskButton = document.getElementById("add-task-button");
    const taskList = document.getElementById("task-list");

    // Cuando pulsamos el botón Abrir tarea...
    addTaskButton.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            // Agregamos la tarea al array
            tasks.push(taskText);
            // Llamamos a la función para mostrar las tareas
            displayTasks();
            // Reseteamos el valor del input
            taskInput.value = "";
        }
    });

    taskList.addEventListener("click", (event) => {
        if (event.target && event.target.classList.contains("delete-task")) {
            // Quitamos espacios al COMIENZO y al FINAL. Y seleccionamos, del elemento padre de span, que es li, el span
            const taskText = event.target.parentElement.querySelector("span").textContent.trim();
            // Buscamos el índice de la tarea en el array y la eliminamos
            const taskIndex = tasks.indexOf(taskText);
            if (taskIndex !== -1) {
                tasks.splice(taskIndex, 1);
                // Llamamos a la función para mostrar las tareas actualizadas
                displayTasks();
            }
        }
    });

    // Función para mostrar las tareas en la lista
    const displayTasks = () => {
        // Limpiamos la lista antes de mostrar las tareas actualizadas
        taskList.innerHTML = "";
        // Recorremos el array de tareas y creamos elementos <li> para cada una
        tasks.forEach((taskText) => {
            const taskItem = document.createElement("li");
            // Agregamos la clase "task-item" al elemento <li>
            taskItem.classList.add("task-item");
            taskItem.innerHTML = `
                <span>${taskText}</span>
                <button class="delete-task">Eliminar</button>
            `;
            taskList.appendChild(taskItem);
        });
    };
});

