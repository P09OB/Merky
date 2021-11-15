const listContainer = document.querySelector('.lists-container');
const createListContainer = document.querySelector('.create-list-container');
const newProduct = document.querySelector('.new-product');
const createList = document.querySelector('.create-list');
const createListBtn = document.querySelector('.create-list-btn');
const listNameInput = document.querySelector('.list-name');
console.log(onGetListArray());

const handleCreateLIst = ({title, id}) => {

  const card = document.createElement('a');
  card.classList.add('card');
  card.setAttribute('href', `./myProducts.html?id=${id}`)
  card.innerHTML = `
    <div class="card__list">
        <span for="list">${title}</span>
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
  onAddList(name)
  // onAddProduct('0.5223808475367915', {name: 'soka'}); 
  
  renderListArray(); 
  listNameInput.value = '';  
  createListContainer.classList.add('hidden')


})

const renderListArray = () => {
  listContainer.innerHTML = ''; 
  onGetListArray().forEach(element => {
    handleCreateLIst(element); 
  });
}

renderListArray(); 