const productsContainer = document.querySelector('.user-products-list');
document.querySelector('.start-route').addEventListener('click', () => {
  window.location = './route.html';
});
document.querySelector('.cardNewProduct__container').addEventListener('click', () => {
  window.location = './category.html';
});

const params = new URLSearchParams(location.search)
const currentListId = params.get('id')
const listProducts = onGetSingleList(currentListId).products;
if (!listProducts) window.location = './notFound.html';
console.log(listProducts);


const createProductCard = () => {
  const cardProduct = document.createElement('div');
  cardProduct.innerHTML = `
    <div class="cardProduct__container">
      <div class="cardProduct__img">
          <img class="cardProduct__size" src="./images/huevos.png">
      </div>
      <div class="cardProduct__info">
          <div class="cardProduct__title">
              <p class="cardProduct__name"> <strong> Huevos Kike AAA </strong></p>
              <p class="cardProduct__weight"> 500g </p>
          </div>
          <div class="cardProduct__starContainer">
              <img class="cardProduct__star" src="./images/star.svg">
              <img class="cardProduct__star" src="./images/star.svg">
              <img class="cardProduct__star" src="./images/star.svg">
              <img class="cardProduct__star" src="./images/star.svg">
              <img class="cardProduct__star" src="./images/star.svg">
          </div>
          <p class="cardProduct__price"> $12.000 </p>
      </div>
    </div>
  `;
  productsContainer.appendChild(cardProduct); 
}

const renderProductsList = () => {
  productsContainer.innerHTML = ''; 
  listProducts.forEach((product) => {
    createProductCard(); 
  })
}
renderProductsList(); 
/*
<div class="cardProduct">
    <div class="cardProduct__container">
        <div class="cardProduct__img">
            <img class="cardProduct__size" src="./images/huevos.png">
        </div>
        <div class="cardProduct__info">
            <div class="cardProduct__title">
                <p class="cardProduct__name"> <strong> Huevos Kike AAA </strong></p>
                <p class="cardProduct__weight"> 500g </p>
            </div>
            <div class="cardProduct__starContainer">
                <img class="cardProduct__star" src="./images/star.svg">
                <img class="cardProduct__star" src="./images/star.svg">
                <img class="cardProduct__star" src="./images/star.svg">
                <img class="cardProduct__star" src="./images/star.svg">
                <img class="cardProduct__star" src="./images/star.svg">
            </div>
            <p class="cardProduct__price"> $12.000 </p>
        </div>
    </div>
</div>

*/