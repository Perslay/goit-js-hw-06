const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

function createListItems() {
  const list = document.querySelector("ul#ingredients");

  ingredients.forEach((ingredient) => {
    const listItem = document.createElement("li");

    listItem.textContent = ingredient;
    listItem.classList.add("item");
    list.append(listItem);
  });
}

createListItems();
