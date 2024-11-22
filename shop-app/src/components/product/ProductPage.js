import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { createAddAction } from "../../store/cart/actions";
import ProductCard from "../ProductCard";

function ProductPage({products, addAction}) {
    const {id} = useParams();
    const product = products.find(product => product.id === parseInt(id))
    const [selectedColor, setSelectedColor] = useState(product.colors[0])
    const [selectedSize, setSelectedSize] = useState(product.sizes[0])
    const [selectedQuantity, setSelectedQuantity] = useState(1)
    const [similarProducts, setSimilarProducts] = useState([])

    function formCartProduct(item) {
        var itemCopy = {...item}
        delete itemCopy.colors;
        delete itemCopy.sizes;
        itemCopy.color = selectedColor;
        itemCopy.size = selectedSize;
        itemCopy.quantity = selectedQuantity;
        return itemCopy;
    }

    useEffect(() => {
        function getSimilarProducts() {
            var similarProducts = products.filter(item => item.brand === product.brand && item.id !== parseInt(id))
            if (similarProducts.length > 3) {
                return [...similarProducts].sort(() => 0.5 - Math.random()).slice(0, 3);
            } else {
                return similarProducts;
            }
        }

        setSimilarProducts(getSimilarProducts());
    }, [products, product.brand, id])

    useEffect(() => {
        console.log(similarProducts)
    }, [similarProducts])

    // color, size, quantity (1-3)
    return ( 
        <>
            <h1>{product.name}</h1> 
            <select onChange={(e) => setSelectedColor(e.target.selectedOptions[0].value)}>
                {product.colors.map((color, key) => (
                    <option key={key} value={color}>{color}</option>
                ))}
            </select>
            <select onChange={(e) => setSelectedSize(e.target.selectedOptions[0].value)}>
                {product.sizes.map((size, key) => (
                    <option key={key} value={size}>{size}</option>
                ))}
            </select>
            <select onChange={(e) => setSelectedQuantity(e.target.selectedOptions[0].value)}>
                {[1, 2, 3].map((quantity, key) => (
                    <option key={key} value={quantity}>{quantity}</option>
                ))}
            </select>

            <button onClick={() => addAction(formCartProduct(product))}>Add to cart</button>

            { (similarProducts.length > 0) ? 
                similarProducts.map((item, key) => (
                    <div key={key}>
                        <ProductCard product={item}/>
                    </div>
                ))
                :
                <h2>No similar products found.</h2>
            }
        </>
        
    );
}

const mapStateToProps = (state) => ({
    products: state.products
})

const mapDispatchToProps = {
    addAction: createAddAction
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);