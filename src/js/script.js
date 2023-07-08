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

const grid = document.querySelector(`.grid`);
const personal = document.querySelector(`.grid__element_personal`);
const cv = document.querySelector(`.grid__element_cv`);
const gallery = document.querySelector(`.grid__element_gallery`);
const skills = document.querySelector(`.grid__element_skills`);
const electon = document.querySelector(`.grid__element_electon`);
const filmCatalog = document.querySelector(`.grid__element_film-catalog`);
const paymentForm = document.querySelector(`.grid__element_payment-form`);
const taskList = document.querySelector(`.grid__element_task-list`);
const personalWebsite = document.querySelector(
  `.grid__element_personal-website`
);
const announcement = document.querySelector(`.grid__element_announcement`);
const linkedin = document.querySelector(`.grid__element_linkedin`);
const github = document.querySelector(`.grid__element_github`);
const telegram = document.querySelector(`.grid__element_telegram`);

const everything = document.querySelector(`.header__nav-item_everything`);
everything.addEventListener("click", function () {
  grid.classList.remove("grid-projects");
  grid.classList.remove("grid-contact");
  personal.classList.remove("dimmed");
  cv.classList.remove("dimmed");
  gallery.classList.remove("dimmed");
  skills.classList.remove("dimmed");
  electon.classList.remove("dimmed");
  filmCatalog.classList.remove("dimmed");
  paymentForm.classList.remove("dimmed");
  taskList.classList.remove("dimmed");
  personalWebsite.classList.remove("dimmed");
  announcement.classList.remove("dimmed");
  linkedin.classList.remove("dimmed");
  github.classList.remove("dimmed");
  telegram.classList.remove("dimmed");
});

const projects = document.querySelector(`.header__nav-item_projects`);
projects.addEventListener("click", function () {
  grid.classList.remove("grid-contact");
  grid.classList.add("grid-projects");
  personal.classList.add("dimmed");
  cv.classList.add("dimmed");
  gallery.classList.add("dimmed");
  skills.classList.remove("dimmed");
  electon.classList.remove("dimmed");
  filmCatalog.classList.remove("dimmed");
  paymentForm.classList.remove("dimmed");
  taskList.classList.remove("dimmed");
  personalWebsite.classList.remove("dimmed");
  announcement.classList.remove("dimmed");
  linkedin.classList.add("dimmed");
  github.classList.add("dimmed");
  telegram.classList.add("dimmed");
});

const contact = document.querySelector(`.header__nav-item_contact`);
contact.addEventListener("click", function () {
  grid.classList.add("grid-contact");
  grid.classList.remove("grid-projects");
  personal.classList.add("dimmed");
  cv.classList.add("dimmed");
  gallery.classList.add("dimmed");
  skills.classList.add("dimmed");
  electon.classList.add("dimmed");
  filmCatalog.classList.add("dimmed");
  paymentForm.classList.add("dimmed");
  taskList.classList.add("dimmed");
  personalWebsite.classList.add("dimmed");
  announcement.classList.add("dimmed");
  linkedin.classList.remove("dimmed");
  github.classList.remove("dimmed");
  telegram.classList.remove("dimmed");
});

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
    .forEach((dot) => dot.classList.remove(`grid__slider-dot_active`));
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

function confirmVisit(albumName) {
  var confirmation = confirm(
    "It's that part of my website-portfolio where I let some bits of my personality slip in. I really like this album. Do you want to visit the Spotify page of " +
      albumName +
      ", though?"
  );
  if (confirmation) {
    return true;
  } else {
    event.preventDefault();
    return false;
  }
}

window.addEventListener("load", function () {
  if (navigator.userAgent.match(/chrome|chromium|crios/i)) {
    document.documentElement.classList.add("scrollbar");
  } else {
    return;
  }
});
