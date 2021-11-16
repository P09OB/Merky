const detailImg = document.querySelector('.product-detail__img');
const detailHeader = document.querySelector('.product-detail__title');
const detailTitle =  detailHeader.querySelector('h2');
const detailPrice =  detailHeader.querySelector('span');
const detailDescription =  document.querySelector('.product-detail__description');

const params = new URLSearchParams(location.search)
const currentProductId = params.get('id');

const currentProductData = products.find( p => p.id === parseInt(currentProductId)); 
if (!currentProductData) window.location = './notFound.html';
console.log(currentProductData);

detailImg.setAttribute('src', currentProductData.img)
detailTitle.innerText = currentProductData.title
detailPrice.innerText = `$${currentProductData.price}`
detailDescription.innerText = currentProductData.description; 

console.log(detailPrice);