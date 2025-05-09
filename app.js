let addTaskBtn = document.querySelector("#addTaskBtn");
let inputTask = document.querySelector("#inputTask");
let listItems = document.querySelector(".lists");

// Function to add a new task
function addTask() {
    let task = inputTask.value.trim();
    if (task === "") return; // Prevent empty tasks

    let listItem = document.createElement("div");
    listItem.classList.add("listItem");

    let input = document.createElement("input");
    input.type = "checkbox";
    input.classList.add("checkbox");

    let taskText = document.createElement("p");
    taskText.textContent = task;

    listItem.appendChild(input);
    listItem.appendChild(taskText);
    listItems.appendChild(listItem);
    
    inputTask.value = ""; // Clear input field
}

// Click event for the button
addTaskBtn.addEventListener("click", addTask);

// Keypress event for the "Enter" key
inputTask.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

// Event Delegation: Listen for checkbox changes on the parent `.lists` container
listItems.addEventListener("change", function (event) {
    if (event.target.classList.contains("checkbox")) {
        let taskText = event.target.nextElementSibling;
        taskText.style.textDecoration = event.target.checked ? "line-through" : "none";
    }
});
