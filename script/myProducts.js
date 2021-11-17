const productsContainer = document.querySelector('.user-products-list');
const btnStart = document.querySelector('.start-route')
const addProduct = document.querySelector('.cardNewProduct');
const myProductsTitle = document.querySelector('.my-products__title');
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
  window.location = `./category.html?listId=${currentListId}`;
});





if (type === 'community') {

  addProduct.classList.add('hidden');
  btnStart.innerText = 'Añadir a mis listas'
  const currentCommunityList = onGetSingleList(parseInt(currentListId), true, comunitylists)
  myProductsTitle.innerText =  currentCommunityList.name; 
  if (!currentCommunityList) window.location = './notFound.html';
  listProducts = currentCommunityList.products;

}

if (type === 'list') {

  if (!onGetSingleList(currentListId)) window.location = './notFound.html';
  listProducts = onGetSingleList(currentListId).products;
  console.log(listProducts);
}




const createProductCard = ({title, description, id, img, rating, price}) => {
  const cardProduct = document.createElement('div');
  cardProduct.classList.add('cardProduct');
  cardProduct.innerHTML = `
    <div class="cardProduct__container">
      <div class="cardProduct__img">
          <img class="cardProduct__size" src="${img}">
      </div>
      <div class="cardProduct__info">
          <div class="cardProduct__title">
              <p class="cardProduct__name"> <strong>${title}</strong></p>
              <p class="cardProduct__weight"> 500g </p>
          </div>
          <div class="cardProduct__starContainer">
              <img class="cardProduct__star" src="./images/star.svg">
              <img class="cardProduct__star" src="./images/star.svg">
              <img class="cardProduct__star" src="./images/star.svg">
              <img class="cardProduct__star" src="./images/star.svg">
              <img class="cardProduct__star" src="./images/star.svg">
          </div>
          <p class="cardProduct__price"> $${price} </p>
      </div>
    </div>
  `;
  productsContainer.appendChild(cardProduct);
}

const renderProductsList = () => {
  productsContainer.innerHTML = '';
  console.log(listProducts);

  if (type === 'community' || type === 'list') {
    const dummyProducts = products.filter(({ id }) => listProducts.includes(id));
    console.log(dummyProducts);
    dummyProducts.forEach((product) => {
      createProductCard(product);
    })
  }

}
renderProductsList();
