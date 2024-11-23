import { useParams } from "react-router-dom";
import './Header.css'

function Header({title}) {
    const {toplvl, category2} = useParams();

    return ( 
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h2 className="hot-pink">{title}</h2>
                    </div>
                    <div className="col-6 text-end d-flex flex-column justify-content-center">
                        <span>
                            HOME 
                            {toplvl 
                                ? 
                                (category2 
                                    ? 
                                    ( 
                                        <span>
                                            / {toplvl.toUpperCase()} / <span className="hot-pink">{category2.toUpperCase()}</span>
                                        </span>
                                        
                                    )
                                    : 
                                    (
                                        <span>
                                            / <span className="hot-pink">${category2.toUpperCase()}</span>
                                        </span> 
                                    ) 
                                )
                                : 
                            ""}
                        </span>
                    </div>
                </div>
            </div>
        </header>
     );
}

export default Header;