// These are references to HTML elements
const taskInput = document.getElementById("taskinput");
const addButton = document.getElementById("addButton");
const submitButton = document.getElementById('submitButton');
const taskList = document.getElementById("taskList");

// Add event listener to the Add button
addButton.addEventListener("click", addTask);

// Function to add a new task
function addTask() {
  const taskText = taskInput.value;

  if (taskText) {
    // Create a new list item
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

// Function to submit the task
function submitTask() {
  const taskText = taskInput.value;

  if (taskText) {
    addTask();
  }
}

// Event listener for Enter key press
taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent form submission
    submitTask();
  }
});

// Event listener for button click
submitButton.addEventListener("click", submitTask);
