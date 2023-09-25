// document.addEventListener -> es una función de JavaScript que se utiliza para escuchar eventos en una página web. En otras palabras, te permite decirle al navegador que esté atento a algo específico que pueda ocurrir en la página y que ejecute cierto código cuando ese evento suceda.

// DOMContentLoaded: Es una forma de garantizar que tu código JavaScript se ejecute solo después de que la página web haya terminado de cargarse, evitando problemas de interacción con elementos que aún no han aparecido en la pantalla.

document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task-input");
    const addTaskButton = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            createTask(taskText);
            taskInput.value = "";
        }
    });

    taskList.addEventListener("click", function (event) {
        if (event.target && event.target.classList.contains("delete-task")) {
            event.target.parentElement.remove();
        }
    });

    function createTask(text) {
        const taskItem = document.createElement("li");
        taskItem.classList.add("task-item");
        taskItem.innerHTML = `
            <span>${text}</span>
            <button class="delete-task">Eliminar</button>
        `;
        taskList.appendChild(taskItem);
    }
});
