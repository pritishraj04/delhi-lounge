function transformCSVtoMenuData(csvData) {
  const menuData = [];

  // Step 1: Process CSV rows and group by category and type
  csvData.forEach((row) => {
    // Find or create category
    let category = menuData.find((cat) => cat.category === row.category);
    if (!category) {
      category = {
        category: row.category,
        type: row.type || "",
        backgroundImage: row.backgroundImage || "",
        items: [],
        subCategories: [],
      };
      menuData.push(category);
    }

    // Add item to the category's items array
    category.items.push(createMenuItem(row));
  });

  // Step 2: Distribute items into sub-categories
  menuData.forEach((category) => {
    // If the category has more than 10 items, create sub-categories
    if (category.items.length > 10) {
      let numSubCategories = Math.ceil(category.items.length / 10);
      let itemsPerSubCategory = Math.floor(
        category.items.length / numSubCategories
      );

      // Split items into sub-categories of max 10 items
      let remainingItems = [...category.items]; // Copy the items array
      for (let i = 0; i < numSubCategories; i++) {
        const subCategory = {
          subCategory: category.category, // Name the sub-category the same as category
          type: category.type || "", // Maintain type if needed
          backgroundImage: category.backgroundImage || "",
          items: remainingItems.splice(0, 10), // Take the first 10 items
        };
        category.subCategories.push(subCategory);
      }
    } else {
      // If there are 10 or fewer items, create a single sub-category
      const subCategory = {
        subCategory: category.category, // Name the sub-category the same as category
        type: category.type || "", // Maintain type if needed
        backgroundImage: category.backgroundImage || "",
        items: category.items, // Add all items to this sub-category
      };
      category.subCategories.push(subCategory);
    }
  });

  return menuData;
}

function createMenuItem(row) {
  return {
    title: row.title || "",
    origin: row.origin || "",
    tagline: row.tagline || "",
    desc: row.desc || "",
    fullDesc: row.fullDesc || "",
    metrics: row.metrics || "",
    image: row.image || "",
    chefSpecial: row.chefSpecial === "true",
  };
}

function loadCSVAndGenerateMenuData() {
  return new Promise((resolve, reject) => {
    const csvFilePath = "./assets/data/menu-data.csv";

    Papa.parse(csvFilePath, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: function (result) {
        const transformedData = transformCSVtoMenuData(result.data);
        resolve(transformedData); // Resolve the Promise with transformed data
      },
      error: function (error) {
        console.error("Error parsing CSV:", error);
        reject(error); // Reject if there's an error
      },
    });
  });
}

// Export the function to get menuData
export const getMenuData = () => loadCSVAndGenerateMenuData();
