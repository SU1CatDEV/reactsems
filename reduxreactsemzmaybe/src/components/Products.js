import { deleteAction } from "../store/products/actions";
import { connect } from "react-redux";

const mapStateToProps = state => ({
    products: state.products.products, // i'll get the flamethrower.
});

const mapDispatchToProps = {
    deleteAction: deleteAction
}
    

function Products({products, deleteAction}) {    
    console.log(products)
    return ( 
        <div>
            <h2>Products</h2>
            {products.map((val, key) => (
                <div key={key}>
                {val.name} thb{val.price} <br/>
                {val.description} <br/>
                {val.available ? "Available" : "Out of stock"} <br/>
                <button onClick={() => deleteAction(val.id)}>Delete</button> <br/><br/>
                </div>
            ))}
            
        </div>
        
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);