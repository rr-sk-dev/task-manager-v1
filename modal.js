const modalElem = document.getElementsByClassName("modal")[0];
const taskInputElem = document.getElementsByTagName("input")[0];

const createBtn = document.getElementsByClassName("create-btn")[0];

const disableButton = () => {
  createBtn.disabled = true;
  createBtn.style["color"] = "#666";
  createBtn.style["background-color"] = "#ccc";
  createBtn.style["cursor"] = "not-allowed";
};

const enableButton = () => {
  createBtn.disabled = false;
  createBtn.style["color"] = "#000";
  createBtn.style["background-color"] = "var(--green)";
  createBtn.style["cursor"] = "pointer";
};

function updateActionButtons(ev) {
  if (ev.target.value.length === 0) {
    disableButton();
  } else {
    enableButton();
  }
}

taskInputElem.addEventListener("input", updateActionButtons);

window.addEventListener("click", outsideClick);
function outsideClick(ev) {
  if (ev.target == modalElem) {
    taskInputElem.value = "";
    // Dark area around
    closeModal();
  }
}

export const openModal = () => {
  disableButton();

  modalElem.style.display = "block";
};

export const closeModal = () => {
  modalElem.style.display = "none";
};
