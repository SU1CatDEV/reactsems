import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { createAddAction } from "../../store/cart/actions";
import ProductCard from "../ProductCard";
import Header from "../Header";
import './ProductPage.css'

function ProductPage({products, addAction}) {
    const {id} = useParams();
    const product = products.find(product => product.id === parseInt(id))
    const [selectedColor, setSelectedColor] = useState(null)
    const [selectedSize, setSelectedSize] = useState(null)
    const [selectedQuantity, setSelectedQuantity] = useState(null)
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

    console.log(product.topType)
    console.log(product.special[0])

    // color, size, quantity (1-3)
    return ( 
        <>
            <Header title={product.special[0]} useBreadcrumbs={false} topCrumb={product.topType} categoryCrumb={product.special[0]} ></Header>
            <div className="light-gray">
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="col-4">
                            <div
                                style={{
                                    backgroundImage: `url(${require("../../images/" + product.img)})`,
                                    aspectRatio: "18/21",
                                    backgroundSize: "contain",
                                }}
                                className="cardImage"
                            >
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="product-info d-flex justify-content-center align-items-center flex-column">
                    <span className="hot-pink">{product.topType.toUpperCase()} COLLECTION</span>
                    <div className="pink-divider"></div>
                    <h1>{product.name.toUpperCase()}</h1>
                    <p className="product-desc">{product.desc}</p>
                    <h2 className="hot-pink">$561</h2>
                    <div className="gray-divider"></div>

                    <div className="d-flex">
                        <select className="parameter-select" onChange={(e) => setSelectedColor(e.target.selectedOptions[0].value)}>
                        <option value="" disabled selected hidden>CHOOSE COLOR</option>
                            {product.colors.map((color, key) => (
                                <option key={key} value={color}>{color.toUpperCase()}</option>
                            ))}
                        </select>
                        <select className="parameter-select" onChange={(e) => setSelectedSize(e.target.selectedOptions[0].value)}>
                        <option value="" disabled selected hidden>CHOOSE SIZE</option>
                            {product.sizes.map((size, key) => (
                                <option key={key} value={size}>{size.toUpperCase()}</option>
                            ))}
                        </select>
                        <select className="parameter-select" onChange={(e) => setSelectedQuantity(e.target.selectedOptions[0].value)}>
                        <option value="" disabled selected hidden>QUANTITY</option>
                            {[1, 2, 3].map((quantity, key) => (
                                <option key={key} value={quantity}>{quantity}</option>
                            ))}
                        </select>
                    </div>

                    <button className="add-button btn btn-secondary" disabled={!selectedColor || !selectedQuantity || !selectedSize} onClick={() => addAction(formCartProduct(product))}>Add to cart</button>

                </div>
            </div>


            <div className="container similar-products">
                <div className="row">
                    { (similarProducts.length > 0) ? 
                        similarProducts.map((item, key) => (
                            <div className="col-4" key={key}>
                                <ProductCard product={item}/>
                            </div>
                        ))
                        :
                        <h2>No similar products found.</h2>
                    }
                </div>
            </div>
            
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