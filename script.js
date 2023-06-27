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
    const taskCheckbox = document.createElement("input");
    taskCheckbox.type = "checkbox";
    const taskTextSpan = document.createElement("span");
    taskTextSpan.textContent = taskText;
    taskLabel.appendChild(taskCheckbox);
    taskLabel.appendChild(taskTextSpan);
    listItem.appendChild(taskLabel);
    listItem.classList.add("task");
    taskList.appendChild(listItem);

    taskInput.value = "";
  }
}

taskList.addEventListener("change", function (event) {
  if (event.target.matches("input[type='checkbox']")) {
    const checkbox = event.target;
    const listItem = checkbox.parentNode;
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    svg.setAttribute("class", "checkbox-svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    path.setAttribute("d", "M4,12 L9,15 L20,4");
    path.setAttribute("class", "checkbox-stroke");
    svg.appendChild(path);
    listItem.insertBefore(svg, listItem.firstChild);
    checkbox.style.display = "none";
  }
});
