const modalElem = document.getElementsByClassName("modal")[0];
const taskInputElem = document.getElementsByTagName("input")[0];

window.addEventListener("click", outsideClick);
function outsideClick(ev) {
  if (ev.target == modalElem) {
    taskInputElem.value = "";
    // Dark area around
    closeModal();
  }
}

export const openModal = () => {
  modalElem.style.display = "block";
};

export const closeModal = () => {
  modalElem.style.display = "none";
};
