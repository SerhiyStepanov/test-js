let view = {
  setUpEventListener: function () {
    this.displayScroll();
    this.goToTopClick();
  },

  displayScroll: function () {
    const goToTop = document.querySelector("#goToTop");
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
    const goToTop = document.querySelector("#goToTop");
    goToTop.addEventListener("click", () => window.scrollTo(0, 0));
  },
};

view.setUpEventListener();
