import { connect } from "react-redux";
import { createAddAction } from "../store/cart/actions";
import "./ProductCard.css"
import { useNavigate } from "react-router-dom";

function Product({ product, addAction }) {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/product/${product.id}`);
    };

    function formCartProduct(item) {
        var itemCopy = {...item}
        var color = itemCopy.colors[0];
        var size = itemCopy.sizes[0];
        delete itemCopy.colors;
        delete itemCopy.sizes;
        itemCopy.color = color;
        itemCopy.size = size;
        itemCopy.quantity = 1;
        return itemCopy;
    } // ТЗ как это должно работать нету, поэтому делаю как я (как пользователь) бы предпологала.

    return ( 
        <div onClick={handleCardClick}>
        <div
            style={{
                backgroundImage: `url(${require("../images/" + product.img)})`,
                aspectRatio: "18/21",
                backgroundSize: "contain",
            }}
            className="cardImage"
        >
            <div className="layer d-flex justify-content-center align-items-center">
                <button 
                    onClick={(e) => {
                        e.stopPropagation();
                        addAction(formCartProduct(product));
                    }} 
                    className="addToCart btn btn-reversed"
                >
                    Add to cart
                </button>
            </div>
            
        </div>
        <div className="product-card-info text-start">
            <b className="product-title">{product.name.toUpperCase()}</b>
            <p>{product.desc}</p>
            <span className="hot-pink">${product.price}</span>
        </div>
        </div>
    );
}



const mapDispatchToProps = {
    addAction: createAddAction
}

export default connect(null, mapDispatchToProps)(Product);