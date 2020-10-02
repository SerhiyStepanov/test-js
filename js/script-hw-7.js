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

// const galleryImages = document.querySelector("#gallery");
// console.log(gallery);

// const markupGallery = images.map(({ url, alt }) => {
//   const liEl = document.createElement("li");
//   liEl.classList.add("gallery_list");
//   const imgEl = document.createElement("img");
//   imgEl.classList.add("gallery_img");

//   imgEl.src = `${url}`;
//   imgEl.alt = `${alt}`;
//   imgEl.width = "240";

//   liEl.appendChild(imgEl);
//   return liEl;
// });

// galleryImages.append(...markupGallery);

// task - 4

// const decrementBtn = document.querySelector("button[data-action=decrement]");
// console.log(decrementBtn);
// const incrementBtn = document.querySelector("button[data-action=increment]");
// console.log(incrementBtn);
// const value = document.querySelector("#value");
// console.log(value);

// decrementBtn.addEventListener("click", onClickDecrement);
// incrementBtn.addEventListener("click", onClickIncrement);

// const counter = {
//   value: 0,
//   decrement() {
//     this.value -= 1;
//   },
//   increment() {
//     this.value += 1;
//   },
// };

// function onClickDecrement() {
//   counter.decrement();
//   value.textContent = counter.value;
// }
// function onClickIncrement() {
//   counter.increment();
//   value.textContent = counter.value;
// }

// task -5

// const inputEl = document.querySelector("#name-input");
// console.log(inputEl);
// const spanEl = document.querySelector("#name-output");
// console.log(spanEl);

// inputEl.addEventListener("input", onInputValue);

// function onInputValue(event) {
//   console.log(event.currentTarget.value);
//   if (event.currentTarget.value !== "") {
//     spanEl.textContent = event.currentTarget.value;
//   } else {
//     spanEl.textContent = "незнакомец";
//   }
// }

// task -6

// const input = {
//   type: "text",
//   id: "validation-input",
//   datalength: "6",
//   placeholder: "Введи 6 символов",
// };
// const validationInput = document.querySelector("#validation-input");
// console.log(validationInput);

// validationInput.addEventListener("input", onValidationInput);
// validationInput.addEventListener("blur", onBlurInput);

// function onValidationInput(event) {
//   console.log(event.currentTarget.value);
// }

// function onBlurInput(event) {
//   if (
//     event.currentTarget.value.length !== Number(validationInput.dataset.length)
//   ) {
//     validationInput.classList.add("invalid");
//     validationInput.classList.remove("valid");
//   } else {
//     validationInput.classList.add("valid");
//     validationInput.classList.remove("invalid");
//   }
// }
