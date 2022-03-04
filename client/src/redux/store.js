import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { getAllShippingsReducer, searchShippingsReducer, updateShippingsReducer } from './reducers/shippingReducers'
import thunk  from 'redux-thunk'

const initialState = {}

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            shipments: getAllShippingsReducer,
            search: searchShippingsReducer,
            update: updateShippingsReducer
        }),
        initialState, 
        composeWithDevTools(applyMiddleware(thunk))
    )
    return store
}