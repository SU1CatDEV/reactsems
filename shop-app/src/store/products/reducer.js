const initialState = [
    {
        id: 1,
        name: "Ellery x M'O capsule",
        desc: "something something idk",
        price: 35,
        colors: ["Red", "White", "Blue"],
        sizes: ["XS", "S", "M", "L"],
        categories: ["Shirts"],
        special: ["New Arrivals"],
        topType: "Women", // Women, Men or Kids (aka the first parameter in the URL)
        brand: "Moda Operandi",
        designer: "Kym Ellery",
        img: "ellery-mo.png"
    }
]

export const productsReducer = (state = initialState, action) => {

    switch (action.type) { // no actions but still must have to get state into store
    default:
    return state
    }
}