import './bottol.css'
const Bottol = ({bottol, handleAddtocart}) => {
     const {name,price,img } = bottol || {};
    return (
        <div className="bottol-container">
            <h2>Bottol:{name}</h2>
            <p>Price:${price}</p>
            <div className="bottol img"> 
             <img src={img} alt="" />
            </div>
              <div>  
              <button onClick={() =>handleAddtocart(bottol)}>Purches</button>
              </div>
        </div>
    );
};

export default Bottol;