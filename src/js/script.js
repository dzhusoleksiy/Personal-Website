function initMobile() {
  console.log("is-mobile");
}

function initTablet() {
  console.log("is-tablet");
}

function initDesktop() {
  console.log("is-desktop");
}

ssm.addStates([
  {
    id: "mobile",
    query: "(max-width: 640px)",
    onEnter: function () {
      initMobile();
    },
  },
  {
    id: "tablet",
    query: "(min-width: 641px) and (max-width: 992px)",
    onEnter: function () {
      initTablet();
    },
  },
  {
    id: "desktop",
    query: "(min-width: 993px)",
    onEnter: function () {
      initDesktop();
    },
  },
]);

//Navigation
function handleNavigation() {
  const navItems = document.querySelectorAll(".header__nav-item");
  const activeIndicator = document.querySelector(".header__active-nav-item");
  let activeItem = document.querySelector(".header__nav-item.active");

  function moveIndicator() {
    const itemOffset = activeItem.offsetLeft;
    const itemWidth = activeItem.offsetWidth;
    activeIndicator.style.transform = `translateX(${itemOffset}px)`;
    activeIndicator.style.width = `${itemWidth}px`;
  }

  navItems.forEach(function (item) {
    item.addEventListener("click", function () {
      activeItem.classList.remove("active");
      this.classList.add("active");
      activeItem = this;
      moveIndicator();
    });
  });

  window.addEventListener("resize", function () {
    moveIndicator();
  });
  moveIndicator();
}
handleNavigation();

//Gallery
const slides = document.querySelectorAll(`.grid__slide`);
const buttonLeft = document.querySelector(`.grid__slider-btn_left`);
const buttonRight = document.querySelector(`.grid__slider-btn_right`);
const dotContainer = document.querySelector(`.grid__slider-dots`);

let currentSlide = 0;
const maxSlide = slides.length;

const createDots = function () {
  slides.forEach(function (slide, index) {
    dotContainer.insertAdjacentHTML(
      `beforeend`,
      `<button  class="grid__slider-dot" data-slide="${index}" aria-label="photo-${
        index + 1
      }"></button>`
    );
  });
};

const activeDot = function (slide) {
  document
    .querySelectorAll(`.grid__slider-dot`)
    .forEach(dot => dot.classList.remove(`grid__slider-dot_active`));
  document
    .querySelector(`.grid__slider-dot[data-slide="${slide}"]`)
    .classList.add(`grid__slider-dot_active`);
};

const goToSlide = function (slideNumber) {
  slides.forEach(
    (slide, index) =>
      (slide.style.transform = `translateX(${100 * (index - slideNumber)}%)`)
  );
};

const nextSlide = function () {
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  goToSlide(currentSlide);
  activeDot(currentSlide);
};

const previousSlide = function () {
  if (currentSlide === 0) {
    currentSlide = maxSlide - 1;
  } else {
    currentSlide--;
  }
  goToSlide(currentSlide);
  activeDot(currentSlide);
};

const init = function () {
  goToSlide(0);
  createDots();
  activeDot(0);
};
init();

buttonLeft.addEventListener(`click`, previousSlide);
buttonRight.addEventListener(`click`, nextSlide);
dotContainer.addEventListener(`click`, function (event) {
  if (event.target.classList.contains(`grid__slider-dot`)) {
    currentSlide = Number(event.target.dataset.slide);
    goToSlide(currentSlide);
    activeDot(currentSlide);
  }
});


