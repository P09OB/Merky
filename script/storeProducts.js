const listBtn = document.querySelector('.list-btn-nav');
const categoriesContainer = document.querySelector('.categoriesContainer');

const params = new URLSearchParams(location.search)
const currentList = params.get('listId');

listBtn.addEventListener('click', () => window.location = './list.html?screen=lists')

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
          <p class="cardProduct__price"> $${price} </p>
          <button class="cardProduct--addLink reset-btn add-product-btn">
              <img class="img-add-product" src="./images/lista2.svg"></img>
          </button>
      </div>
    </div>
  `;
  const btnAddProduct =shopCardProduct.querySelector('.add-product-btn');
  btnAddProduct.addEventListener('click', (e) => {
    e.preventDefault();
    //verifica que el producto no haya sido añadido
    if(btnAddProduct.classList.contains("product-added")){

      showToast("producto ya ha sido añadido");
    }
    else{

    console.log(title);
    btnAddProduct.classList.add("product-added"); 
    onAddProduct(currentList,id );
    showToast("producto añadido");
      btnAddProduct.querySelector(".img-add-product").setAttribute("src","./images/tick.svg");

      
    }
     
  });
  categoriesContainer.appendChild(shopCardProduct); 
}



products.forEach(p => {
  renderShopProduct(p); 
})
