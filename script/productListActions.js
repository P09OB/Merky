//Check if localStorage element already exist in this html
if(!localStorage.getItem('listArray')){
  localStorage.setItem('listArray', JSON.stringify([])); 
}

// get localStorage list array
const onGetListArray = () => {
  return JSON.parse(localStorage.getItem('listArray')); 
}

// Add list to array of list 
const onAddList = (name) => {
  const newItem = {
    id: Math.random().toString(),
    title: name,
    products: [],
  }
  localStorage.setItem('listArray', JSON.stringify([...JSON.parse(localStorage.getItem('listArray')), newItem]));
}

//Add a product to a given list
const onAddProduct = (listId, newProduct) => {
  const listCopy = onGetListArray();
  const currentListIndex = listCopy.findIndex( list => list.id === listId);
  if(currentListIndex === -1) return;
  const {products} = listCopy[currentListIndex];
  products.push(newProduct);
  localStorage.setItem('listArray', JSON.stringify(listCopy));
}

// Get a single list according to nav link
const onGetSingleList = (id,isCommunity=false,communityLists=null) => {
  
  if(isCommunity){
    console.log(id,isCommunity,communityLists);
    return communityLists.find(list => list.id === id);
  }
  return onGetListArray().find( list => list.id === id);
}
