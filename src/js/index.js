import Button from "./components/Button/Button";
import dropdowns_Toggle from "./components/dropdown/dropdownsToggle";
import nav from "./components/nav/nav";
import lazyLoad from "./utility/lazyLoad/lazyLoad";

const init = () => {
  dropdowns_Toggle();
  nav();
  lazyLoad();
};

init();
