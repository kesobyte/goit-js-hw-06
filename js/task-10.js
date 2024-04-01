function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector("#boxes");
const createBox = document.querySelector("[data-create]");
let number = document.getElementsByTagName("input");

function createBoxes(amount) {
  for (i = 0; i <= amount; i++) {
    boxes.createElement("div");
    boxes.setAttribute("style", "background-color: black");
    boxes.appendChild(boxes);
  }
}

// createBox.addEventListener("click", createBoxes(number.value));
