export const ADD_PRODUCT = "PRODUCTS::ADD_PRODUCT" // "omg c++ notation??" shut up nobody likes you.

export const DELETE_PRODUCT = "PRODUCTS::DELETE_PRODUCT"

export const addAction = (name, price, desc, avail) => ({
    type: ADD_PRODUCT, payload: {
        name: name,
        price: price,
        description: desc,
        available: avail
    }
})

export const deleteAction = (id) => ({
    type: DELETE_PRODUCT, payload: id
})