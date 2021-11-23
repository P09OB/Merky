const listTitle = document.querySelector('.statusBar__nameSection');
const productsResult = document.querySelector('.picked-up');
const params = new URLSearchParams(location.search)
const currentListId = params.get('listId');

const completeRouteBtn = document.querySelector('.complete-route');

completeRouteBtn.addEventListener('click', () => window.location = './list.html'); 

const list = onGetSingleList(currentListId); 
listTitle.innerText = list.name; 
productsResult.innerText = `${list.products.length}/${list.products.length}`
console.log(list);