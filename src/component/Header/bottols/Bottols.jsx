import { useState } from "react";
import { useEffect } from "react";
import Bottol from '../../bottol/Bottol'
import './bottols.css'
import { addTols, getStoredCard, removeFormLs } from "../../utlites/localstroge";
import Cart from "../../cart/Cart";
const Bottols = () => {

    const [bottols,setbottols]= useState([]);
    const [cart,setcart] = useState([]);
    useEffect(() => {
        fetch('bottols.json')
        .then(res => res.json())
        .then(data => setbottols(data))
    },[])

    useEffect(() => {
   if(bottols.length){
    const getcard = getStoredCard();
    console.log(getcard,bottols);

   

   const savedcart = [];
   for(const id of getcard){
    console.log(id);
    const bottol = bottols.find(bottol => bottol.id === id);
    if(bottol){
        savedcart.push(bottol)
    }
}
    console.log('save card', savedcart)
    setcart(savedcart)
}


    },[bottols]) 

       const handleAddtocart = bottol =>{
        const newcart = [...cart,bottol];
        setcart(newcart);
        addTols(bottol.id);

       }


       const handleremoveFromCart = id =>{

        const remainingcart = cart.filter(bottol => bottol.id !== id);
        setcart(remainingcart)
        removeFormLs(id);
       }


    return (
        <div >
            <h2>Bottols Available:{bottols.length}</h2>
        <Cart cart={cart} handleremoveFromCart={handleremoveFromCart}></Cart>
     <div className="bottols-container"> 
      {
        bottols.map(bottol => <Bottol handleAddtocart={handleAddtocart} 
        key={bottol.id}   bottol={bottol}></Bottol>)

     }
     
     
      </div>
     
     </div>
    );
};

export default Bottols;