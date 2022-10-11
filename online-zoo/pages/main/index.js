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
  speed: 700,

  simulateTouch: false,
  allowTouchMove: false,
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
const SWIPER_WRAPPER = document.querySelector(".swiper-wrapper");

RIGHT_ARROW.addEventListener("click", function () {
    RIGHT_ARROW.disabled = true;

    SWIPER_WRAPPER.addEventListener("transitionend", function () {
        RIGHT_ARROW.disabled = false;
        generateImages();
})
})

LEFT_ARROW.addEventListener("click", function () {
  LEFT_ARROW.disabled = true;

    SWIPER_WRAPPER.addEventListener("transitionend", function () {

        LEFT_ARROW.disabled = false;
        generateImages();
  });
});

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

// Testimonials slider //
const POSITIONER = document.querySelector(".positioner");
let positionerWidth = POSITIONER.offsetWidth;
let scrollablePositioner = positionerWidth * 0.128;
console.log(scrollablePositioner);

  if (window.innerWidth < 1221) {
    POSITIONER.max = 8;
  } else {
    POSITIONER.max = 7;
  }

const testimonialSwiper = new Swiper(".testimonials-section", {
  enabled: false,
  direction: "horizontal",
  loop: false,
  speed: 1000,

  slidesPerGroup: 1,
  slidesPerView: 1,

  initialSlide: 0,

  spaceBetween: 0,

  snapOnRelease: true,
  preventInteractionOnTransition: true,
  disableOnInteraction: true,
  loopPreventsSlide: true,
  updateOnWindowResize: true,

  wrapperClass: "testimonials-wrapper",
  slideClass: "testimonial-border",
  simulateTouch: false,

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
  testimonialSwiper.slideTo(0, 300, true);
  POSITIONER.value = "0";
  if (window.innerWidth < 1221) {
    POSITIONER.max = 8;
  } else {
    POSITIONER.max = 7;
  }
});

function changePosition() {
  testimonialSwiper.slideTo(POSITIONER.value, 300, true);
}

POSITIONER.addEventListener("input", function () {
  setTimeout(changePosition, 300);
});


// Testimonial popover //

const TESTIMONIAL = document.querySelectorAll(".testimonial-border")[1];
const TESTIMONIAL_POPOVER = document.querySelector(".testimonial-popover");
const TESTIMONIALS = document.querySelectorAll(".testimonial-border");
const CROSS_ICON = document.querySelector(".popover-crossicon");

TESTIMONIALS.forEach((element, index) => {
    element.addEventListener("click", function () {
        if (window.innerWidth <= 990) {
            TESTIMONIAL_POPOVER.classList.add("testimonial-popover__opened");
            OVERLAY.classList.add("overlay-visible");
            TESTIMONIAL_POPOVER.querySelector(".testimonial-border").innerHTML = TESTIMONIALS[index].innerHTML;
        }
    });
})

CROSS_ICON.addEventListener("click", function () {
    TESTIMONIAL_POPOVER.classList.remove("testimonial-popover__opened");
    OVERLAY.classList.remove("overlay-visible");
})

