import * as types from '../types'

export const getAllShippingsReducer = (state = { shippings: [], loading: false }, action) => {
    switch(action.type) {
        case types.GET_SHIPPING_DETAILS:
            return { 
                loading: true, shippings: []
            }
        case types.GET_SHIPPING_DETAILS_SUCCESS:
            return { 
                loading: false, shippings: action.payload
            }
        case types.GET_SHIPPING_DETAILS_FAILURE:
            return { 
                loading: false, error: action.payload 
            }
        case types.SEARCH_SHIPPING_LOGS:
            return {
                loading: false,
                shippings: action.payload
            }
       
        default:
            return state;
    }
}

export const searchShippingsReducer = (state = { shippings: [], loading: false }, action) => {
    switch(action.type) {
        
        case types.SEARCH_SHIPPING_LOGS:
            return {
                loading: false,
                shippings: action.payload
            }
       
        default:
            return state;
    }
}

export const updateShippingsReducer = (state = { shippings: [], loading: false, current: null }, action) => {
    switch(action.type) {
        
        case types.UPDATE_ITEM_NAME:
            return {
                loading: false,
                shippings: [...state.shippings, action.payload]
            }
        case types.SET_CURRENT:
            return {
                ...state,
                current: action.payload
            }
        case types.CLEAR_CURRENT:
            return {
                ...state,
                current: null
            }
       
        default:
            return state;
    }
}
