import { useParams } from "react-router-dom";
import './Header.css'

function Header({title, useBreadcrumbs, topCrumb, categoryCrumb}) {
    const {toplvl, category2} = useParams();

    return ( 
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h2 className="hot-pink">{title.toUpperCase()}</h2>
                    </div>
                    <div className="col-6 text-end d-flex flex-column justify-content-center">
                        <span>
                            HOME
                            {(toplvl || topCrumb) 
                                ? 
                                ( (category2 || categoryCrumb)
                                    ? 
                                    ( <span> / {(useBreadcrumbs ? toplvl : topCrumb).toUpperCase()} / <span className="hot-pink">{(useBreadcrumbs ? category2.replaceAll("_", " ").replaceAll(" n ", " & ") : categoryCrumb).toUpperCase()}</span></span> )
                                    : 
                                    ( <span> / <span className="hot-pink">${(useBreadcrumbs ? category2.replaceAll("_", " ").replaceAll(" n ", " & ") : categoryCrumb).toUpperCase()}</span></span> ) 
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