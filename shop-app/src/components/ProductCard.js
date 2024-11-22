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
                width: "360px",
                height: "420px",
                backgroundSize: "cover"
            }}
            className="cardImage"
        >
            <button 
                onClick={(e) => {
                    e.stopPropagation(); // Prevent event bubbling
                    addAction(formCartProduct(product));
                }} 
                className="addToCart"
            >
                Add to cart
            </button>
        </div>
        <p>{product.name}</p>
        </div>
    );
}



const mapDispatchToProps = {
    addAction: createAddAction
}

export default connect(null, mapDispatchToProps)(Product);