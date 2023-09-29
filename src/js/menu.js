const menuBtn = document.querySelector("#menu_button");
const closeBtn = document.querySelector("#close_button");

menuBtn.addEventListener("click", () => {
  console.log("click");
});

closeBtn.addEventListener("click", (event) => {
  console.log(event);
});
