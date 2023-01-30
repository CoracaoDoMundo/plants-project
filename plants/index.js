// (function () {
//   console.log(
//     "Общая оценка - 85 баллов. \n1. Вёрстка соответствует макету. Ширина экрана 768px +24 \n2. Вёрстка соответствует макету. Ширина экрана 380px +24 \n3. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. +15 \n4. На ширине экрана 380рх и меньше реализовано адаптивное меню +22"
//   );
// })();

/* BURGER MENU START */

const body = document.querySelector(".body");
const burgerIcon = document.querySelector(".burger");
const menu = document.querySelector(".header-block__nav");
const menuCloseIcon = document.querySelector(".header-block__nav-close");
const menuItems = document.querySelector(".nav-list");
const shadow = document.querySelector(".header-block__burger-shadow");

burgerIcon.addEventListener("click", () => {
  menu.classList.add("header-block__nav_active");
  shadow.classList.add("shadow-active");
  body.classList.add("no-scroll");
});

menuCloseIcon.addEventListener("click", () => {
  menu.classList.remove("header-block__nav_active");
  shadow.classList.remove("shadow-active");
  body.classList.remove("no-scroll");
});

shadow.addEventListener("click", () => {
  menu.classList.remove("header-block__nav_active");
  shadow.classList.remove("shadow-active");
  body.classList.remove("no-scroll");
});

menuItems.addEventListener("click", () => {
  menu.classList.remove("header-block__nav_active");
  shadow.classList.remove("shadow-active");
  body.classList.remove("no-scroll");
});

/* BURGER MENU END */

/* SECTION SERVICE INTERACTIVE BEHAVIOR START */

const gardenBtn = document.querySelector(".garden-btn");
const lawnBtn = document.querySelector(".lawn-btn");
const plantingBtn = document.querySelector(".planting-btn");
const gardenCard = document.querySelectorAll(".garden");
const lawnCard = document.querySelectorAll(".lawn");
const plantingCard = document.querySelectorAll(".planting");

function gardens() {
  if (gardenBtn.getAttribute("value") === "off") {
    gardenBtn.setAttribute("value", "on");
  } else {
    gardenBtn.setAttribute("value", "off");
  }
  gardenBtn.classList.toggle("active-btn");
  gardenCard.forEach((card) => card.classList.toggle("blur-effect"));
};

gardenBtn.addEventListener("click", gardens, false); // вешает слушатель

function lawns() {
  if (lawnBtn.getAttribute("value") === "off") {
    lawnBtn.setAttribute("value", "on");
  } else {
    lawnBtn.setAttribute("value", "off");
  }
  lawnBtn.classList.toggle("active-btn");
  lawnCard.forEach((card) => card.classList.toggle("blur-effect"));
};

lawnBtn.addEventListener("click", lawns, false);

function plantings() {
  if (plantingBtn.getAttribute("value") === "off") {
    plantingBtn.setAttribute("value", "on");
  } else {
    plantingBtn.setAttribute("value", "off");
  }
  plantingBtn.classList.toggle("active-btn");
  plantingCard.forEach((card) => card.classList.toggle("blur-effect"));
};

plantingBtn.addEventListener("click", plantings, false);


/* SECTION SERVICE INTERACTIVE BEHAVIOR END */
