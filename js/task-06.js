const textInput = document.getElementById("validation-input");
// const textLength = document.querySelector('[data-length="6"]');
const textLength = textInput.getAttribute("data-length");

textInput.addEventListener("blur", (e) => {
  if (textInput.value.length <= textLength) {
    textInput.setAttribute("class", "invalid");
  } else {
    textInput.setAttribute("class", "valid");
  }
});
