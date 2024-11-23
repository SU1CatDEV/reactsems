export const ADD_TO_CART = "CART::ADD_TO_CART"
export const REMOVE_FROM_CART = "CART::REMOVE_FROM_CART"
export const UPDATE_PRODUCT_QUANTITY = "CART::UPDATE_PRODUCT_QUANTITY"
export const CLEAR_CART = "CART::CLEAR_CART"

export const createAddAction = (product) => ({
    type: ADD_TO_CART,
    payload: product
})

export const createRemoveAction = (id) => ({
    type: REMOVE_FROM_CART,
    id: id
})

export const createUpdateAction = (id, quantity) => ({
    type: UPDATE_PRODUCT_QUANTITY,
    id: id,
    quantity: quantity
})

export const createClearAction = () => ({
    type: CLEAR_CART
})