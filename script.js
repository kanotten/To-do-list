const taskInput = document.getElementById("taskinput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addTask();
    }
});

function addTask() {
    const taskText = taskInput.value;

    if (taskText) {
        const listItem = document.createElement("li");
        const taskLabel = document.createElement("label");
        const switchCheckbox = document.createElement("input");
        switchCheckbox.type = "checkbox";
        switchCheckbox.classList.add("switch-checkbox");
        const switchSlider = document.createElement("span");
        switchSlider.classList.add("switch-slider");
        taskLabel.appendChild(switchCheckbox);
        taskLabel.appendChild(switchSlider);
        const taskTextSpan = document.createElement("span");
        taskTextSpan.textContent = taskText;
        taskLabel.appendChild(taskTextSpan);
        listItem.appendChild(taskLabel);
        listItem.classList.add("task");
        taskList.appendChild(listItem);

        taskInput.value = "";
    }
}
