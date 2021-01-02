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

  //create check button
  const checkButton = document.createElement("input");
  checkButton.type = "checkbox";
  checkButton.value = "Done";
  checkButton.id = "checkButton";
  checkButton.name = "checkButton";
  checkButton.classList.add("check-button");
  const checkButtonLabel = document.createElement("label");
  checkButtonLabel.for = "checkButton";
  checkButtonLabel.innerText = "Done";
  taskWrapper.appendChild(checkButton);
  taskWrapper.appendChild(checkButtonLabel);
  //create delete button
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "X";
  deleteButton.classList.add("delete-button");
  taskWrapper.appendChild(deleteButton);
  //Append to list
  taskList.appendChild(taskWrapper);
  
  checkButton.addEventListener('change', function() {
    if (this.checked) {
      newTask.classList.replace("task","completed-task");
    } else {
      newTask.classList.replace("completed-task","task");
    }
  });

  deleteButton.addEventListener('click', function(){
    taskWrapper.remove();
  });

};

//event listeners
addButton.addEventListener("click", newTask);

