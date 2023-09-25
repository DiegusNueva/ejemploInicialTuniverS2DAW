document.addEventListener("DOMContentLoaded", function () {
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
