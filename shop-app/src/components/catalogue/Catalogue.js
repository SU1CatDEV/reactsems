import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Accordion.css"
import ProductCard from "../ProductCard";

function Catalogue({products}) {
    const {toplvl, category2} = useParams();
    const [filteredProducts, setFilteredProducts] = useState(
        !category2
        ? products
        : products.filter(product => (toplvl ? product.topType.toLowerCase() === toplvl.toLowerCase : 1) && product.categories.some(category => category.toLowerCase() === category2.toLowerCase()))
    );
    const [selectedCategories, setSelectedCategories] = useState(category2 ? {"category": category2.toLowerCase()} : {});
    const [filters, setFilters] = useState([]) 
    const [priceFilters, setPriceFilters] = useState([])
    const [currentSelected, setCurrentSelected] = useState(null);

    const categories = {
        accordionName: "Category",
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
        filters: [...new Set(products.map(product => product.brand))]
    };

    const designers = {
        accordionName: "Designers",
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

    useEffect(() => {
        console.log(products
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
            ))
        if (priceFilters.length > 0 || filters.length > 0 || Object.keys(selectedCategories).length > 0){
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
        }
    }, [filters, products, selectedCategories, priceFilters])

    const toggleAccordion = (id) => {
        setCurrentSelected(currentSelected === id ? null : id);
    };

    useEffect(() => {
        console.log(filteredProducts);
    }, [filteredProducts])

    return (
        <div>
            <div className="menu">
                <div className="accordion">
                    {[categories, brands, designers].map((arr, id) => (
                        <div key={id} className="accordion-item">
                            <div 
                                className="accordion-header"
                                onClick={() => toggleAccordion(id)}
                            >
                                {arr.accordionName}
                            </div>
                            <div
                                className={`accordion-content ${
                                    currentSelected === id ? 'active' : ''
                                }`}
                            >
                                <ul>
                                {arr.filters.map((category, index) => (
                                    <li key={index} value={category} onClick={() => filterByCategory(category)} >{category}</li>
                                ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div>
                    {specials.map((special, key) => (
                        <div key={key}>
                            <input type="checkbox" id={"special"+key} value={special} onChange={handleCheckboxChange}/>
                            <label htmlFor={"special"+key}>{special}</label>
                        </div>
                    ))}
                </div>
                <div>
                    {sizes.map((size, key) => (
                        <div key={key}>
                            <input type="checkbox" id={"size"+key} value={size} onChange={handleCheckboxChange}/>
                            <label htmlFor={"size"+key}>{size}</label>
                        </div>
                    ))}
                </div>
                <div>
                    {prices.map(([min, max], key) => (
                        <div key={key}>
                        <input type="checkbox" id={"price"+key} value={min + ":" + max} onChange={handleRangeChange}/>
                        <label htmlFor={"price"+key}>{max === -1 ? `Более ${min}` : (min === 0 ? `Менее ${max}` : `От ${min} до ${max}`)}</label>
                    </div>
                    ))}
                </div>
            </div>

            <div>
                    {filteredProducts.map((product, key) => (
                        <div key={key}>
                            <ProductCard product={product}/>
                        </div>
                    ))}
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    products: state.products,
});

export default connect(mapStateToProps)(Catalogue);

