function giveInfo() {
  const listItems = document.querySelectorAll("li.item");

  console.log(`Number of categories: ${listItems.length}`);

  listItems.forEach((item) => {
    const secondHeading = item.firstElementChild;
    const categoryList = secondHeading.nextElementSibling;
    const categoryListItems = categoryList.children;

    console.log(`Category: ${secondHeading.textContent}`);
    console.log(`Elements: ${categoryListItems.length}`);
  });
}

giveInfo();
