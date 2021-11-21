//Check if localStorage element already exist in this html
if (!localStorage.getItem('listArray')) {
  localStorage.setItem('listArray', JSON.stringify([]));
}

// get localStorage list array
const onGetListArray = () => {
  return JSON.parse(localStorage.getItem('listArray'));
}

// Add list to array of list 
const onAddList = (name) => {

  const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
  const d = new Date();
  const day =d.getDate();
  const month = months[d.getMonth()];

  const newItem = {
    id: Math.random().toString(),
    name: name,
    date: day +" "+month,
    products: [],
  }
  localStorage.setItem('listArray', JSON.stringify([...JSON.parse(localStorage.getItem('listArray')), newItem]));
}

const onDuplicateList = (id) => {

  
  const mylist = comunitylists.find((list) => {
    return list.id == id 
  
  });

  const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
  const d = new Date();
  const day =d.getDate();
  const month = months[d.getMonth()];

  mylist.id=Math.random().toString();
  mylist.date=day +" "+month,

  localStorage.setItem('listArray', JSON.stringify([...JSON.parse(localStorage.getItem('listArray')), mylist]));
}


//Add a product to a given list
const onAddProduct = (listId, newProduct) => {
  const listCopy = onGetListArray();
  const currentListIndex = listCopy.findIndex(list => list.id === listId);
  if (currentListIndex === -1) return;
  const { products } = listCopy[currentListIndex];
  products.push(newProduct);
  localStorage.setItem('listArray', JSON.stringify(listCopy));
}

//delete product from given list
const onDeleteProduct = (listId, productId) => {
  const listCopy = onGetListArray();
  const currentListIndex = listCopy.findIndex(list => list.id === listId);
  const newList = listCopy[currentListIndex].products.filter(product => product!== productId);
  listCopy[currentListIndex].products=newList;

  if (currentListIndex === -1) return;
 
  localStorage.setItem('listArray', JSON.stringify(listCopy));
  
  
}

// Get a single list according to nav link
const onGetSingleList = (id, isCommunity = false, communityLists = null) => {

  if (isCommunity) {
    console.log(id, isCommunity, communityLists);
    return communityLists.find(list => list.id === id);
  }
  return onGetListArray().find(list => list.id === id);
}

//get the list of products according to a given id list array
const getProductsFromIdList = (list) => {
  return products.filter(({ id }) => list.includes(id));
}