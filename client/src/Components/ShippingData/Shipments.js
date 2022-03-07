import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Preloader from '../layouts/Preloader'
import ShippingItem from './ShippingItem'
import { getAllShippingDetails } from '../../redux/actions/shippingActions'
import TablePagination from '@mui/material/TablePagination/TablePagination'

const Shippings = () => {
    

    useEffect(() => {
        dispatch(getAllShippingDetails())
        // eslint-disable-next-line
    }, [])
    const dispatch = useDispatch()
    const shipments = useSelector(state => state.shipments)
    const { shippings, loading } = shipments
    console.log('ship', shippings) 


        // PAGINATION
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(20);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 20));
        setPage(0);
      };

    if(loading || shippings === null) {
        return <Preloader />
    }
    return (
        <div className='container section'>
         <ul className='collection with-header'>
            <li className='collection-header'>
                <h4 className='center'>Shipping Logs</h4>
            </li>
            {shippings && shippings.length === 0 ? (<p className='center'>No shipments to show..</p>) : (
          (shippings || []).slice(0, rowsPerPage).map((shipments, index) => <ShippingItem shipments={shipments} key={index} />)
        )}
        </ul>

        <TablePagination
        component="div"
        count={shippings?.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[20, 30]}
      />
        </div>
    )
}

export default Shippings
