import { ADD_PRODUCT, DELETE_PRODUCT } from "./actions"

const initialState = {
    products: [
        {
            id: 1,
            name: "Milk",
            description: "It's Milk. What do you want from me?",
            price: 30,
            available: true
        },
        {
            id: 2,
            name: "Bread",
            description: "butterbrot",
            price: 20,
            available: true
        },
        {
            id: 3,
            name: "A Goddamn Porsche.",
            description: "What kind of store even is this?",
            price: 10000000,
            available: true
        },
        {
            id: 4,
            name: "Shredded Zalg", // omegamart reference.
            description: "Seriously, what kinda store IS this?",
            price: 5000,
            available: false
        }
    ]
}
export const productsReducer = (state = initialState, action) => {

    switch (action.type) {
    case ADD_PRODUCT:
        return {
            ...state,
            products: [
                ...state.products,
                {
                    id: state.products[state.products.length - 1].id+1,
                    name: action.payload.name,
                    description: action.payload.description,
                    price: action.payload.price,
                    available: action.payload.available
                }
            ]
        }
    case DELETE_PRODUCT:
        return {
            ...state,
            products: state.products.filter(product => product.id !== action.payload)
        }
    default:
    return state
    }
}