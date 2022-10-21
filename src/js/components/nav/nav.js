"use strict";

const nav = () => {
  const nav = document.querySelector(".nav");
  const navBtn = document.querySelector(".nav__button");

  const navList = document.querySelector(".nav__list");
  const navLinks = document.querySelectorAll(".nav__list a");
  // const navBg = document.querySelector(".nav__background");

  // ---------
  // Toggle Mobile Drop-down
  const nav_Toggle = () => {
    navBtn.classList.toggle("active");
    navList.classList.toggle("active");
    // navBg.classList.toggle("active");

    // TOGGLE 'aria-expanded'
    navBtn.ariaExpanded === "false"
      ? (navBtn.ariaExpanded = "true")
      : (navBtn.ariaExpanded = "false");
  };

  // ---------
  // close dropdown when link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      nav_Toggle();
    });
  });

  // ---------
  navBtn.addEventListener("click", nav_Toggle);

  // ------------------------------------------------------------------

  // -- close dropdown when clicked outside
  document.addEventListener("click", function (event) {
    if (!event.target.closest("nav") && navList.classList.contains("active"))
      navList.classList.remove("active");
  });
};

nav();

export default nav;
