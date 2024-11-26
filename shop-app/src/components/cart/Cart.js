import { useCallback } from "react";
import CartCard from "../CartCard";
import { connect } from "react-redux";
import { createClearAction } from "../../store/cart/actions";
import { Link } from "react-router-dom";
import Header from "../Header";

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
            <Header useBreadcrumbs={false} title="SHOPPING CART"/>
            <div className="container">
                <div className="row cart-block">
                    <div className={`col-6 d-flex flex-column ${cart.length > 0 ? "justify-content-between" : "justify-content-start"}`}>
                        <div className="products">
                            {cart.length > 0 ? cart.map((product, key) => (
                                <div key={key}>
                                    <CartCard product={product}/>
                                    {console.log(product)}
                                </div>
                            )) : <h2>Your cart is empty.</h2>}
                        </div>

                        <div className="d-flex justify-content-between buttons-block">
                            <button className="btn btn-light" onClick={clearAction}>CLEAR CART</button>
                            <Link to="/products"><button className="btn btn-light">CONTINUE SHOPPING</button></Link>
                        </div>
                    </div>
                    <div className="col-2"></div>
                    <div className="col-4">
                        <div className="shipping-block">
                            <div className="shipping-adress d-flex flex-column">
                                <span>SHIPPING ADRESS</span>
                                <input placeholder="Bangladesh" name="country"></input>
                                <input placeholder="State" name="state"></input>
                                <input placeholder="Postcode / Zip" name="postcode"></input>
                            </div>
                            <button className="btn btn-light btn-small">GET QUOTE</button>
                        </div>

                        <div className="total-cost text-end">
                            <span className="sub-total">SUB TOTAL: {calculateTotal()}</span>
                            <h3>GRAND TOTAL: {calculateTotal()}</h3>
                            <div className="gray-divider"></div>

                            <button className="btn btn-primary btn-checkout">PROCEED TO CHECKOUT</button>
                        </div>
                    </div>
                </div>
                
            </div>
        
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