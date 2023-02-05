(function () {
  console.log(
    "Общая оценка - 125 баллов. \n1. При нажатии на кнопки: Gargens, Lawn, Planting происходит смена фокуса на услугах в разделе service +50 \n2. Accordion в секции prices реализация 3-х выпадающих списков об услугах и ценах + 50 \n3. В разделе contacts реализован select с выбором городов +25"
  );
})();

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

function ratesBlock() {
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
  priceBtn[i].addEventListener("click", ratesBlock);
}

/* SECTION PRICES ACCORDION FUNCTIONALITY END */

/* CUSTOM SELECT FUNCTIONALITY START */

const select = document.querySelector(
  ".section-contacts-block__cities-selector"
);
const selectVars = document.querySelector(
  ".section-contacts-block__cities-options-block"
);
const selectText = document.querySelector(".cities-selector__text");
const selectBtn = document.querySelector(".cities-selector__arrow");
const cityLine = document.querySelectorAll(".city-name");
const cityBlock = document.querySelector(".section-contact-block__chosen-city");
const city = document.querySelector(".info-block_changing-city");
const phone = document.querySelector(".info-block_changing-phone");
const address = document.querySelector(".info-block_changing-address");
const callUsBtn = document.querySelector(".chosen-city__btn");
const womanPic = document.querySelector(".section-contacts-block__pic");
let phoneNumber;

function selectOpen() {
  if (selectVars.classList.contains("select-block-active")) {
    selectVars.classList.remove("select-block-active");
    select.classList.remove("select-active");
    selectText.classList.remove("select-active-text");
    selectBtn.classList.remove("active-select-btn");
    selectText.textContent = "City";
    if (window.screen.width <= "768") {
      womanPic.style.margin = "37.3% 0 0 3%";
    }
    return;
  }

  cityBlock.classList.remove("city-block-active");
  selectVars.classList.add("select-block-active");
  select.classList.add("select-active");
  selectText.classList.add("select-active-text");
  selectBtn.classList.add("active-select-btn");
  if (window.screen.width <= "380") {
    womanPic.style.margin = "3.9% 0 0 3%";
  } else if (window.screen.width <= "768") {
    womanPic.style.margin = "2.3% 0 0 3%";
  }
}

select.addEventListener("click", selectOpen);

function cityBlockFillIn() {
  selectVars.classList.remove("select-block-active");
  cityBlock.classList.add("city-block-active");
  selectBtn.classList.remove("active-select-btn");
  selectText.textContent = this.textContent;
  city.textContent = this.textContent;

  if (window.screen.width <= "380") {
    womanPic.style.margin = "2% 0 0 3%";
    cityBlock.style.margin = "2.5% 0 0 0";
  } else if (window.screen.width <= "500") {
    womanPic.style.margin = "3.4% 0 0 3%";
    cityBlock.style.margin = "4% 0 0 0";
  } else if (window.screen.width <= "768") {
    womanPic.style.margin = "2.3% 0 0 3%";
    cityBlock.style.margin = "3% 0 0 0";
  }

  if (this.id === "canandaigua") {
    phone.textContent = "+1	585	393 0001";
    address.textContent = "151 Charlotte Street";
  } else if (this.id === "nyc") {
    phone.textContent = "+1	212	456 0002";
    address.textContent = "9 East 91st Street";
  } else if (this.id === "yonkers") {
    phone.textContent = "+1	914	678 0003";
    address.textContent = "511 Warburton Ave";
  } else if (this.id === "sherrill") {
    phone.textContent = "+1	315	908 0004";
    address.textContent = "14 WEST Noyes BLVD";
  }
}

for (let i = 0; i < cityLine.length; i++) {
  cityLine[i].addEventListener("click", cityBlockFillIn);
}

function callToOffice() {
  phoneNumber = phone.textContent;
  window.location.href = `tel:${phoneNumber}`;
}

/* CUSTOM SELECT FUNCTIONALITY END */
