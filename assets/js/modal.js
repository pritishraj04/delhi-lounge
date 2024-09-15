const modal = document.getElementById("modal");
const modalContent = document.getElementById("content");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalCategory = document.getElementById("modal-category");
const modalOrigin = document.getElementById("modal-origin");
const modalTagline = document.getElementById("modal-tagline");
const modalImage = document.getElementById("modal-image");

// JSON object to store modal data
const modalData = {
  1: {
    title: "Khumbh Ki Galouti",
    category: "Appetisers",
    origin: "Vegetarian",
    tagline: "From magical strees of Old Delhi",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "./assets/img/modal-images/modal1.jpg",
  },
  2: {
    title: "Beetroot Shammi Labgeer",
    category: "Appetisers",
    origin: "Vegetarian",
    tagline: "From magical strees of Old Delhi",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "./assets/img/modal-images/modal2.jpg",
  },
};

const openModal = (e) => {
  const button = e.currentTarget.closest("button[data-modal-id]");

  if (button) {
    const modalId = button.getAttribute("data-modal-id");
    const data = modalData[modalId];
    if (data) {
      modalTitle.textContent = data.title;
      modalDescription.textContent = data.desc;
      modalCategory.textContent = data.category;
      modalOrigin.textContent = data.origin;
      modalTagline.textContent = data.tagline;
      modalImage.src = data.image;

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
