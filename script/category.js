// 
const cards = document.querySelectorAll('.cardImg');
const params = new URLSearchParams(location.search)
const currentList = params.get('listId');

cards.forEach(c => c.setAttribute('href', `./bebidas.html?listId=${currentList}`))