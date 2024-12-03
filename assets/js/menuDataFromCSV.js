function transformCSVtoMenuData(csvData) {
  const menuData = [];

  csvData.forEach((row) => {
    let category = menuData.find((cat) => cat.category === row.category);

    if (!category) {
      category = {
        category: row.category,
        type: row.type || "",
        backgroundImage: row.backgroundImage || "",
        items: [],
        subCategories: row.type ? [] : undefined,
      };
      menuData.push(category);
    }

    if (row.type) {
      let subCategory = category.subCategories.find(
        (sub) => sub.type === row.type
      );
      if (!subCategory) {
        subCategory = {
          subCategory: row.category,
          type: row.type,
          backgroundImage: row.backgroundImage || "",
          items: [],
        };
        category.subCategories.push(subCategory);
      }
      subCategory.items.push(createMenuItem(row));
    } else {
      category.items.push(createMenuItem(row));
    }
  });

  // Distribute items into subcategories if more than 10 items
  menuData.forEach((category) => {
    if (category.items && category.items.length > 10) {
      const numSubCategories = Math.ceil(category.items.length / 10);
      const itemsPerSubCategory = Math.ceil(
        category.items.length / numSubCategories
      );

      category.subCategories = [];
      for (let i = 0; i < numSubCategories; i++) {
        category.subCategories.push({
          subCategory: category.category,
          type: category.type || "",
          backgroundImage: category.backgroundImage || "",
          items: category.items.splice(0, itemsPerSubCategory),
        });
      }
      delete category.items;
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
    chefSpecial: row.chefSpecial.toLowerCase() === "true",
    vegan: row.vegan.toLowerCase() === "true",
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
