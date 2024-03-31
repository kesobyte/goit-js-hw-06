const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

let ul = document.getElementById("ingredients");

for (let ingredient of ingredients) {
  let list = document.createElement("li");
  list.innerHTML = ingredient;
  ul.appendChild(list);
}
