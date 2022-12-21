var button = document.querySelector(".cat-flap-img");
console.log(button);
var body = document.querySelector("body");
console.log(body);
var theme2 = function () {
  console.log("change-theme");
  body.classList.toggle("theme2");
};

button.addEventListener("click", theme2);
