import onFooterBtnClick from "./js/basicLightbox";
import view from "./js/goToTop";

const btnNav = document.querySelector(".button-navigation");

const btnLeft = document.querySelector('button[data-action="left"]');
const btnStart = document.querySelector('button[data-action="start"]');

const btnPrevious = document.querySelector('button[data-action="previous"]');
const btnBetween = document.querySelector('button[data-action="between"]');
const btnNext = document.querySelector('button[data-action="next"]');

const btnEnd = document.querySelector('button[data-action="end"]');
const btnRight = document.querySelector('button[data-action="right"]');

console.log(btnLeft);
console.log(btnStart);

console.log(btnPrevious);
console.log(btnBetween);
console.log(btnNext);

console.log(btnEnd);
console.log(btnRight);
const API_KEY = "9fba788361f0940b39e64c54ec217196";

const url = `https:api.themoviedb.org/3/movie/lists?api_key=${API_KEY}`;

fetch(url)
  .then((res) => res.json)
  .then((data) => {
    return data;
  });

btnLeft.addEventListener("click", onBtnClickLeft);
btnStart.addEventListener("click", onBtnClickStart);
btnPrevious.addEventListener("click", onBtnClickPrevious);
btnBetween.addEventListener("click", onBtnCliclBetween);
btnNext.addEventListener("click", onBtnClickNext);
btnEnd.addEventListener("click", onBtnClickEnd);
btnRight.addEventListener("click", onBtnClickRight);

function onBtnClickLeft(event) {
  console.log(event.currentTarget);
}
function onBtnClickStart(event) {
  console.log(event.currentTarget);
}
function onBtnClickPrevious(event) {
  console.log(event.currentTarget);
}
function onBtnCliclBetween(event) {
  console.log(event.currentTarget);
}
function onBtnClickNext(event) {
  console.log(event.currentTarget);
}
function onBtnClickEnd(event) {
  console.log(event.currentTarget);
}
function onBtnClickRight(event) {
  console.log(event.currentTarget);
}
