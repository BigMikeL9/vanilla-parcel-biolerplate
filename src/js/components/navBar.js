("use strict");

const navResponsiveBtn = document.querySelector(".nav__responsive-menu-button");
const navResponsiveHam = document.querySelector(
  ".nav__responsive-menu-button--icons"
);
const navResponsiveHamText = document.querySelector(
  ".nav__responsive-menu-button--text"
);

const navResponsiveList = document.querySelector(".nav__responsive-list");
const navResponsiveLink = document.querySelectorAll(".nav__responsive-link");

///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
// Toggle Responsive Drop-down
export const navResponsive_Toggle = function () {
  navResponsiveBtn.classList.toggle("active");
  navResponsiveHam.classList.toggle("active");
  navResponsiveList.classList.toggle("active");

  // Add/Remove Links Animations
  navResponsiveLink.forEach((item, index) => {
    if (!item.style.animation) {
      item.style.animation = `nav__item-animation 0.5s ease forwards ${
        index / 8 + 0.1
      }s`;
    } else {
      setTimeout(() => {
        item.style.animation = "";
      }, 100);
    }
  });

  // Toggle Hamburger Menu text
  if (navResponsiveHamText.innerHTML == "Menu") {
    navResponsiveHamText.textContent = "Close";
  } else {
    navResponsiveHamText.textContent = "Menu";
  }
};

navResponsiveBtn.addEventListener("click", navResponsive_Toggle);

// ------------------------------------------------------------------
// Hide Dropdown when click outside SearchBar or DropDown list
document.addEventListener("click", function (event) {
  if (
    !event.target.closest(".nav__responsive") &&
    navResponsiveBtn.classList.contains("active")
  ) {
    navResponsive_Toggle();
  }
});
