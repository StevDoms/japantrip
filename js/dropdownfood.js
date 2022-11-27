const dropdown_menu = document.querySelector(".navigation_dropdown");
const dropdown_button = document.querySelector(".navigation_text");
const clickout = document.querySelector(".hero");
const clickout1 = document.querySelector(".day_1");
const clickout2 = document.querySelector(".day_2");
const clickout3 = document.querySelector(".day_3");
const clickout4 = document.querySelector(".day_4");
const clickout5 = document.querySelector(".day_5");
const clickout6 = document.querySelector(".day_6");
const clickout7 = document.querySelector(".day_7");
const clickout8 = document.querySelector(".day_8");
const clickout9 = document.querySelector(".day_9");

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
clickout1.addEventListener("click", myFunction);
clickout2.addEventListener("click", myFunction);
clickout3.addEventListener("click", myFunction);
clickout4.addEventListener("click", myFunction);
clickout5.addEventListener("click", myFunction);
clickout6.addEventListener("click", myFunction);
clickout7.addEventListener("click", myFunction);
clickout8.addEventListener("click", myFunction);
clickout9.addEventListener("click", myFunction);
