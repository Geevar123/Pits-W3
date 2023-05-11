// navbar
const hamburger = document.querySelector(".icon");
const menu = document.querySelector(".list-item");

hamburger.addEventListener("click", function () {
  this.classList.toggle("active");
  menu.classList.toggle("active");
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 800) {
    hamburger.classList.remove("active");
    menu.classList.remove("active");
  }
});

// Slider
document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide", {
    type: "loop",
    drag: "free",
    focus: "center",
    autoWidth: true,
    perPage: 3,
    autoScroll: {
      speed: 1,
    },
  }).mount(window.splide.Extensions);
});

// Get the element to be faded

const element = document.querySelector(".fade-in-out-left");

// Check if the element is visible

function isVisible(element) {
  const elementPosition = element.getBoundingClientRect();

  return (
    elementPosition.top < window.innerHeight && elementPosition.bottom >= 0
  );
}

// Add an event listener to the scroll event

window.addEventListener("scroll", () => {
  if (isVisible(element)) {
    element.classList.add("visible-left");
  } else {
    element.classList.remove("visible-left");
  }
});

const elements = document.querySelector(".fade-in-out-right");

// Check if the element is visible

function isVisible(elements) {
  const elementPosition = elements.getBoundingClientRect();

  return (
    elementPosition.top < window.innerHeight && elementPosition.bottom >= 0
  );
}

// Add an event listener to the scroll event

window.addEventListener("scroll", () => {
  if (isVisible(elements)) {
    elements.classList.add("visible-right");
  } else {
    elements.classList.remove("visible-right");
  }
});
