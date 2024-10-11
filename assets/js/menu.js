import menuData from "./menuData.js";

const showCategoryIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.75.75 0 0 1 3 14.25z"/></svg>`;
const hideCategoryIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5M6.854 5.146a.5.5 0 1 0-.708.708L7.293 7L6.146 8.146a.5.5 0 1 0 .708.708L8 7.707l1.146 1.147a.5.5 0 1 0 .708-.708L8.707 7l1.147-1.146a.5.5 0 0 0-.708-.708L8 6.293z"/></svg>`;
function createCategoryIndex(
  category,
  index,
  menuIndexDiv,
  hiddenListDiv,
  toggleButton
) {
  const categoryIndexButton = document.createElement("button");
  categoryIndexButton.classList.add("menu-btn");
  categoryIndexButton.textContent = category;

  categoryIndexButton.onclick = function () {
    turnPageTo(index); // Navigates to the correct page based on index

    // Hide the list after clicking
    hiddenListDiv.style.display = "none";
    toggleButton.classList.add("show-list-btn");
    toggleButton.classList.remove("hide-list-btn");
    toggleButton.innerHTML = showCategoryIcon; // Reset button text
  };

  menuIndexDiv.appendChild(categoryIndexButton); // Append button to the index
}

function createCategoryIndexToggle(menuIndexContainer) {
  // Create the toggle button
  const toggleButton = document.createElement("button");
  toggleButton.classList.add("toggle-btn", "show-list-btn");
  toggleButton.innerHTML = showCategoryIcon;

  // Create the div for the hidden list of category index buttons
  const hiddenListDiv = document.createElement("div");
  hiddenListDiv.classList.add("menu-index-hidden"); // This will be hidden by default
  hiddenListDiv.style.display = "none"; // Hide the list initially

  // Add a toggle functionality to the button
  toggleButton.onclick = function () {
    if (hiddenListDiv.style.display === "none") {
      hiddenListDiv.style.display = "flex";
      toggleButton.classList.remove("show-list-btn");
      toggleButton.classList.add("hide-list-btn");
      toggleButton.innerHTML = hideCategoryIcon; // Change button text
    } else {
      hiddenListDiv.style.display = "none";
      toggleButton.classList.add("show-list-btn");
      toggleButton.classList.remove("hide-list-btn");
      toggleButton.innerHTML = showCategoryIcon; // Reset button text
    }
  };

  // Append the category index buttons to the hidden list
  menuData.forEach((page, index) => {
    createCategoryIndex(
      page.category,
      index + 2,
      hiddenListDiv,
      hiddenListDiv,
      toggleButton
    ); // +2 for front cover adjustment
  });

  menuIndexContainer.appendChild(toggleButton);
  menuIndexContainer.appendChild(hiddenListDiv);
}

function createMenuPage(category, type, items) {
  const pageDiv = document.createElement("div");
  pageDiv.classList.add("page");

  const menuPageDiv = document.createElement("div");
  menuPageDiv.classList.add("menu-page");

  const prevBtn = document.createElement("button");
  prevBtn.classList.add("navbtn", "prev");
  prevBtn.onclick = function () {
    turnPagePrevious();
  }; // Implement this function
  menuPageDiv.appendChild(prevBtn);

  const menuWrapperDiv = document.createElement("div");
  menuWrapperDiv.classList.add("menu-wrapper");

  const menuIndexDiv = document.createElement("div");
  menuIndexDiv.classList.add("menu-index");

  // menuData.forEach((cat, index) => {
  //   createCategoryIndex(cat, index + 2, menuIndexDiv); // +2 to account for the front cover
  // });
  createCategoryIndexToggle(menuIndexDiv);
  menuWrapperDiv.appendChild(menuIndexDiv);

  const menuHeadingsDiv = document.createElement("div");
  menuHeadingsDiv.classList.add("menu-headings");

  const categoryName = document.createElement("h1");
  categoryName.classList.add("category-name");
  categoryName.textContent = category;
  menuHeadingsDiv.appendChild(categoryName);

  const typeName = document.createElement("h2");
  typeName.classList.add("type-name");
  typeName.textContent = type;
  menuHeadingsDiv.appendChild(typeName);

  menuWrapperDiv.appendChild(menuHeadingsDiv);

  const menuItemsUl = document.createElement("ul");
  menuItemsUl.classList.add("menu-items");

  items.forEach((item) => {
    const itemLi = document.createElement("li");
    itemLi.classList.add("menu-item");

    const itemBtn = document.createElement("button");
    itemBtn.classList.add("menu-item-btn");
    itemBtn.dataset.modalId = item.id;
    itemBtn.onclick = function (event) {
      openModal(event);
    }; // Implement this function

    const detailsDiv = document.createElement("div");
    detailsDiv.classList.add("details");

    const itemName = document.createElement("h3");
    itemName.classList.add("name");
    itemName.textContent = item.title;
    detailsDiv.appendChild(itemName);

    const itemMetrics = document.createElement("p");
    itemMetrics.classList.add("metrics");
    itemMetrics.textContent = item.metrics;
    detailsDiv.appendChild(itemMetrics);

    itemBtn.appendChild(detailsDiv);

    const itemDesc = document.createElement("p");
    itemDesc.classList.add("desc");
    itemDesc.textContent = item.desc;
    itemBtn.appendChild(itemDesc);

    itemLi.appendChild(itemBtn);
    menuItemsUl.appendChild(itemLi);
  });

  menuWrapperDiv.appendChild(menuItemsUl);
  menuPageDiv.appendChild(menuWrapperDiv);

  const nextBtn = document.createElement("button");
  nextBtn.classList.add("navbtn", "next");
  nextBtn.onclick = function () {
    turnPageNext();
  }; // Implement this function
  menuPageDiv.appendChild(nextBtn);

  pageDiv.appendChild(menuPageDiv);

  return pageDiv;
}

