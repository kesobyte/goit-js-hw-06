let counterValue = 0;

const btnInc = document.querySelector('[data-action="increment"]');
const btnDec = document.querySelector('[data-action="decrement"]');
let spanValue = document.getElementById("value");

//Increment counterValue by 1
btnInc.addEventListener("click", (e) => {
  counterValue = counterValue += 1;
  spanValue.innerText = counterValue;
});

//Decrement counterValue by 1
btnDec.addEventListener("click", (e) => {
  if (counterValue > 0) {
    counterValue = counterValue -= 1;
    spanValue.innerText = counterValue;
  }
});
