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
const btn = document.querySelectorAll(".service-btn");
const card = document.querySelectorAll(".section-service-block__card");

function bluring() {
  card.forEach((el) => el.classList.add("blur-effect"));
}

function clearing() {
  card.forEach((el) => el.classList.remove("blur-effect"));
}

function gardens() {
  if (
    !lawnBtn.classList.contains("active-btn") &&
    !plantingBtn.classList.contains("active-btn")
  ) {
    if (!gardenBtn.classList.contains("active-btn")) {
      bluring();
      gardenBtn.classList.toggle("active-btn");
      gardenCard.forEach((el) => el.classList.remove("blur-effect"));
    } else {
      gardenBtn.classList.toggle("active-btn");
      clearing();
    }
  } else if (
    (lawnBtn.classList.contains("active-btn") &&
      !plantingBtn.classList.contains("active-btn")) ||
    (!lawnBtn.classList.contains("active-btn") &&
      plantingBtn.classList.contains("active-btn"))
  ) {
    if (!gardenBtn.classList.contains("active-btn")) {
      gardenBtn.classList.toggle("active-btn");
      gardenCard.forEach((el) => el.classList.remove("blur-effect"));
    } else {
      gardenBtn.classList.toggle("active-btn");
      gardenCard.forEach((el) => el.classList.add("blur-effect"));
    }
  }
}

gardenBtn.addEventListener("click", gardens, false);

function lawns() {
  if (
    !gardenBtn.classList.contains("active-btn") &&
    !plantingBtn.classList.contains("active-btn")
  ) {
    if (!lawnBtn.classList.contains("active-btn")) {
      bluring();
      lawnBtn.classList.toggle("active-btn");
      lawnCard.forEach((el) => el.classList.remove("blur-effect"));
    } else {
      lawnBtn.classList.toggle("active-btn");
      clearing();
    }
  } else if (
    (gardenBtn.classList.contains("active-btn") &&
      !plantingBtn.classList.contains("active-btn")) ||
    (!gardenBtn.classList.contains("active-btn") &&
      plantingBtn.classList.contains("active-btn"))
  ) {
    if (!lawnBtn.classList.contains("active-btn")) {
      lawnBtn.classList.toggle("active-btn");
      lawnCard.forEach((el) => el.classList.remove("blur-effect"));
    } else {
      lawnBtn.classList.toggle("active-btn");
      lawnCard.forEach((el) => el.classList.add("blur-effect"));
    }
  }
}

lawnBtn.addEventListener("click", lawns, false);

function plantings() {
  if (
    !gardenBtn.classList.contains("active-btn") &&
    !lawnBtn.classList.contains("active-btn")
  ) {
    if (!plantingBtn.classList.contains("active-btn")) {
      bluring();
      plantingBtn.classList.toggle("active-btn");
      plantingCard.forEach((el) => el.classList.remove("blur-effect"));
    } else {
      plantingBtn.classList.toggle("active-btn");
      clearing();
    }
  } else if (
    (gardenBtn.classList.contains("active-btn") &&
      !lawnBtn.classList.contains("active-btn")) ||
    (!gardenBtn.classList.contains("active-btn") &&
      lawnBtn.classList.contains("active-btn"))
  ) {
    if (!plantingBtn.classList.contains("active-btn")) {
      plantingBtn.classList.toggle("active-btn");
      plantingCard.forEach((el) => el.classList.remove("blur-effect"));
    } else {
      plantingBtn.classList.toggle("active-btn");
      plantingCard.forEach((el) => el.classList.add("blur-effect"));
    }
  }
}

plantingBtn.addEventListener("click", plantings, false);

/* SECTION SERVICE INTERACTIVE BEHAVIOR END */

/* SECTION PRICES ACCORDION FUNCTIONALITY START */

const priceBtn = document.querySelectorAll(".rate-item__btn");
const rateBlock = document.querySelectorAll(".rates-block__rate-item");
const rateBlockLine = document.querySelectorAll(".rate-item__line");

function rateBlockOpen() {
  if (this.classList.contains("active-accordion-btn")) {
    rateBlock.forEach((el) => el.classList.remove("open-accordion"));
    priceBtn.forEach((el) => el.classList.remove("active-accordion-btn"));
    rateBlockLine.forEach((el) => el.classList.remove("active-line"));
    return;
  }

  for (let el of rateBlock) {
    if (el.classList.contains("open-accordion")) {
      el.classList.remove("open-accordion");
      priceBtn.forEach((el) => el.classList.remove("active-accordion-btn"));
      rateBlockLine.forEach((el) => el.classList.remove("active-line"));
    }
  }

  this.closest(".rates-block__rate-item").classList.toggle("open-accordion");
  this.closest(".rate-item__btn").classList.toggle("active-accordion-btn");
  this.closest(".rates-block__rate-item")
    .querySelector(".rate-item__line")
    .classList.toggle("active-line");
}

for (let i = 0; i < priceBtn.length; i++) {
  priceBtn[i].addEventListener("click", rateBlockOpen);
}

/* SECTION PRICES ACCORDION FUNCTIONALITY END */
