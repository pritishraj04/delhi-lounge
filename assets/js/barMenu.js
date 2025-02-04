import barMenuData from "./barMenuData.js";

const showCategoryIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 122"><defs><style>.cls-1{fill:#94b6e0;}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M48,3V119c0,2.7-2.47,4.06-3.91,2.15L25.62,96.68a1.93,1.93,0,0,0-3.24,0L3.91,121.11C2.47,123,0,121.66,0,119V3C0,1.36,1,0,2.29,0H45.71C47,0,48,1.36,48,3Z"/></g></g></svg>`;
const hideCategoryIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 121.99"><defs><style>.cls-1{fill:#94b6e0;}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M45.71,0H2.29C1,0,0,1.35,0,3V119c0,2.7,2.47,4.05,3.91,2.14L22.38,96.68a1.93,1.93,0,0,1,3.24,0L44.09,121.1C45.53,123,48,121.66,48,119V3C48,1.35,47,0,45.71,0ZM36.57,70.84a2.82,2.82,0,1,1-4,4l-9.11-9.11L13.8,75.39a2.84,2.84,0,0,1-4,0l-.2-.2a2.82,2.82,0,0,1,0-4l9.67-9.68-9.11-9.11a2.82,2.82,0,0,1,4-4l9.11,9.11L32.84,48a2.82,2.82,0,0,1,4,0l.2.2a2.82,2.82,0,0,1,0,4l-9.57,9.57Z"/></g></g></svg>`;
const chefSpecialIcon = `<img src="../assets/img/icons/lotus.svg" alt="Chef Special">`;
const homeIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1200 1200"><path fill="currentColor" d="M600 0C268.629 0 0 268.629 0 600s268.629 600 600 600s600-268.629 600-600S931.371 0 600 0m0 276.489l292.969 227.71v419.312H691.406V670.386H508.594v253.125H307.031V504.199z"/></svg>`;

function createCategoryIndex(
  categoryObj,
  index,
  menuIndexDiv,
  hiddenListDiv,
  toggleButton
) {
  const categoryIndexButton = document.createElement("button");
  categoryIndexButton.classList.add("menu-btn");
  categoryIndexButton.textContent = categoryObj.category;
  categoryIndexButton.onclick = function () {
    let targetPageIndex = index;

    turnPageTo(targetPageIndex);
    // Hide the list after clicking
    hiddenListDiv.style.display = "none";
    toggleButton.classList.add("show-list-btn");
    toggleButton.classList.remove("hide-list-btn");
    toggleButton.innerHTML = showCategoryIcon; // Reset button text
  };

  menuIndexDiv.appendChild(categoryIndexButton); // Append button to the index
}

function createCategoryIndexToggle(menuIndexContainer, menuWrapperDiv) {
  // Create the toggle button
  const toggleButton = document.createElement("button");
  toggleButton.classList.add("toggle-btn", "show-list-btn");
  toggleButton.innerHTML = showCategoryIcon;

  // Create the container for the hidden list and backdrop
  const hiddenListContainer = document.createElement("div");
  hiddenListContainer.classList.add("menu-index-container"); // Container for the hidden list and backdrop
  hiddenListContainer.style.display = "none"; // Initially hidden

  // Create the backdrop
  const backdrop = document.createElement("div");
  backdrop.classList.add("menu-index-backdrop");

  // Create the div for the hidden list of category index buttons
  const hiddenListDiv = document.createElement("div");
  hiddenListDiv.classList.add("menu-index-hidden");

  // Add backdrop click functionality
  backdrop.onclick = function () {
    hideHiddenList();
  };

  // Add a toggle functionality to the button
  toggleButton.onclick = function () {
    if (hiddenListContainer.style.display === "none") {
      showHiddenList();
    } else {
      hideHiddenList();
    }
  };

  // Function to show the hidden list
  function showHiddenList() {
    hiddenListContainer.style.display = "flex";
    toggleButton.classList.remove("show-list-btn");
    toggleButton.classList.add("hide-list-btn");
    toggleButton.innerHTML = hideCategoryIcon; // Change button text
  }

  // Function to hide the hidden list
  function hideHiddenList() {
    hiddenListContainer.style.display = "none";
    toggleButton.classList.add("show-list-btn");
    toggleButton.classList.remove("hide-list-btn");
    toggleButton.innerHTML = showCategoryIcon; // Reset button text
  }

  let currentPageIndex = 2; // Start from 2 due to the front cover adjustment

  barMenuData.forEach((categoryObj) => {
    createCategoryIndex(
      categoryObj,
      currentPageIndex, // Track current index for parent
      hiddenListDiv,
      hiddenListContainer,
      toggleButton
    );

    if (categoryObj.subCategories && categoryObj.subCategories.length > 0) {
      categoryObj.subCategories.forEach(() => {
        currentPageIndex++;
      });
    } else {
      currentPageIndex++;
    }
  });

  hiddenListContainer.appendChild(backdrop);
  hiddenListContainer.appendChild(hiddenListDiv);
  menuIndexContainer.appendChild(toggleButton);
  menuWrapperDiv.appendChild(hiddenListContainer);
}

