import * as actionTypes from './shopping-types'

export const addToCart = (itemID) => {
    return {
        type: actionTypes.Add_TO_CART,
        payload: { id: itemID }
    }
}

export const removeFromCart = (itemID) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: { id: itemID }
    }
}

export const removeAllFromCart = () => {
    return {
        type: actionTypes.REMOVE_ALL_FROM_CART
    }
}

export const adjustQty = (itemID, value) => {
    return {
        type: actionTypes.ADJUST_QTY,
        payload: {
            id: itemID,
            qty: value
        }
    }
}

export const loadCurruntItem = (item) => {
    return {
        type: actionTypes.LOAD_CURRENT_ITEM,
        payload: item
    }
}

export const setProducts = (Products) => {
    return {
        type: actionTypes.SET_PRODUCTS,
        payload: Products
    }
}

export const setAddress = (Address) => {
    return {
        type: actionTypes.SET_ADDRESS,
        payload: Address
    }
}

export const setActiveStep = (ActiveStep) => {
    return {
        type: actionTypes.SET_ACTIVESTEP,
        payload: ActiveStep
    }
}

export const setOrders = (orders) => {
    return {
        type: actionTypes.SET_ORDERS,
        payload: orders
    }
}

