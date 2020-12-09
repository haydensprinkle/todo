//selectors
const todoText = document.querySelector(".todo-text");
const addButton = document.querySelector(".add");
const taskList = document.querySelector(".task-list");

//functions
let newTask = (event) => {
  event.preventDefault();
  //create new task Div
  const taskWrapper = document.createElement("div");
  taskWrapper.classList.add("task-wrapper");
  //create LI
  const newTask = document.createElement("li");
  newTask.innerHTML = todoText.value;
  todoText.value = "";
  newTask.classList.add("task");
  taskWrapper.appendChild(newTask);

  //Append to list
  taskList.appendChild(taskWrapper);
};

//event listeners
addButton.addEventListener("click", newTask);
