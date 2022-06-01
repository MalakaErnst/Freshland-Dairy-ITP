import * as actionTypes from './shopping-types';

const INITIAL_STATE = {
    products: [],
    cart: [],
    currentItem: null,
    address: {
        firstName: "",
        address: "",
        email: "",
        number: ""
    },
    activeStep: 1,
    orders: [],
}

const shopReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case actionTypes.SET_PRODUCTS:
            return { ...state, products: action.payload }
        case actionTypes.Add_TO_CART:
            const item = state.products.find(product => product.id === action.payload.id)
            const inCart = state.cart.find(item => item.id === action.payload.id ? true : false)
            return { ...state, cart: inCart ? state.cart.map(item => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item) : [...state.cart, { ...item, qty: 1 }] };
        case actionTypes.REMOVE_FROM_CART:
            return { ...state, cart: state.cart.filter(item => item.id !== action.payload.id) };
        case actionTypes.REMOVE_ALL_FROM_CART:
            return { ...state, cart: [] };
        case actionTypes.ADJUST_QTY:
            return { ...state, cart: state.cart.map(item => item.id === action.payload.id ? { ...item, qty: +action.payload.qty } : item) };
        case actionTypes.LOAD_CURRENT_ITEM:
            return { ...state, currentItem: action.payload };
        case actionTypes.SET_ADDRESS:
            return { ...state, address: action.payload };
        case actionTypes.SET_ACTIVESTEP:
            return { ...state, activeStep: action.payload };
        case actionTypes.SET_ORDERS:
            return { ...state, orders: action.payload }
        default:
            return state;

    }

}

export default shopReducer