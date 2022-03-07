import React, { Fragment, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { listShippingDetail } from "../redux/actions/shippingActions"

const ShipmentScreen = ({ match }) => {
  const dispatch = useDispatch()
  const shipDetail = useSelector((state) => state.shipDetail)
  const { shipDetails } = shipDetail

  const params = useParams()
    const { id } = params

  useEffect(() => {
    dispatch(listShippingDetail(id))
    // eslint-disable-next-line
  }, [dispatch, match])
  return (
    <Fragment>
        <div className='container'>
            <nav className='z-depth-0'>
            <div className='nav-wrapper'>
            <div className='col s12'>
                <Link to='/' className='breadcrumb  black-text'>
                Go Back
                </Link>
            </div>
            </div>
        </nav>
        <ul className='collection with-header'>
            <li className='collection-header'>
                <h4 className='center'>Shipping Details</h4>
            </li>
            <li className='collection-item'>
            <div className="">
                <span className='black-text'>{shipDetails.id}</span>
                <br/>

                <span className='grey-text'>
                    <span className='black-text'>NAME {""} {shipDetails.name}</span> last updated by {''} <br />
                    <span className='black-text'>MODE {""}{shipDetails.mode}</span><br />
                    <span className='black-text'>TYPE {""}{shipDetails.type}</span><br />
                    <span className='black-text'>DESTINATION {""}{shipDetails.destination}</span><br />
                    <span className='black-text'>ORIGIN {""}{shipDetails.origin}</span><br />
                    <span className='black-text'>TOTAL {""}{shipDetails.total}</span><br />
                    <span className='black-text'>STATUS {""}{shipDetails.status}</span><br />
                    <span className='black-text'>USERID {""}{shipDetails.userId}</span><br />
                </span>
            </div>
        </li>
        </ul>
        </div>
     
    </Fragment>
  )
}

export default ShipmentScreen
