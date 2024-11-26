import "./Footer.css"


function Footer() {
    return ( 
        <>
            <div 
                className="image-background"
                style={{
                    backgroundImage: `url(${require("../images/photo-subscribe.png")})`
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-6 d-flex flex-column align-items-center justify-content-center text-center">
                            <img src={require("../images/testimonial.png")} alt="testimonial" className="testimonial-img"/>
                            <p className="testimonial-text">“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum“</p>
                        </div>
                        <div className="col-6 d-flex flex-column align-items-center justify-content-center text-center">
                            <span className="subscribe-heading">SUBSCRIBE</span>
                            <span className="subscribe-subtext">FOR OUR NEWLETTER AND PROMOTION</span>

                            <div className="d-flex align-items-center justify-content-center">
                                <input type="email" className="footer-email" placeholder="Enter Your Email"/>
                                <button className="btn btn-small btn-primary footer-button">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-dark">
                <div className="container d-flex justify-content-between">
                    <div className="copyright d-flex align-items-center">© 2021  Brand  All Rights Reserved.</div>
                    <div className="socials">
                        <button className="btn btn-social">
                            <img src={require("../images/facebook.png")} alt="facebook"/>
                        </button>
                        <button className="btn btn-social-pink">
                            <img src={require("../images/instagram.png")} alt="instagram"/>
                        </button>
                        <button className="btn btn-social">
                            <img src={require("../images/pinterest.png")} alt="pinterest"/>
                        </button>
                        <button className="btn btn-social">
                            <img src={require("../images/twitter.png")} alt="twitter"/>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;