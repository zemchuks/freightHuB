import axios from 'axios'
import * as types from '../types'

export const getAllShippingDetails = () => async (dispatch) => {
    try {

        dispatch({ type: types.GET_SHIPPING_DETAILS })
        const { data } = await axios.get('/shipments')
        console.log(data)
        dispatch({
            type: types.GET_SHIPPING_DETAILS_SUCCESS,
            payload: data
        })

    } catch (err) {
        console.log(err.response)
        dispatch({
            type: types.GET_SHIPPING_DETAILS_FAILURE,
            payload: err.response.statusText
        })
    }
}

export const searchShippingLogs = (id) => async (dispatch) => {
    try {
        const { data } = await axios.get(`/shipments/?q=${id}`)

        dispatch({
            type: types.SEARCH_SHIPPING_LOGS,
            payload: data
        })

    } catch (err) {
        console.log(err.response)
        dispatch({
            type: types.SEARCH_SHIPPING_LOGS_FAIL,
            payload: err.response.statusText
        })
    }
}

export const updateShippingLogs = (item) => async (dispatch) => {
    console.log('check', item)
    try {
        // const { data } = await axios.put(`/shipments/${id.id}`)
        // General HTTP function
        const {data} = await axios({
            method: 'put',
            url: `/shipments/${item.id}`,
            data: {
                name: item.name
            }
        });
        dispatch({
            type: types.UPDATE_ITEM_NAME,
            payload: data
        })

    } catch (err) {
        console.log(err.response)
        dispatch({
            type: types.UPDATE_ITEM_NAME_FAIL,
            payload: err.response.statusText
        })
    }
}
  // Set Current Log
  export const setCurrent = (name) => async (dispatch) => {
    
          dispatch({ type: types.SET_CURRENT, payload: name})
    }
    
    // Clear Current Log
    export const clearCurrent = () => async (dispatch) => {
        
            dispatch({ type: types.CLEAR_CURRENT })
        
      }