//selectors
const todoText = document.querySelector(".todo-text");
const addButton = document.querySelector(".add");
const taskList = document.querySelector(".task-list");
const taskNumsEl = document.getElementById("task-nums");
const completedTasksEl = document.getElementById("completed-tasks");
const tasksLeftEl = document.getElementById("tasks-left");
let taskNums = 0;
let completedTasks = 0;
let tasksLeft = 0;

// tasksLeftEl.innerHTML = "Tasks Left: " + tasksLeft;
// completedTasksEl.innerHTML = "Completed Tasks: " + completedTasks;
// taskNumsEl.innerHTML = "Total Tasks: " + taskNums;

//functions
let setInfo = () => {
  tasksLeftEl.innerHTML = "Tasks Left: " + tasksLeft;
  completedTasksEl.innerHTML = "Completed Tasks: " + completedTasks;
  taskNumsEl.innerHTML = "Total Tasks: " + taskNums;
};

let newTask = (event) => {
  event.preventDefault();
  taskNums++;
  tasksLeft++;
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

  checkButton.addEventListener("change", function () {
    if (this.checked) {
      newTask.classList.replace("task", "completed-task");
      completedTasks++;
      tasksLeft--;
      console.log("total tasks:" + taskNums);
      console.log("tasks left: " + tasksLeft);
      console.log("tasks completed: " + completedTasks);
      setInfo();
    } else {
      newTask.classList.replace("completed-task", "task");
      tasksLeft++;
      completedTasks--;
      console.log("total tasks:" + taskNums);
      console.log("tasks left: " + tasksLeft);
      console.log("tasks completed: " + completedTasks);
      setInfo();
    }
  });

  deleteButton.addEventListener("click", function () {
    taskWrapper.remove();
    taskNums--;
    tasksLeft--;
    if (tasksLeft < 0) tasksLeft++;
    if (checkButton.checked) tasksLeft++;
    console.log("total tasks:" + taskNums);
    console.log("tasks left: " + tasksLeft);
    console.log("tasks completed: " + completedTasks);
    setInfo();
  });
  console.log("total tasks: " + taskNums);
  console.log("tasks left: " + tasksLeft);
  console.log("tasks completed: " + completedTasks);
  setInfo();
};
setInfo();
//event listeners
addButton.addEventListener("click", newTask);
