(function () {
  console.log(
    "Общая оценка - 85 баллов. \n1. Вёрстка соответствует макету. Ширина экрана 768px +24 \n2. Вёрстка соответствует макету. Ширина экрана 380px +24 \n3. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. +15 \n4. На ширине экрана 380рх и меньше реализовано адаптивное меню +22"
  );
})();

(function () {
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
})();
