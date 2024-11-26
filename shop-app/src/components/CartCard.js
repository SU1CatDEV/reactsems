import "./ProductCard.css"
import { connect } from "react-redux";
import { createRemoveAction, createUpdateAction } from "../store/cart/actions";
import './CartCard.css'

function CartCard({ product, removeFromCart, updateAction }) {

    function handleQuantityChange(e) {
        const value = e.target.value === "" ? 0 : parseInt(e.target.value, 10);
        updateAction(product.id, value);
    }

    return ( 
        <div className="d-flex cart-card">
            <div
                style={{
                    backgroundImage: `url(${require("../images/" + product.img)})`,
                    width: "262px",
                    height: "306px",
                    backgroundSize: "cover"
                }}
                className="flex-shrink-0"
            >
            </div>
            <div className="cart-info flex-grow-1 d-flex flex-column">
                <h4>{product.name.toUpperCase()}</h4>
                <span>Price: <span className="hot-pink">${product.price}</span></span>
                <span>Color: {product.color}</span>
                <span>Size: {product.size}</span>
                <span>Quantity: <input className="small-input" value={product.quantity} onChange={handleQuantityChange}/></span>
                <button className="btn btn-blank delete-icon" onClick={()=> removeFromCart(product.id)}>x</button>
            </div>
            
        </div>
    );
}

const mapDispatchToProps = {
    removeFromCart: createRemoveAction,
    updateAction: createUpdateAction
}

export default connect(null, mapDispatchToProps)(CartCard);