"use strict";

const nav = () => {
  const navMobileBtn = document.querySelector(".nav__mobile-icon");
  const navMobileBtn_Text = document.querySelector(".nav__mobile-icon--text");

  const navList = document.querySelector(".nav__list");

  // Toggle Mobile Drop-down
  const navMobile_Toggle = () => {
    navMobileBtn.classList.toggle("active");
    navList.classList.toggle("active");

    // TOGGLE 'aria-expanded'
    navMobileBtn.ariaExpanded === "false"
      ? (navMobileBtn.ariaExpanded = "true")
      : (navMobileBtn.ariaExpanded = "false");

    // Toggle Hamburger Menu text
    navMobileBtn_Text.innerHTML === "Menu"
      ? (navMobileBtn_Text.textContent = "Close")
      : (navMobileBtn_Text.textContent = "Menu");
  };

  navMobileBtn.addEventListener("click", navMobile_Toggle);
};

nav();

export default nav;

// ------------------------------------------------------------------
// Hide Dropdown when click outside
// document.addEventListener("click", function (event) {
//   if (
//     !event.target.closest(".nav__responsive") &&
//     navResponsiveBtn.classList.contains("active")
//   ) {
//     navResponsive_Toggle();
//   }
// });
