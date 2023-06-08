const categoriesEL = document.querySelector('#categories');
const itemEL = categoriesEL.querySelectorAll('.item');

console.log('Number of categories:', itemEL.length);

itemEL.forEach(category => {
  const categoryNameEL = category.firstElementChild.textContent;
  const categoryElements = category.lastElementChild.children.length;
  console.log(`Category: ${categoryNameEL}`);
  console.log('Elements:', categoryElements);
});