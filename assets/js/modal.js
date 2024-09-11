const modal = document.getElementById("modal");
const modalContent = document.getElementById("content");

// JSON object to store modal data
const modalData = {
  1: { title: "Title 1", body: "./assets/img/menu-images/pops.png" },
  2: { title: "Title 2", body: "./assets/img/menu-images/posps.png" },
};

const openModal = (e) => {
  const button = e.currentTarget.closest("button[data-modal-id]");

  if (button) {
    const modalId = button.getAttribute("data-modal-id");
    const data = modalData[modalId];
    if (data) {
      modalContent.style.backgroundImage = `url('${data.body}')`;
      if (!modal.classList.contains("open")) {
        modal.classList.add("open");
        modalContent.classList.add("open");
      }
    }
  }
};

const closeModal = () => {
  if (modal.classList.contains("open")) {
    modal.classList.remove("open");
    modalContent.classList.remove("open");
  }
};
