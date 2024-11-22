import "./ProductCard.css"

function CartCard({ product }) {
    return ( 
        <>
        <div
            style={{
                backgroundImage: `url(${require("../images/" + product.img)})`,
                width: "262px",
                height: "306px",
                backgroundSize: "cover"
            }}
        >
        </div>
        <p>{product.name}</p>
        </>
    );
}

export default CartCard;