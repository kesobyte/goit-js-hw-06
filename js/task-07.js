const adjustSize = document.getElementById("font-size-control");
const text = document.getElementById("text");

adjustSize.addEventListener("input", (e) => {
  text.style.fontSize = adjustSize.value + "px";
});
