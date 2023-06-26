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
