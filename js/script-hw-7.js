// task-1

// const liItemEl = document.querySelectorAll(".item");
// console.log(`В списке ${liItemEl.length} категории.`);

// const liItemContentEl = liItemEl.forEach((element) => {
//   // console.log(element);
//   const itemTitleEl = element.firstElementChild.textContent;
//   const liItemEl = element.lastElementChild.children.length;
//   console.log(`Категория: ${itemTitleEl} `);
//   console.log(`Количество элементов: ${liItemEl}`);
// });

// task-2

// const ingredients = [
//   "Картошка",
//   "Грибы",
//   "Чеснок",
//   "Помидоры",
//   "Зелень",
//   "Приправы",
// ];

// const navIngredientsEl = document.querySelector("#ingredients");
// console.log(navIngredientsEl);

// const navLiElIngredients = ingredients.map((element) => {
//   const liElement = document.createElement("li");
//   liElement.textContent = element;
//   return liElement;
// });

// navIngredientsEl.append(...navLiElIngredients);

// task-3

// const images = [
//   {
//     url:
//       "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
// ];

// const imgGalleryEl = document.querySelector("#gallery");
// console.log(imgGalleryEl);

// const imgGallery = images.map((item) => {
//   // console.log(item);
//   const liItemEl = document.createElement("li");
//   const imgItemEl = document.createElement("img");

//   imgItemEl.src = `${item.url}`;
//   imgItemEl.alt = `${item.alt}`;

//   liItemEl.insertAdjacentElement("afterbegin", imgItemEl);
//   return liItemEl;
// });

// // console.log(...imgGallery);
// imgGalleryEl.append(...imgGallery);

// task-4
