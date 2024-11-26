import "./Features.css"

function Features() {
    return ( 
        <div className="perk-block">
            <div className="container">
                <div className="row">
                    <div className="col-4 d-flex flex-column align-items-center justify-content-center text-center">
                        <img className="perk-icon" src={require("../images/delivery.png")} alt="delivery"/>
                        <h4 className="perk-title">Free Delivery</h4>
                        <p className="perk-text">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
                    </div>
                    <div className="col-4 d-flex flex-column align-items-center justify-content-center text-center">
                        <img className="perk-icon" src={require("../images/discounts.png")} alt="delivery"/>
                        <h4 className="perk-title">Sales & discounts</h4>
                        <p className="perk-text">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
                    </div>
                    <div className="col-4 d-flex flex-column align-items-center justify-content-center text-center">
                        <img className="perk-icon" src={require("../images/quality.png")} alt="delivery"/>
                        <h4 className="perk-title">Quality assurance</h4>
                        <p className="perk-text">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Features;