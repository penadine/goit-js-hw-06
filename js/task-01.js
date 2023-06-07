const categoriesEL = document.querySelector('#categories');
const itemEL = categoriesEL.querySelectorAll('.item');

console.log(`Number of categories: ${itemEL.length}`);

itemEL.forEach(category => {
  const categoryNameEL = category.querySelector('h2').textContent;
  const categoryElements = category.querySelectorAll('li').length;
  console.log(`Category: ${categoryNameEL}`);
  console.log(`Elements: ${categoryElements}`);
});