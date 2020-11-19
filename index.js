// import * as basicLightbox from "basiclightbox";
// import "basicLightbox/dist/basicLightbox.min.css";

// const footerBtn = document.querySelector(".footer-btn");

// footerBtn.addEventListener("click", onFooterBtnClick);

// function onFooterBtnClick(event) {
//   event.preventDefault();
//   const instance = basicLightbox.create(`
//     <h3 class="team-title">Над проектом працювали :</h3>
//     <ul class="team">
//       <li class="team-list">Denys Kravchuk</li>
//       <li class="team-list">Serhiy Stepanov</li>
//       <li class="team-list">Andrey Kovsh</li>
//       <li class="team-list">Valentyna Chudik</li>
//       <li class="team-list">Marina Vetokh</li>
//       <li class="team-list"></li>
//     </ul>
// `);
//   instance.show();
// }

// BUTTON
let view = {
  setUpEventListener: function () {
    this.displayScroll();
    this.goToTopClick();
  },

  displayScroll: function () {
    let goToTop = document.getElementById("goToTop");
    window.addEventListener("scroll", () => {
      let offSetY = window.scrollY;
      let viewHeight = window.innerHeight;
      viewHeight /= 2;

      if (offSetY >= viewHeight) {
        goToTop.style.display = "block";
        goToTop.classList.add("goToTopdisplay");
      } else {
        goToTop.style.display = "none";
      }
    });
  },

  goToTopClick: function () {
    let goToTop = document.getElementById("goToTop");
    goToTop.addEventListener("click", () => window.scrollTo(0, 0));
  },
};
view.setUpEventListener();
