("use strict");

const navMobileBtn = document.querySelector(".nav__mobile-icon");
const navMobileBtn_Text = document.querySelector(".nav__mobile-icon--text");

const navList = document.querySelector(".nav__list");

///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

// Toggle Mobile Drop-down
const navMobile_Toggle = function () {
  navMobileBtn.classList.toggle("active");
  navList.classList.toggle("active");

  // Toggle Hamburger Menu text
  if (navMobileBtn_Text.innerHTML == "Menu") {
    navMobileBtn_Text.textContent = "Close";
  } else {
    navMobileBtn_Text.textContent = "Menu";
  }
};

navMobileBtn.addEventListener("click", navMobile_Toggle);

export default navMobile_Toggle;

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