function createLastPage() {
  // Create the outermost div with class 'last-page'
  const lastPageDiv = document.createElement("div");
  lastPageDiv.classList.add("last-page");

  // Create the div with class 'menu-page'
  const menuPageDiv = document.createElement("div");
  menuPageDiv.classList.add("menu-page");

  // Create the 'prev' button
  const prevBtn = document.createElement("button");
  prevBtn.classList.add("navbtn", "prev");
  prevBtn.onclick = turnPagePrevious;
  menuPageDiv.appendChild(prevBtn);

  // Create the div with class 'psudo-menu-wrapper'
  const psudoMenuWrapperDiv = document.createElement("div");
  psudoMenuWrapperDiv.classList.add("psudo-menu-wrapper");
  menuPageDiv.appendChild(psudoMenuWrapperDiv);

  // Create the 'next' button
  const nextBtn = document.createElement("button");
  nextBtn.classList.add("navbtn", "next");
  nextBtn.onclick = turnPageNext;
  menuPageDiv.appendChild(nextBtn);

  // Append the menuPageDiv to the lastPageDiv
  lastPageDiv.appendChild(menuPageDiv);

  return lastPageDiv;
}

function initializeMenu() {
  menuData.forEach((categoryData) => {
    const { category, type, items } = categoryData;

    // Assign a unique ID to each item using UUID
    items.forEach((item) => {
      item.id = crypto.randomUUID(); // Generates a unique ID
    });

    const menuPage = createMenuPage(category, type, items);
    $("#magazine").turn("addPage", menuPage);
  });
  const lastPage = createLastPage();
  $("#magazine").turn("addPage", lastPage);
}

window.onload = initializeMenu;

//modal

const modal = document.getElementById("modal");
const modalContent = document.getElementById("content");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalCategory = document.getElementById("modal-category");
const modalOrigin = document.getElementById("modal-origin");
const modalTagline = document.getElementById("modal-tagline");
const modalImage = document.getElementById("modal-image");

const openModal = (e) => {
  const button = e.currentTarget.closest("button[data-modal-id]");

  if (button) {
    const modalId = button.getAttribute("data-modal-id");
    // const data = modalData[modalId];
    let data;
    let selectedCategory;

    for (const categoryPage in menuData) {
      selectedCategory = menuData[categoryPage].category;
      const items = menuData[categoryPage].items;

      data = items.find((item) => item.id === modalId);
      if (data) break; // Break loop if item is found
    }

    if (data) {
      modalTitle.textContent = data.title;
      modalDescription.textContent = data.fullDesc;
      modalCategory.textContent = selectedCategory;
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

export const closeModal = () => {
  if (modal.classList.contains("open")) {
    modal.classList.remove("open");
    modalTitle.textContent = "";
    modalDescription.textContent = "";
    modalCategory.textContent = "";
    modalOrigin.textContent = "";
    modalTagline.textContent = "";
    modalImage.src = "";
    modalContent.classList.remove("open");
  }
};

window.closeModal = closeModal;
