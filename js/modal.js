const modal = document.querySelector(".backdrop");
const modalBtnOpen = document.querySelector(".modal-btn-open");
const modalBtnClose = document.querySelector(".modal-btn-close");

// Toggle function to show/hide the modal
const toggleModal = () => {
  modal.classList.toggle("is-hidden");
};

// Adding click event listeners to open and close buttons
modalBtnOpen.addEventListener("click", toggleModal);
modalBtnClose.addEventListener("click", toggleModal);
