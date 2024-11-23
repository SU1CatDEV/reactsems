import { connect } from "react-redux";
import Product from "../ProductCard";
import { Link } from "react-router-dom";

function Index({products}) {

    function filterArrays(filters, arrayOfArrays) {
        return arrayOfArrays.filter(innerArray =>
            filters.every(filter => innerArray.includes(filter))
        );
    }
    
    // Example usage
    const filters = [];
    const arrayOfArrays = [
        ['a', 'b', 'c'],
        ['a', 'c'],
        ['b', 'c'],
        ['a', 'b']
    ];
    
    const result = filterArrays(filters, arrayOfArrays);
    
    console.log(result);
    

    return ( 
        <>
        
        <div className="container text-center">
            <div className="p-6 row ">
                <h1>Featured products</h1>
                <p>Shop for items based on what we featured in this week</p>
                {products.slice(0, 6).map((product, key) => (
                    <div className="col-4" key={key}>
                    <Product product={product}/>
                    </div>
                ))}
                
            </div>
            <Link to="/products"><button>Browse All Products</button></Link>
        </div>
        
        </>
    );
}

const mapStateToProps = state => ({
    products: state.products,
});

export default connect(mapStateToProps)(Index);