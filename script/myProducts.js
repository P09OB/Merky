const productsContainer = document.querySelector('.user-products-list');
const btnStart = document.querySelector('.start-route')
const addProduct = document.querySelector('.cardNewProduct');
const myProductsTitle = document.querySelector('.my-products__title');
const total = document.querySelector('.my-products__total').querySelector('span');
const params = new URLSearchParams(location.search);
const modalDeleteProduct = document.querySelector('.delete-product-container');
const type = params.get('type');
const currentListId = params.get('id');
let listProducts = [];

btnStart.addEventListener('click', () => {


  if (type === "list") {
    window.location = `./route.html?listId=${currentListId}`;

  }
  else if (type === "community") {

    onDuplicateList(parseInt(currentListId));
    showToast("lista duplicada")
  }

});
addProduct.addEventListener('click', () => {
  window.location = `./category.html?listId=${currentListId}`;
});





if (type === 'community') {

  addProduct.classList.add('hidden');
  btnStart.innerText = 'Añadir a mis listas'
  const currentCommunityList = onGetSingleList(currentListId, true, comunitylists)
  myProductsTitle.innerText = currentCommunityList.name;
  if (!currentCommunityList) window.location = './notFound.html';
  listProducts = currentCommunityList.products;
  
}

if (type === 'list') {
  if (!onGetSingleList(currentListId)) window.location = './notFound.html';
  listProducts = onGetSingleList(currentListId).products;
  if(listProducts.length === 0) btnStart.classList.add('hidden'); 
  myProductsTitle.innerText = onGetSingleList(currentListId).name;
  const productsFromData = getProductsFromIdList(listProducts)
  total.innerText = productsFromData.reduce((acc, val) => acc + val.price, 0)
}


const renderProductsList = () => {
  
  productsContainer.innerHTML = '';


  if (type === 'community') {
    const dummyProducts = getProductsFromIdList(listProducts); 

    dummyProducts.forEach((product) => {
      createProductCard(product);
    })
  }
  else if (type === 'list') {

    listProducts = onGetSingleList(currentListId).products;
    console.log(listProducts.length);
    if(listProducts.length === 0) btnStart.classList.add('hidden');
    total.innerText = getProductsFromIdList(listProducts).reduce((acc, val) => acc + val.price, 0)
    getProductsFromIdList(listProducts).forEach((product) => {
    createProductCard(product);
    })
  }

}

const createProductCard = ({ title, description, id, img, rating, price }) => {
  const starsArray = starsMath(rating); 
  const cardProduct = document.createElement('div');
  const deleteProduct = document.createElement('p');
  deleteProduct.classList.add("cardProduct__delete");
  deleteProduct.innerText="eliminar"
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
              <img class="cardProduct__star" src="./images/star-${starsArray[0]}.svg">
              <img class="cardProduct__star" src="./images/star-${starsArray[1]}.svg">
              <img class="cardProduct__star" src="./images/star-${starsArray[2]}.svg">
              <img class="cardProduct__star" src="./images/star-${starsArray[3]}.svg">
              <img class="cardProduct__star" src="./images/star-${starsArray[4]}.svg">
          </div>
          <p class="cardProduct__price"> $${price} </p>
          
      </div>
    </div>
  `;


  if(type === 'list'){

    cardProduct.appendChild(deleteProduct);
    deleteProduct.addEventListener('click', () => {

      modalDeleteProduct.classList.remove("hidden");

      const cancelbtn =modalDeleteProduct.querySelector(".cancel-delete-btn");
      const btnDelete =modalDeleteProduct.querySelector(".delete-product-btn");

      btnDelete.addEventListener('click', () => {

        onDeleteProduct(currentListId, id);
        modalDeleteProduct.classList.add("hidden");
        renderProductsList();
      });

      cancelbtn.addEventListener('click', ()=>{

        modalDeleteProduct.classList.add("hidden");
      })
      
      
      
    })
  }
 
  
  productsContainer.appendChild(cardProduct);
}


renderProductsList();
