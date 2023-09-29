const navMenu = document.querySelector("#nav-menu");

const navIcon = document.querySelector("#nav-icon");

navIcon.addEventListener("click", () => {
  navIcon.classList.toggle("open");

  if (navMenu.classList.contains("w-0")) {
    navMenu.classList.remove("w-0");
    navMenu.classList.add("w-full");
  } else {
    navMenu.classList.remove("w-full");
    navMenu.classList.add("w-0");
  }
});
