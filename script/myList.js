const listContainer = document.querySelector('.lists-container');
const createListContainer = document.querySelector('.create-list-container');
const newProduct = document.querySelector('.new-product');
const createList = document.querySelector('.create-list');
const createListBtn = document.querySelector('.create-list-btn');
const listNameInput = document.querySelector('.list-name');
//Check if localStorage element already exist
if(!localStorage.getItem('listArray')){
  localStorage.setItem('listArray', JSON.stringify(['s'])); 
}

// get localStorage list array
const onGetListArray = () => {
  return JSON.parse(localStorage.getItem('listArray')); 
}

// Add item to list array
const onAddItem = (name) => {
  localStorage.setItem('listArray', JSON.stringify([...JSON.parse(localStorage.getItem('listArray')), name]));
}


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
  onAddItem(name)

  renderListArray(); 
  listNameInput.value = '';  
  createListContainer.classList.add('hidden')


})

const renderListArray = () => {
  listContainer.innerHTML = ''; 
  onGetListArray().forEach(element => {
    handleCreateLIst({name: element}); 
  });
}

renderListArray(); 