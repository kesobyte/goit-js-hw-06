const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", (e) => {
  nameOutput.innerText = nameInput.value;
  if (nameOutput.textContent === "") {
    nameOutput.textContent = "Anonymous";
  }
});
