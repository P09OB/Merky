const categoriesContainer = document.querySelector('.categoriesContainer');

const renderShopProduct = ({title, description, img, price, id}) => {
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
              <img class="cardProduct__star" src="./images/star.svg">
              <img class="cardProduct__star" src="./images/star.svg">
              <img class="cardProduct__star" src="./images/star.svg">
              <img class="cardProduct__star" src="./images/star.svg">
              <img class="cardProduct__star" src="./images/star.svg">
          </div>
          <p class="cardProduct__price"> ${price} </p>
          <div class="cardProduct--addLink">
              <img src="./images/lista2.svg"></img>
          </div>
      </div>
    </div>
  `;
  categoriesContainer.appendChild(shopCardProduct); 
}

products.forEach(p => {
  renderShopProduct(p); 
})
