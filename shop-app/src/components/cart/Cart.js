import { useCallback } from "react";
import CartCard from "../CartCard";
import { connect } from "react-redux";

function Cart({cart}) {

    const calculateTotal = useCallback(() => {
        let total = 0;

        cart.forEach(product => {
            total += product.price * parseInt(product.quantity) // в макете не нарисованно как нужно применять скидки.
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
        </div>
    );
}

const mapStateToProps = state => ({
    cart: state.cart.products,
});

export default connect(mapStateToProps)(Cart);