// These are references to HTML elements
const taskInput = document.getElementById("taskinput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById
    ("taskList");

// Add event listener to the Add button. this creates a new text box with the specified text written in the input=text box. 
addButton.addEventListener("click", addTask);

// Function to add a new task
function addTask() {
    const taskText = taskInput.value;

    if (taskText) {
        // Create a new list item
        const listItem = document.createElement("li");
        listItem.innerText = taskText;

        // Add the new item to the task list
        taskList.prepend(listItem);

        // Clear the input field
        taskInput.value = "";
    }

}
