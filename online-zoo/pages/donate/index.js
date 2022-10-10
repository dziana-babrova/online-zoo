// Burger menu //

const BURGER_ICON = document.querySelector(".burger-icon");
const OVERLAY = document.querySelector(".overlay");
const BURGER_MENU = document.querySelector(".burger-menu");

BURGER_ICON.addEventListener("click", changeBurgerIcon);
BURGER_ICON.addEventListener("click", addOverlay);
BURGER_ICON.addEventListener("click", openBurgerMenu);
OVERLAY.addEventListener("click", changeBurgerIcon);
OVERLAY.addEventListener("click", addOverlay);
OVERLAY.addEventListener("click", openBurgerMenu);

function changeBurgerIcon() {
  BURGER_ICON.classList.toggle("open");
}

function addOverlay() {
  OVERLAY.classList.toggle("overlay-visible");
}

function openBurgerMenu() {
  BURGER_MENU.classList.toggle("burger-menu__opened");
}

// Donation functionality //

const DONATION_STEPS_COLLECTION = document.querySelectorAll(".step-mark");
const STEPS_RADIUS1_COLLECITON = document.querySelectorAll(".step-radius");
const STEPS_RADIUS2_COLLECITON = document.querySelectorAll(".step");
const SUM_COLLECTION = document.querySelectorAll(".price-item");
const PRICE_INPUT = document.querySelector(".price-input");

highlightSumOnStart();

function highlightSumOnStart() {
    STEPS_RADIUS1_COLLECITON[6].classList.add("step-active");
    STEPS_RADIUS2_COLLECITON[6].classList.add("step-active");
    SUM_COLLECTION[6].classList.add("price-selected");
    PRICE_INPUT.value = 100;
}

STEPS_RADIUS2_COLLECITON.forEach((element, index) => {
    element.addEventListener("click", () => {
        STEPS_RADIUS1_COLLECITON.forEach(element => element.classList.remove("step-active"));
        STEPS_RADIUS2_COLLECITON.forEach((element) => element.classList.remove("step-active"));
        SUM_COLLECTION.forEach((element) => element.classList.remove("price-selected"));
        STEPS_RADIUS1_COLLECITON[index].classList.add("step-active");
        STEPS_RADIUS2_COLLECITON[index].classList.add("step-active");
        SUM_COLLECTION[index].classList.add("price-selected");
        PRICE_INPUT.value = parseInt(SUM_COLLECTION[index].textContent.slice(1));
    })
});

PRICE_INPUT.addEventListener("input", function (e) {
    STEPS_RADIUS1_COLLECITON.forEach((element) => element.classList.remove("step-active"));
    STEPS_RADIUS2_COLLECITON.forEach((element) => element.classList.remove("step-active"));
    SUM_COLLECTION.forEach((element) => element.classList.remove("price-selected"));

    switch (PRICE_INPUT.value) {
      case "25":
        STEPS_RADIUS1_COLLECITON[8].classList.add("step-active");
        STEPS_RADIUS2_COLLECITON[8].classList.add("step-active");
        SUM_COLLECTION[8].classList.add("price-selected");
        break;

      case "50":
        STEPS_RADIUS1_COLLECITON[7].classList.add("step-active");
        STEPS_RADIUS2_COLLECITON[7].classList.add("step-active");
        SUM_COLLECTION[7].classList.add("price-selected");
        break;

      case "100":
        STEPS_RADIUS1_COLLECITON[6].classList.add("step-active");
        STEPS_RADIUS2_COLLECITON[6].classList.add("step-active");
        SUM_COLLECTION[6].classList.add("price-selected");
        break;

      case "250":
        STEPS_RADIUS1_COLLECITON[5].classList.add("step-active");
        STEPS_RADIUS2_COLLECITON[5].classList.add("step-active");
        SUM_COLLECTION[5].classList.add("price-selected");
        break;

      case "500":
        STEPS_RADIUS1_COLLECITON[4].classList.add("step-active");
        STEPS_RADIUS2_COLLECITON[4].classList.add("step-active");
        SUM_COLLECTION[4].classList.add("price-selected");
        break;

      case "1000":
        STEPS_RADIUS1_COLLECITON[3].classList.add("step-active");
        STEPS_RADIUS2_COLLECITON[3].classList.add("step-active");
        SUM_COLLECTION[3].classList.add("price-selected");
        break;

      case "2000":
        STEPS_RADIUS1_COLLECITON[2].classList.add("step-active");
        STEPS_RADIUS2_COLLECITON[2].classList.add("step-active");
        SUM_COLLECTION[2].classList.add("price-selected");
        break;

      case "2500":
        STEPS_RADIUS1_COLLECITON[1].classList.add("step-active");
        STEPS_RADIUS2_COLLECITON[1].classList.add("step-active");
        SUM_COLLECTION[1].classList.add("price-selected");
        break;

      case "5000":
        STEPS_RADIUS1_COLLECITON[0].classList.add("step-active");
        STEPS_RADIUS2_COLLECITON[0].classList.add("step-active");
        SUM_COLLECTION[0].classList.add("price-selected");
        break;
    }

    this.value = this.value.substr(0, 4);

})

