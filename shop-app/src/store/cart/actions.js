export const ADD_TO_CART = "CART::ADD_TO_CART"

export const REMOVE_FROM_CART = "CART::REMOVE_FROM_CART"

export const createAddAction = (product) => ({
    type: ADD_TO_CART,
    payload: product
})

export const createRemoveAction = (id) => ({
    type: REMOVE_FROM_CART,
    id: id
})