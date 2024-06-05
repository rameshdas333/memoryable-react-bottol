const getStoredCard = () =>{
    const storedCardstring = localStorage.getItem('cart');
    if(storedCardstring){
        return JSON.parse(storedCardstring)
    }
    return [];
}
const saveCartTols = cart => {
    const cartstringified =JSON.stringify(cart);
    localStorage.setItem('cart',cartstringified);


}

const addTols = id =>{
    const cart = getStoredCard();
    cart.push(id);
    saveCartTols(cart)

}


const removeFormLs = id =>{
  const cart = getStoredCard();
  const remaining = cart.filter(idx => idx !== id);
  saveCartTols(remaining)
}
export{addTols,getStoredCard,removeFormLs}