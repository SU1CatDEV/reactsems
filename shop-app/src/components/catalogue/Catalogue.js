import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { useState, useEffect, useCallback, useMemo } from "react";
import ProductCard from "../ProductCard";
import Header from "../Header";
import FilterMenu from "./Filter";
import './Dropdown.css'

function Catalogue({products}) {
    const {toplvl, category2} = useParams();
    const [filteredProducts, setFilteredProducts] = useState(
        !category2
        ? products
        : products.filter(product => (toplvl ? product.topType.toLowerCase() === toplvl.toLowerCase : 1) && product.categories.some(category => category.toLowerCase() === category2.toLowerCase()))
    );
    const [slicedProducts, setSlicedProducts] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState(category2 ? {"category": category2.toLowerCase()} : {});
    const [filters, setFilters] = useState([]) 
    const [priceFilters, setPriceFilters] = useState([])

    const productsPerPage = 2;
    const [page, setPage] = useState(1);

    const categories = {
        accordionName: "Category",
        typeName: "category",
        filters: [
            "Accessories",
            "Bags",
            "Denim",
            "Hoodies & Sweatshirts",
            "Jackets & Coats",
            "Polos",
            "Shirts",
            "Shoes",
            "Sweaters & Knits",
            "T-Shirts",
            "Tanks"
        ]
    };

    const brands = {
        accordionName: "Brands",
        typeName: "brand",
        filters: [...new Set(products.map(product => product.brand))]
    };

    const designers = {
        accordionName: "Designers",
        typeName: "designer",
        filters: [...new Set(products.map(product => product.designer))]
    };

    const specials = [
        "Hot Deal",
        "New Arrivals",
        "Trending Now"
    ]

    const sizes = ["XS", "S", "M", "L", "XL"]

    const prices = [
        [0, 20],
        [20, 50],
        [50, 100],
        [100, -1]
    ] // да, да, я знаю, лучше слайдером, но так по мне лучше работает с UI (а если по простому, это проще реализовать.)

    function filterByCategory(category, type){
        console.log(type)
        setSelectedCategories({...selectedCategories, [type]: category.toLowerCase()});
    }

    function handleCheckboxChange(e) {
        if (!e.target.checked){
            setFilters(filters.filter(filter => filter !== e.target.value.toLowerCase()))
        } else {
            setFilters([...filters, e.target.value.toLowerCase()]);
        }
    }

    function handleRangeChange(e) {
        if (!e.target.checked){
            setPriceFilters(priceFilters.filter(filter => filter !== e.target.value))
        } else {
            setPriceFilters([...priceFilters, e.target.value]);
        }
    }

    const sliceFromPage = useCallback((pageNo) => {
        console.log("redone!");
        return filteredProducts.slice((pageNo-1)*productsPerPage, (pageNo)*productsPerPage)
    }, [filteredProducts])

    useEffect(() => {
        console.log("reset!")
        setSlicedProducts(sliceFromPage(page))
    }, [page, sliceFromPage])

    useEffect(() => {
            setFilteredProducts(products
                .filter(product => {
                        if (filters.length > 0 || Object.keys(selectedCategories).length > 0) {
                            return [...filters, ...Object.values(selectedCategories)]
                            .every(filter => 
                                [
                                ...product.special
                                .concat(product.sizes)
                                .concat(product.categories),
                                product.brand,
                                product.designer
                                ].map(parameter => parameter.toLowerCase())
                                .includes(filter)
                            )
                        }
                        else {
                            return true
                        }
                    }
                )
                .filter(product => {
                    console.log(priceFilters)
                    if (priceFilters.length > 0) {
                        return priceFilters.some(filter => {
                            const [min, max] = filter.split(":").map(Number);
                            const price = product.price;
                
                            if (min === 0) {
                                return price < max;
                            }
                            if (max === -1) {
                                return price > min;
                            }
                            return price >= min && price <= max;
                        });
                    }
                    return true
                })
            );
    }, [filters, products, selectedCategories, priceFilters])

    const paginationRange = useMemo(() => {
        var len = Math.ceil(filteredProducts.length/productsPerPage);
        var a = new Array(len);
        
        for (let i = 0; i < len; i++) a[i] = 1 + i;
        return a;
    }, [filteredProducts])

    useEffect(() => {
        console.log(selectedCategories)
    }, [selectedCategories])
    
    return (
        <div>
            <Header title={category2?category2.toUpperCase():"Catalogue"}/>
            <div className="menu container">
                <div className="row">
                    <div className="col-3">
                        <FilterMenu filterTypes={[categories, brands, designers]} onFilterChange={(category, type) => filterByCategory(category, type)}/>
                    </div>
                    <div className="col-6 d-flex justify-content-around">
                        <div>
                            <div className="dropdown">
                                <span>TRENDING NOW</span>
                                <div className="dropdown-content">
                                    {specials.map((special, key) => (
                                        <div key={key}>
                                            <input type="checkbox" id={"special"+key} value={special} onChange={handleCheckboxChange}/>
                                            <label htmlFor={"special"+key}>{special}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                        </div>
                        <div className="dropdown">
                            <span>SIZE</span>
                            <div className="dropdown-content">
                                {sizes.map((size, key) => (
                                    <div key={key}>
                                        <input type="checkbox" id={"size"+key} value={size} onChange={handleCheckboxChange}/>
                                        <label htmlFor={"size"+key}>{size}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="dropdown">
                            <span>PRICE</span>
                            <div className="dropdown-content">
                                {prices.map(([min, max], key) => (
                                    <div key={key}>
                                        <input type="checkbox" id={"price"+key} value={min + ":" + max} onChange={handleRangeChange}/>
                                        <label htmlFor={"price"+key}>{max === -1 ? `Более ${min}` : (min === 0 ? `Менее ${max}` : `От ${min} до ${max}`)}</label>
                                    </div>
                                ))}
                            </div>
                            
                        </div>
                    </div>
                </div>
                
                
            </div>

            <div className="container">
                <div className="row">
                    {filteredProducts.length === 0 ? 
                        <h2>Sorry, no products with those filters found.</h2> 
                        :
                        slicedProducts.map((product, key) => (
                            <div className="col-4" key={key}>
                                <ProductCard product={product}/>
                            </div>
                    ))}
                </div>
                    
            </div>

            <div className="pagination" style={{
                display: (filteredProducts.length > 0 ? "block" : "none")
            }}>
                <button onClick={() => setPage(page-1)} disabled={page === 1}> &lt; </button>
                {paginationRange.length <= 7 ? (
                    paginationRange.map((num, key) => (
                        <button onClick={() => setPage(num)} key={key}>
                            {num}
                        </button>
                    ))
                ) : (
                    <>
                        {[1, 2, 3, 4, 5, 6].map((num, key) => (
                            <button onClick={() => setPage(num)} key={key}>
                                {num}
                            </button>
                        ))}
                        <span>...</span>
                        <button onClick={() => setPage(paginationRange[paginationRange.length-1])}>{paginationRange[paginationRange.length-1]}</button>
                    </>
                )}
                <button onClick={() => setPage(page+1)} disabled={page === paginationRange[paginationRange.length-1]}> &gt; </button>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    products: state.products,
});

export default connect(mapStateToProps)(Catalogue);

