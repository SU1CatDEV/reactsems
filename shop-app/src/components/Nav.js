import { Link } from "react-router-dom";
import "./Nav.css"

function Nav() {
    return ( 
        <div className="nav-wrap">
            <div className="container">
            <div className="nav d-flex justify-content-between">
                <div className="left">
                <Link to="/"><img src={require("../images/logo.png")} alt="logo"></img></Link>
                <img src={require("../images/search.png")} alt="search"></img>
                </div>
                <div className="right">
                <div className="dropdown" style={{zIndex: 99}}>
                    <img src={require("../images/hamburger.png")} alt="hamburger menu"></img>
                    <div className="dropdown-content menu-dropdown">
                    <p style={{fontWeight: "bold"}}>MENU</p>
                    <Link className="hot-pink margined-link" to="/catalogue/men">MEN</Link>
                    <ul className="menu-ul">
                        <li><Link to="/catalogue/men/accessories" >Accessories</Link></li>
                        <li><Link to="/catalogue/men/bags" >Bags</Link></li>
                        <li><Link to="/catalogue/men/denim" >Denim</Link></li>
                        <li><Link to="/catalogue/men/t-shirts" >T-Shirts</Link></li>
                    </ul>
                    <Link className="hot-pink margined-link" to="/catalogue/women">WOMEN</Link>
                    <ul className="menu-ul">
                        <li><Link to="/catalogue/women/accessories" >Accessories</Link></li>
                        <li><Link to="/catalogue/women/jackets_n_coats" >Jackets & Coats</Link></li>
                        <li><Link to="/catalogue/women/polos" >polos</Link></li>
                        <li><Link to="/catalogue/women/t-shirts" >T-Shirts</Link></li>
                        <li><Link to="/catalogue/women/shirts" >Shirts</Link></li>
                    </ul>
                    <Link className="hot-pink margined-link" to="/catalogue/kids">KIDS</Link>
                    <ul className="menu-ul">
                        <li><Link to="/catalogue/kids/accessories" >Accessories</Link></li>
                        <li><Link to="/catalogue/kids/jackets_n_coats" >Jackets & Coats</Link></li>
                        <li><Link to="/catalogue/kids/polos" >polos</Link></li>
                        <li><Link to="/catalogue/kids/t-shirts" >T-Shirts</Link></li>
                        <li><Link to="/catalogue/kids/shirts" >Shirts</Link></li>
                        <li><Link to="/catalogue/kids/bags" >Bags</Link></li>
                    </ul>
                    </div>
                    <img src={require("../images/profile.png")} alt="profile"/>
                    <Link to="/cart"><img src={require("../images/cart.png")} alt="cart"/></Link>
                </div>

                </div>
            </div>
            </div>
        </div>
    );
}

export default Nav;