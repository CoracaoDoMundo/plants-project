// console.log('Вёрстка валидная (нет warnings, нет errors) +10 \nВёрстка семантическая (присутствуют все необходимые теги в минимальном количестве, <h2></h2> больше минимально указанного, что не является нарушением) +20 \nВёрстка соответствует макету (присутствуют все обязательные секции и разделы; при отображении в devtools ширины 1440px верстка полностью соответствует макету) +48 \nCss (в верстке использованы и flex и grids; макет остается по центру при уменьшении масштаба; фоновый цвет тянется на всю ширину окна; иконки и изображения добавлены в корректных форматах; есть favicon) + 12 \nИнтерактивность, реализуемая через css (плавная прокрутка, ссылки из футера, интерактивность в виде смены цвета и размера элементов) +20')

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
