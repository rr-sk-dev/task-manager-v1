import { closeModal } from "./modal.js";

const tasksList = document.querySelector("ul");
const taskInputElem = document.getElementsByTagName("input")[0];

taskInputElem.addEventListener("keypress", function (ev) {
  if (ev.key === "Enter") {
    ev.preventDefault();

    if (taskInputElem.value.length > 0) {
      createTask();
    }
  }
});

const tasks = [];

export const createTask = () => {
  if (tasks.find((task) => task === taskInputElem.value)) {
    console.error("Task already created");
    return;
  }

  tasks.push(taskInputElem.value);

  const taskItem = document.createElement("li");
  taskItem.innerHTML = taskInputElem.value;
  taskItem.setAttribute("content", taskInputElem.value);

  // <i class="fa-solid fa-trash"></i>
  const deleteIconElem = document.createElement("i");
  deleteIconElem.classList.add("delete-btn");
  deleteIconElem.classList.add("fa-solid");
  deleteIconElem.classList.add("fa-trash");
  deleteIconElem.setAttribute("content", taskInputElem.value);
  deleteIconElem.addEventListener("click", deleteTask);

  taskItem.append(deleteIconElem);

  tasksList.appendChild(taskItem);

  taskInputElem.value = "";

  closeModal();
};

export const deleteTask = (ev) => {
  const existingTaskIndex = tasks.findIndex(
    (task) => task === ev.target.getAttribute("content")
  );

  if (existingTaskIndex === -1) {
    console.log("Task not found");
    return;
  }

  tasks.splice(existingTaskIndex, 1);

  const listElements = document.getElementsByTagName("li");

  for (let i = 0; i < listElements.length; i++) {
    const listElemContent = listElements[i].getAttribute("content");

    if (listElemContent === ev.target.getAttribute("content")) {
      listElements[i].remove();
    }
  }
};

// ! DELETE AFTER FIXING THE UI
for (let i = 0; i < 15; i++) {
  taskInputElem.value = "task nr: " + i;
  createTask();
}
