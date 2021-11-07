const arrowDrop = document.querySelector('.arrow-drop');
const productsContainer = document.querySelector('.products-route-container');

arrowDrop.addEventListener('click', () => {
  productsContainer.classList.toggle('hidden'); 
  arrowDrop.querySelector('img').classList.toggle('arrow-drop--Active'); 
}); 
