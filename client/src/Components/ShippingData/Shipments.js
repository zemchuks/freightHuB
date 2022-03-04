import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Preloader from '../layouts/Preloader'
import ShippingItem from './ShippingItem'
import { getAllShippingDetails } from '../../redux/actions/shippingActions'

const Shippings = () => {
    const dispatch = useDispatch()
    const shipments = useSelector(state => state.shipments)
    const { shippings, loading } = shipments
    console.log(shipments)

    useEffect(() => {
        dispatch(getAllShippingDetails())
        // eslint-disable-next-line
    }, [])

    if(loading || shippings === null) {
        return <Preloader />
    }
    return (
        <div className='container section'>
         <ul className='collection with-header'>
            <li className='collection-header'>
                <h4 className='center'>Shipping Logs</h4>
            </li>
            {!loading && shippings.length === 0 ? (<p className='center'>No shipments to show..</p>) : shippings.map(shipments => <ShippingItem shipments={shipments} key={shipments.id} />)}
        </ul>
        </div>
    )
}

export default Shippings
