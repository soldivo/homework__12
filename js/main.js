const cannone = document.getElementById("cannone");
const core = document.getElementById("core");
const boom = document.getElementById("boom");
cannone.addEventListener("click", function () {
  core.classList.add("core");
});

core.addEventListener("animationend", function () {
  boom.style.display = "block";
  boom.classList.add("boom__a");
});

const car = document.getElementById("car");
car.addEventListener("click", function () {
  car.classList.add("car__a");
});
