//variables
const inputTask = document.getElementById("input");
const addTask = document.getElementById("add");
const taskList = document.getElementById("task-list");
const checkedTasks = document.getElementById("checked");
const totalTasks = document.getElementById("total");


//array initial, added numbers to avoid multiple erase of tasks
let tasks = [
  { id: Date.now(), task: "Regar el pasto", state: false },
  { id: Date.now()+1, task: "Regar los arboles", state: false },
  { id: Date.now()+2, task: "Regar las flores", state: false },
];


// render data
displaytasks();

//eventos del boton
add.addEventListener("click", addtasks);


// displaytasks
function displaytasks() {
  let html = "";
  tasks.forEach((task) => {
    const { id, task: t, state } = task;
    html += `
    <tr>
    <td>${id}</td>
    <td>${t}</td>
    <td>
        <input type="checkbox" id="checkbox-${id}" onclick="checktasks(${id})" ${
      state ? "checked" : ""
    }>
    </td>
    <td>
        <button class='deletebtn' onclick="deletetasks(${id})">X</button>
    </td>

    </tr>`;
  });
  //display tasks
  taskList.innerHTML = html;
  //display total tasks
  totalTasks.textContent = tasks.length;
  //display checked tasks, filter lenght of true tasks
  checkedTasks.textContent = tasks.filter((task) => task.state).length;
}

// addtasks
function addtasks() {
  if (inputTask.value === "") {
    alert("No puedes agregar una tarea vacia");
  }

  const newTask = { id: Date.now(), task: inputTask.value, state: false };

  tasks.push(newTask);
  inputTask.value = "";
  displaytasks();
}

// deletetasks
function deletetasks(id) {
  const newTask = tasks.filter((task) => task.id !== id);
  tasks = newTask;
  displaytasks();
}

// checktasks
function checktasks(id) {
  const checkbox = document.getElementById(`checkbox-${id}`);
  tasks.forEach((task) => {
    if (task.id === id) {
      task.state = checkbox.checked;
    }
  });
  displaytasks();
}
