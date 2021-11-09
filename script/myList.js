const listContainer = document.querySelector('.lists-container');
const createListContainer = document.querySelector('.create-list-container');
const newProduct = document.querySelector('.new-product');
const createList = document.querySelector('.create-list');
const createListBtn = document.querySelector('.create-list-btn');
const listNameInput = document.querySelector('.list-name');

const handleCreateLIst = ({name}) => {
  const card = document.createElement('a');
  card.classList.add('card');
  card.setAttribute('href', './myProducts.html')
  card.innerHTML = `
    <div class="card__list">
        <span for="list">${name}</span>
        <p>
            Nov.24
        </p>
    </div>
  </a>
  `;
  listContainer.appendChild(card); 
}
createList.addEventListener('click', (e)=>{
  e.stopPropagation();
})
newProduct.addEventListener('click', ()=> createListContainer.classList.remove('hidden')); 
createListContainer.addEventListener('click', ()=> createListContainer.classList.add('hidden')); 

createListBtn.addEventListener('click', () => {
  const name = listNameInput.value; 
  handleCreateLIst({name: name}); 
  listNameInput.value = '';  
  createListContainer.classList.add('hidden')


})


handleCreateLIst({name: 'lista de mercado 1'}); 
