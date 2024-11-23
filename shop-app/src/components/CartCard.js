import "./ProductCard.css"
import { connect } from "react-redux";
import { createRemoveAction, createUpdateAction } from "../store/cart/actions";

function CartCard({ product, removeFromCart, updateAction }) {

    function handleQuantityChange(e) {
        const value = e.target.value === "" ? 0 : parseInt(e.target.value, 10);
        updateAction(product.id, value);
    }

    return ( 
        <>
        <div
            style={{
                backgroundImage: `url(${require("../images/" + product.img)})`,
                width: "262px",
                height: "306px",
                backgroundSize: "cover"
            }}
        >
        </div>
        <p>{product.name}</p>
        <input value={product.quantity} onChange={handleQuantityChange}/>
        <button onClick={()=> removeFromCart(product.id)}>x</button>
        </>
    );
}

const mapDispatchToProps = {
    removeFromCart: createRemoveAction,
    updateAction: createUpdateAction
}

export default connect(null, mapDispatchToProps)(CartCard);