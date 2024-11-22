import { connect } from "react-redux";
import Product from "../ProductCard";

function Index({products}) {
    return ( 
        <>
        <h1>aaaa!!</h1>
        {products.map((product, key) => (
            <div key={key}>
            <Product product={product}/>
            </div>
        ))}
        </>
    );
}

const mapStateToProps = state => ({
    products: state.products,
});

export default connect(mapStateToProps)(Index);