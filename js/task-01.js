function giveInfo() {
  const listItems = document.querySelectorAll("li.item");
  const list = document.querySelector("ul#categories");
  const secondHeadings = list.querySelectorAll("h2");

  console.log(`Number of categories: ${listItems.length}`);

  for (let i = 0; i < listItems.length; i++) {
    const categoryList = secondHeadings[i].nextElementSibling;
    const categoryListItems = categoryList.children;

    console.log(`Category: ${secondHeadings[i].innerHTML}`);
    console.log(`Elements: ${categoryListItems.length}`);
  }
}

giveInfo();
