import { connect } from "react-redux";
import Product from "../ProductCard";
import { Link } from "react-router-dom";
import "./Index.css"
import Features from "../Features";

function Index({products}) {
    return ( 
        <>

        <header className="index-header">
            <div className="container">
                <div className="row">
                    <div 
                        className="col-6"
                        style={{
                            backgroundImage: `url(${require("../../images/coat-guy-large.png")})`,
                            height: "100vh",
                            backgroundPosition: "center"
                        }}
                    >
                    </div>
                    <div className="col-6 d-flex align-items-center">
                        <div className="left-pink-border">
                            <h1>THE BRAND</h1>
                            <h2>OF LUXERIOUS <span className="hot-pink">FASHION</span></h2>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        
        <div className="container text-center">

            <div className="row">
                <div 
                    className="col-4 d-flex flex-column justify-content-center align-items-center"
                >
                    <div 
                        className="product-link-block"
                        style={{
                            backgroundImage: `url(${require("../../images/for-women.png")})`
                        }}
                    >
                        <Link to="/catalogue/women/hot_deals">
                            <div className="overlay">
                                <span className="category2-span">30% OFF</span>
                                <h3 className="hot-pink">FOR WOMEN</h3>
                            </div>
                        </Link>
                    </div>
                </div>
                <div 
                    className="col-4 d-flex flex-column justify-content-center align-items-center"   
                >
                    <div 
                        className="product-link-block"
                        style={{
                            backgroundImage: `url(${require("../../images/for-men.png")})`
                        }} 
                    >
                        <Link to="/catalogue/men/hot_deals">
                            <div className="overlay">
                                <span className="category2-span">HOT DEALS</span>
                                <h3 className="hot-pink">FOR MEN</h3>
                            </div>
                        </Link>
                    </div>
                </div>
                <div 
                    className="col-4 d-flex flex-column justify-content-center align-items-center"
                >
                    <div 
                        className="product-link-block"
                        style={{
                            backgroundImage: `url(${require("../../images/for-kids.png")})`
                        }}
                    >
                        <Link to="/catalogue/kids/new_arrivals">
                            <div className="overlay">
                                <span className="category2-span">NEW ARRIVALS</span>
                                <h3 className="hot-pink">FOR KIDS</h3>
                            </div>
                        </Link>
                    </div>
                </div>
                <div 
                    className="col-12 accessories-link-block d-flex flex-column justify-content-center align-items-center"
                >
                    <div 
                        className="product-link-block"
                        style={{
                            backgroundImage: `url(${require("../../images/accesories.png")})`
                        }}
                    >
                        <Link to="/catalogue/all/accessories">
                            <div className="overlay">
                                <span className="category2-span">LUXERIOUS & TRENDY</span>
                                <h3 className="hot-pink">ACCESORIES</h3>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="products-display row">
                <h1>Featured products</h1>
                <p>Shop for items based on what we featured in this week</p>
                {products.slice(0, 6).map((product, key) => (
                    <div className="col-4" key={key}>
                    <Product product={product}/>
                    </div>
                ))}
                <Link to="/products"><button className="btn btn-secondary browse-button">Browse All Products</button></Link>

            </div>
        </div>
        
        <Features/>
        </>
    );
}

const mapStateToProps = state => ({
    products: state.products,
});

export default connect(mapStateToProps)(Index);