// import menuData from "./menuData.js";

// function flattenMenuData(data) {
//   const rows = [];

//   data.forEach((category) => {
//     if (category.subCategories) {
//       category.subCategories.forEach((subCategory) => {
//         subCategory.items.forEach((item) => {
//           rows.push({
//             category: category.category,
//             subCategory: subCategory.subCategory,
//             type: subCategory.type,
//             backgroundImage: subCategory.backgroundImage,
//             ...item, // Spread item properties (title, origin, etc.)
//           });
//         });
//       });
//     } else {
//       category.items.forEach((item) => {
//         rows.push({
//           category: category.category,
//           subCategory: "",
//           type: category.type,
//           backgroundImage: category.backgroundImage,
//           ...item,
//         });
//       });
//     }
//   });

//   return rows;
// }

// const flatData = flattenMenuData(menuData);
// const csv = Papa.unparse(flatData);

// const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
// const link = document.createElement("a");
// link.href = URL.createObjectURL(blob);
// link.download = "menu-data.csv";
// link.click();
