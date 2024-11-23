import { useCallback } from "react";
import CartCard from "../CartCard";
import { connect } from "react-redux";
import { createClearAction } from "../../store/cart/actions";

function Cart({cart, clearAction}) {

    const calculateTotal = useCallback(() => {
        let total = 0;

        cart.forEach(product => {
            total += product.price * parseInt(product.quantity)
        });

        return total
    }, [cart])
    

    return ( 
        <div>
            {cart.map((product, key) => (
                <div key={key}>
                    <CartCard product={product}/>
                    {console.log(product)}
                </div>
            ))}
        {calculateTotal()}
        <button onClick={clearAction}>Clear cart</button>
        </div>
    );
}

const mapStateToProps = state => ({
    cart: state.cart.products,
});

const mapDispatchToProps = {
    clearAction: createClearAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);