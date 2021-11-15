const productsContainer = document.querySelector('.user-products-list');
const btnStart = document.querySelector('.start-route')
const addProduct = document.querySelector('.cardNewProduct');
const params = new URLSearchParams(location.search)
const type = params.get('type');
const currentListId = params.get('id');
let listProducts=[];

btnStart.addEventListener('click', () => {

  if (type === "list") {
    window.location = './route.html';
    console.log("list")
  }
  else if (type === "community") {

    //duplica
  }

});
addProduct.addEventListener('click', () => {
  window.location = './category.html';
});





if (type === 'community') {

  addProduct.classList.add('hidden');
  btnStart.innerText = 'Añadir a mis listas'
  const currentCommunityList = onGetSingleList(parseInt(currentListId), true, comunitylists)

  if (!currentCommunityList) window.location = './notFound.html';
  listProducts = currentCommunityList.products;

}

if (type === 'lists') {

  if (!onGetSingleList(currentListId)) window.location = './notFound.html';
  listProducts = onGetSingleList(currentListId).products;
  console.log(listProducts);
}




const createProductCard = () => {
  const cardProduct = document.createElement('div');
  cardProduct.classList.add('cardProduct');
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
  console.log(listProducts);
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