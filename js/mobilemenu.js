const navbar_menu_button = document.querySelector(".mobile_navigation_trigger");
const mobile_navbar = document.querySelector(".navigation_box");
const mobile_navbar_container = document.querySelector(".navigation_panel");

const mobile_nav_drop = () => {
  mobile_navbar.classList.toggle("drop");
  mobile_navbar_container.classList.toggle("drop1");
};

function myFunction() {
  mobile_navbar.classList.remove("drop");
  mobile_navbar_container.classList.remove("drop1");
}

navbar_menu_button.addEventListener("click", mobile_nav_drop);

mobile_navbar_container.addEventListener("click", myFunction);
