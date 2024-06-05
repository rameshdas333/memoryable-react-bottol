import './Cart.css'
const Cart = ({cart,handleremoveFromCart}) => {
    return (
        <div>
            <h3>Cart:{cart.length}</h3>
 <div className='cart-container'>
  {cart.map(bottol =><div key={bottol.id}><img  src={bottol.img}></img>
  <button onClick={() => handleremoveFromCart(bottol.id)} >Remove</button></div> )}
  
  
  </div> 


    </div>
  
        
    );
};

export default Cart; 