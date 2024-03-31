const textInput = document.getElementById("validation-input");
const textLength = parseInt(textInput.getAttribute("data-length"));

textInput.addEventListener("blur", (e) => {
  if (textInput.value.length < textLength) {
    textInput.setAttribute("class", "invalid");
  } else {
    textInput.setAttribute("class", "valid");
  }

  //Update to default
  if (textInput.value === "") {
    textInput.setAttribute("class", "");
  }
});
