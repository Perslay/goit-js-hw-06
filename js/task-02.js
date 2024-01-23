const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("ul#ingredients");

const items = ingredients.map((ingredient) => {
  const item = document.createElement("li");

  item.textContent = ingredient;
  item.classList.add("item");

  return item;
});

list.append(...items);
