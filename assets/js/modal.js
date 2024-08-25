const modalOne = document.getElementById("modal-one");

const modalOneContent = document.getElementById("content-one");

const modalTwo = document.getElementById("modal-two");

const modalTwoContent = document.getElementById("content-two");

const toggleModalOne = () => {
  if (modalOne.classList.contains("open")) {
    modalOne.classList.remove("open");
    modalOneContent.classList.remove("open");
  } else {
    modalOne.classList.add("open");
    modalOneContent.classList.add("open");
  }
};

const toggleModalTwo = () => {
  if (modalTwo.classList.contains("open")) {
    modalTwo.classList.remove("open");
    modalTwoContent.classList.remove("open");
  } else {
    modalTwo.classList.add("open");
    modalTwoContent.classList.add("open");
  }
};