function createMenuPage(category, type, backgroundImage, items) {
  const pageDiv = document.createElement("div");
  pageDiv.classList.add("page");
  pageDiv.style.backgroundImage = `url(${backgroundImage})`;

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

  // const homeDiv = document.createElement("div");
  // homeDiv.classList.add("home");

  // const homeLink = document.createElement("a");
  // homeLink.classList.add("home-link");
  // homeLink.href = "/";

  // homeLink.innerHTML = homeIcon;

  // homeDiv.appendChild(homeLink);
  // menuWrapperDiv.appendChild(homeDiv);

  createCategoryIndexToggle(menuIndexDiv, menuWrapperDiv);
  menuWrapperDiv.appendChild(menuIndexDiv);

  const menuHeadingsDiv = document.createElement("div");
  menuHeadingsDiv.classList.add("menu-headings");

  const categoryName = document.createElement("h1");
  categoryName.classList.add("category-name");
  categoryName.textContent = category;
  if (category.length > 13 && category.length <= 16) {
    categoryName.style.fontSize = "52px";
  } else if (category.length > 16) {
    categoryName.style.fontSize = "42px";
  }
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

    if (item.chefSpecial) {
      const chefSpecial = document.createElement("span");
      chefSpecial.classList.add("chef-special");
      chefSpecial.innerHTML = chefSpecialIcon;
      chefSpecial.firstChild.style.width = "19px";
      itemName.appendChild(chefSpecial);
    }

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
  nextBtn.onclick = () => turnPageTo(1);
  menuPageDiv.appendChild(nextBtn);

  // Append the menuPageDiv to the lastPageDiv
  lastPageDiv.appendChild(menuPageDiv);

  return lastPageDiv;
}

function initializeMenu() {
  barMenuData.forEach((categoryData) => {
    if (categoryData.subCategories) {
      categoryData.subCategories.forEach((subCategoryData) => {
        const { subCategory, type, backgroundImage, items } = subCategoryData;

        // Assign a unique ID to each item using UUID
        items.forEach((item) => {
          item.id = crypto.randomUUID(); // Generates a unique ID
        });

        const menuPage = createMenuPage(
          subCategory,
          type,
          backgroundImage,
          items
        );
        $("#magazine").turn("addPage", menuPage);
      });
    } else {
      const { category, type, backgroundImage, items } = categoryData;

      // Assign a unique ID to each item using UUID
      items.forEach((item) => {
        item.id = crypto.randomUUID(); // Generates a unique ID
      });

      const menuPage = createMenuPage(category, type, backgroundImage, items);
      $("#magazine").turn("addPage", menuPage);
    }
  });
  const lastPage = createLastPage();
  $("#magazine").turn("addPage", lastPage);
}

document.addEventListener("DOMContentLoaded", () => {
  initializeMenu();
});

//modal

const modal = document.getElementById("modal");
const modalContent = document.getElementById("content");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalCategory = document.getElementById("modal-category");
const modalOrigin = document.getElementById("modal-origin");
const modalTagline = document.getElementById("modal-tagline");
const modalImage = document.getElementById("modal-image");

const findItemsById = (id) => {
  for (const categoryPage of barMenuData) {
    if (categoryPage.subCategories) {
      for (const subCategoryPage of categoryPage.subCategories) {
        const items = subCategoryPage.items;

        const foundItems = items.find((item) => item.id === id);

        if (foundItems) {
          return { data: foundItems, category: subCategoryPage.subCategory };
        }
      }
    } else {
      const items = categoryPage.items;

      const foundItems = items.find((item) => item.id === id);
      if (foundItems) {
        return { data: foundItems, category: categoryPage.category };
      }
    }
  }
};
function imageExists(image_url) {
  var http = new XMLHttpRequest();

  http.open("HEAD", image_url, false);
  http.send();

  return http.status != 404;
}

const openModal = (e) => {
  const button = e.currentTarget.closest("button[data-modal-id]");

  if (button) {
    const modalId = button.getAttribute("data-modal-id");

    const result = findItemsById(modalId);

    if (result) {
      const { data, category } = result;
      modalTitle.textContent = data.title;
      modalDescription.textContent = data.fullDesc;
      modalCategory.textContent = category;
      modalOrigin.textContent = data.origin;
      modalTagline.textContent = data.tagline;
      modalImage.onerror = () => {
        modalImage.src = "";
      };
      modalImage.src = imageExists(data.image)
        ? data.image
        : "./assets/img/menu-images/placeholder.svg";

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
