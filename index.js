import { closeModal, openModal } from "./modal.js";
import { createTask } from "./tasks.js";

const addTaskBtn = document.getElementsByClassName("add-btn")[0];
addTaskBtn.addEventListener("click", openModal);

const createTaskBtn = document.getElementsByClassName("create-btn")[0];
createTaskBtn.addEventListener("click", createTask);

const cancelTaskBtn = document.getElementsByClassName("cancel-btn")[0];
cancelTaskBtn.addEventListener("click", closeModal);
