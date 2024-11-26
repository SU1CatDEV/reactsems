import { useState } from "react";
import "./Accordion.css"


function FilterMenu({filterTypes, onFilterChange}) {

    const [currentSelected, setCurrentSelected] = useState(null);

    const [filtersOpen, setFiltersOpen] = useState(false);

    function handleFilterToggle() {
        setFiltersOpen(!filtersOpen);
        if (filtersOpen) {
            setCurrentSelected(null);
        } else {
            setCurrentSelected(0);
        }
        
    }

    const toggleAccordion = (id) => {
        setCurrentSelected(currentSelected === id ? null : id);
    };

    function sendFilterData(newFilter, type) {
        onFilterChange(newFilter, type)
    }

    return ( 
        <div className="filterBlock accordion">
                    <div className="accordion-item">
                        <h4 className="filter-accordion-header" onClick={handleFilterToggle}>FILTERS</h4>

                        <div className={`accordion filter-accordion-content ${
                                            filtersOpen ? 'active' : ''
                                        }`}>
                            {filterTypes.map((arr, id) => (
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
                                            <li key={index} value={category} onClick={() => sendFilterData(category, arr.typeName)} >{category}</li>
                                        ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                            
                        </div>
                    </div>
                </div>
        
     );
}

export default FilterMenu;


