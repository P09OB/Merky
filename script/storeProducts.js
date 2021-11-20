const categoriesContainer = document.querySelector('.categoriesContainer');

const params = new URLSearchParams(location.search)
const currentList = params.get('listId');

console.log(onGetSingleList(currentList));

const renderShopProduct = ({title, description, img, price, id, rating}) => {
  const starsArray = starsMath(rating); 
  const shopCardProduct = document.createElement('a');
  shopCardProduct.setAttribute('href', `./productDetail.html?id=${id}`)
  shopCardProduct.classList.add('cardProduct');
  shopCardProduct.innerHTML = `
    <div class="cardProduct__container">
      <div class="cardProduct__img">
          <img class="cardProduct__size" src="${img}">
      </div>
      <div class="cardProduct__info">
          <div class="cardProduct__title">
              <p class="cardProduct__name"> <strong> ${title} </strong></p>
              <p class="cardProduct__weight"> 350ml </p>
          </div>
          <div class="cardProduct__starContainer">
              <img class="cardProduct__star" src="./images/star-${starsArray[0]}.svg">
              <img class="cardProduct__star" src="./images/star-${starsArray[1]}.svg">
              <img class="cardProduct__star" src="./images/star-${starsArray[2]}.svg">
              <img class="cardProduct__star" src="./images/star-${starsArray[3]}.svg">
              <img class="cardProduct__star" src="./images/star-${starsArray[4]}.svg">
          </div>
          <p class="cardProduct__price"> ${price} </p>
          <button class="cardProduct--addLink reset-btn add-product-btn">
              <img src="./images/lista2.svg"></img>
          </button>
      </div>
    </div>
  `;
  shopCardProduct.querySelector('.add-product-btn').addEventListener('click', (e) => {
    e.preventDefault();
    console.log(title); 
    onAddProduct(currentList,id ); 
  });
  categoriesContainer.appendChild(shopCardProduct); 
}

products.forEach(p => {
  renderShopProduct(p); 
})
