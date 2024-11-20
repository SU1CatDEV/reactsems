import { useState } from "react";
import { addAction } from "../store/products/actions";
import { connect } from "react-redux";

const mapDispatchToProps = {
    addAction: addAction
};

function AddProduct({ addAction }) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [desc, setDesc] = useState('');
    const [avail, setAvail] = useState(true);
    const [message, setMessage] = useState(''); // State for the success message

    const handleAddProduct = () => {
        addAction(name, price, desc, avail);
        setMessage('Product added successfully!'); // Set the message
        setTimeout(() => setMessage(''), 3000); // Clear the message after 3 seconds
    };

    return (
        <div>
            <h2>New product</h2>
            <label htmlFor="name">Product name</label>
            <input
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br />
            <label htmlFor="price">Product price</label>
            <input
                id="price"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <br />
            <label htmlFor="desc">Product description</label>
            <input
                id="desc"
                name="desc"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
            />
            <br />
            <label htmlFor="available">Product available?</label>
            <input
                id="available"
                type="checkbox"
                name="available"
                checked={avail}
                onChange={(e) => setAvail(e.target.checked)}
            />
            <br />
            <button onClick={handleAddProduct}>Add product</button>
            {message && <p style={{ color: "green" }}>{message}</p>}
        </div>
    );
}

export default connect(null, mapDispatchToProps)(AddProduct);
