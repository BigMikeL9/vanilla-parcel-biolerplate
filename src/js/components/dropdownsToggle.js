const dropdowns_Toggle = () => {
  const dropdownContainers = document.querySelectorAll(
    ".portraits__list-sort .dropdown"
  );

  // -- guard clause
  if (!dropdownContainers[0]) return;

  dropdownContainers.forEach((cont, index, arr) => {
    cont.addEventListener("click", function (event) {
      // -- remove 'active' class from items that are not clicked
      arr.forEach((item) => {
        if (item !== event.target) {
          item.classList.remove("active");
        }
      });

      // -- add 'active' class to clicked dropdown
      event.target.classList.toggle("active");
    });

    // -- close dropdown when clicked outside
    document.addEventListener("click", function (event) {
      if (event.target !== cont) {
        cont.classList.remove("active");
      }
    });
  });
};

dropdowns_Toggle();

export default dropdowns_Toggle;
