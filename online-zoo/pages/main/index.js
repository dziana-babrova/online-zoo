// Burger menu //

const BURGER_ICON = document.querySelector(".burger-icon");
const OVERLAY = document.querySelector(".overlay");
const BURGER_MENU = document.querySelector(".burger-menu");

BURGER_ICON.addEventListener("click", openBurgerMenu);
OVERLAY.addEventListener("click", CloseMenuOnOverlay);

function CloseMenuOnOverlay() {
  BURGER_ICON.classList.remove("open");
  BURGER_MENU.classList.remove("burger-menu__opened");
    OVERLAY.classList.remove("overlay-visible");
    TESTIMONIAL_POPOVER.classList.remove("testimonial-popover__opened");
}

function openBurgerMenu() {
  BURGER_ICON.classList.toggle("open");
  BURGER_MENU.classList.toggle("burger-menu__opened");
  OVERLAY.classList.toggle("overlay-visible");
}

// Pets carousel //
let imagesArray = [
  "./../../assets/panda.png",
  "./../../assets/eagle.png",
  "./../../assets/gorilla.png",
  "./../../assets/sloth.png",
  "./../../assets/cheetah.png",
  "./../../assets/penguin.png",
  "./../../assets/alligator.png",
  "./../../assets/gorillas.png",
];
let foodArray = [
  "./../../assets/banana-bamboo_icon.png",
  "./../../assets/meet-fish_icon.png",
  "./../../assets/banana-bamboo_icon.png",
  "./../../assets/banana-bamboo_icon.png",
  "./../../assets/meet-fish_icon.png",
  "./../../assets/meet-fish_icon.png",
  "./../../assets/meet-fish_icon.png",
  "./../../assets/banana-bamboo_icon.png",
];
let animalNamesArray = [
  "giant pandas",
  "Eagles",
  "Gorillas",
  "Two-toed Sloth",
  "cheetahs",
  "Penguins",
  "Alligators",
  "Gorillas",
];
let locationsArray = [
  "Native to Southwest China",
  "Native to South America",
  "Native to Congo",
  "Mesoamerica, South America",
  "Native to Africa",
  "Native to Antarctica",
  "Native to Southeastern U.S.",
  "Native to Congo",
];

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  speed: 500,

  simulateTouch: false,
  allowTouchMove: true,
  slidesPerGroup: 1,

  slidesPerView: 1,

  initialSlide: 0,

  spaceBetween: 30,

  preventInteractionOnTransition: true,
  disableOnInteraction: true,
  loopPreventsSlide: true,

  navigation: {
    nextEl: ".arrow-right",
    prevEl: ".arrow-left",
  },

  breakpoints: {
    enabled: false,

    631: {
      enabled: true,
    },
  },
});

const RIGHT_ARROW = document.querySelector(".arrow-right");
const LEFT_ARROW = document.querySelector(".arrow-left");
const CAROUSEL_SECTION = document.querySelector(".carousel-section");

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function generateImages() {
  const SLIDES = document.querySelectorAll(".swiper-slide");
  let prevArray = [0, 1, 2, 3, 4, 5, 6, 7];
  shuffle(prevArray);
  prevArray = prevArray.slice(0, 6);

  for (let j = 0; j < SLIDES.length; j++) {
    if (SLIDES[j].classList.contains("swiper-slide-active")) {
      continue;
    } else {
      const items = SLIDES[j].querySelectorAll(".carousel-item");
      for (let i = 0; i < items.length; i++) {
        const ANIMAL_IMAGE = items[i].querySelector(".carousel-item-wrapper").querySelector(".animal-image");
        const ANIMAL_ICON = items[i]
          .querySelector(".carousel-item-wrapper")
          .querySelector(".animal-caption")
          .querySelector(".animal-icon");
        const ANIMAL_NAME = items[i]
          .querySelector(".carousel-item-wrapper")
          .querySelector(".animal-caption")
          .querySelector(".animal-caption-block")
          .querySelector(".animal-name");
        const ANIMAL_PLACE = items[i]
          .querySelector(".carousel-item-wrapper")
          .querySelector(".animal-caption")
          .querySelector(".animal-caption-block")
          .querySelector(".animal-place");
        ANIMAL_IMAGE.style.backgroundImage = `url(${imagesArray[prevArray[i]]})`;
        ANIMAL_ICON.style.backgroundImage = `url(${foodArray[prevArray[i]]})`;
        ANIMAL_NAME.textContent = animalNamesArray[prevArray[i]];
        ANIMAL_PLACE.textContent = locationsArray[prevArray[i]];
      }
    }
  }
}

generateImages();
RIGHT_ARROW.addEventListener("click", function () {
  setTimeout(generateImages, 600);
});
LEFT_ARROW.addEventListener("click", function () {
  setTimeout(generateImages, 600);
});

// Testimonials slider //

const testimonialSwiper = new Swiper(".testimonials-section", {
  enabled: false,
  direction: "horizontal",
  loop: false,
  speed: 1000,

  slidesPerGroup: 1,
  slidesPerView: 1,

  initialSlide: 0,

  spaceBetween: 0,

  preventInteractionOnTransition: true,
  disableOnInteraction: true,
  loopPreventsSlide: true,
  updateOnWindowResize: true,

  wrapperClass: "testimonials-wrapper",
  slideClass: "testimonial-border",
  simulateTouch: false,

  scrollbar: {
    el: ".positioner",
    draggable: true,
  },

  breakpoints: {
    991: {
      slidesPerView: 3,
      enabled: true,
      spaceBetween: 29,
    },
    1221: {
      slidesPerView: 4,
      enabled: true,
      spaceBetween: 30,
    },
  },
});

window.addEventListener("resize", function () {
  console.log("resized");
  testimonialSwiper.slideTo(0, 300, true);
});


// Testimonial popover //

const TESTIMONIAL = document.querySelectorAll(".testimonial-border")[1];
const TESTIMONIAL_POPOVER = document.querySelector(".testimonial-popover");
const TESTIMONIALS = document.querySelectorAll(".testimonial-border");
const CROSS_ICON = document.querySelector(".popover-crossicon");

TESTIMONIALS.forEach((element, index) => {
    element.addEventListener("click", function () {
      TESTIMONIAL_POPOVER.classList.toggle("testimonial-popover__opened");
      OVERLAY.classList.toggle("overlay-visible");
      TESTIMONIAL_POPOVER.querySelector(".testimonial-border").innerHTML = TESTIMONIALS[index].innerHTML;
    });
})

// TESTIMONIAL.addEventListener("click", function () {
//     TESTIMONIAL_POPOVER.classList.toggle("testimonial-popover__opened");
//     OVERLAY.classList.toggle("overlay-visible");
//     TESTIMONIAL_POPOVER.querySelector(".testimonial-border").innerHTML = TESTIMONIALS[1].innerHTML;
// });

CROSS_ICON.addEventListener("click", function () {
    TESTIMONIAL_POPOVER.classList.remove("testimonial-popover__opened");
    OVERLAY.classList.remove("overlay-visible");
})

