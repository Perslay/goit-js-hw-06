const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Napisz skrypt, który dla każdego elementu tablicy ingredients:

// Utworzy oddzielny element <li>. Obowiązkowo użyj metody document.createElement().
// Doda nazwę elementu (string z tablicy) jako jego zawartość tekstową.
// Doda do elementu klasę item.
// Następnie jedna operacja umieści wszystkie <li> na liście ul#ingredients.

function createListItems() {
  const list = document.querySelector("ul#ingredients");

  for (let i = 0; i < ingredients.length; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = ingredients[i];
    listItem.classList.add("item");
    list.append(listItem);
  }
}

createListItems();
