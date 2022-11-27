const dropdown_menu = document.querySelector(".navigation_dropdown");
const dropdown_button = document.querySelector(".navigation_text");
const clickout = document.querySelector(".hero");
const clickout2 = document.querySelector(".content_section");

const dropdown_effect = () => {
  dropdown_button.classList.toggle("is_active");
  dropdown_menu.classList.toggle("active");
};

function myFunction() {
  dropdown_menu.classList.remove("active");
  dropdown_button.classList.remove("is_active");
}

dropdown_button.addEventListener("click", dropdown_effect);
clickout.addEventListener("click", myFunction);
clickout2.addEventListener("click", myFunction);
