function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const button = document.querySelector(".change-color");
const color = document.querySelector(".color");

button.addEventListener("click", (e) => {
  const colorValue = getRandomHexColor();

  body.setAttribute("style", `background-color: ${colorValue}`);
  color.textContent = colorValue;
});
