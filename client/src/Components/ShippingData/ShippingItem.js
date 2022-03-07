import React from "react"
import { Link } from "react-router-dom"
import Moment from "react-moment"
import { useDispatch } from 'react-redux'
import { setCurrent } from "../../redux/actions/shippingActions"

const ShippingItem = ({ shipments }) => {
    const dispatch = useDispatch()

  return (
    <div className='section'>
      <li className='collection-item avatar'>
        <i className='material-icons medium circle blue'>location_on</i>
        <div className='row'>
            <div className='col-s6'></div>
                <a href='#!' className={`${shipments.status === "ACTIVE"
                        ? "red-text"
                        : shipments.status === "COMPLETED"
                        ? "green-text"
                        : shipments.status === "NEW"
                        ? "blue-text"
                        : ""
                    }`}> ID: {shipments.id}
                </a>
                <br />
                {/* SHipping Details */}
                <div className='grey-text'>
                    <a href='#edit-log-modal' className='modal-trigger black-text bold' onClick={() => dispatch(setCurrent(shipments))}>
                    Item Name: {" "} {shipments.name} {" "}
                    </a>
                   
                     last updated on{" "}
                    <Moment format='MMM Do YYYY, h:mm:ss a'>{shipments.date}</Moment>
                </div> <br/>

                <span className='black-text'>Shipped by: </span> {" "}
                {shipments.mode === 'sea' ? <i className='material-icons tiny'>directions_boat</i> : <i className='material-icons tiny'>flight</i>} <br/>

                <span>Cargo: {" "} {shipments.cargo ? shipments.cargo.map((item, index) =>( 
                    <div key={index}>
                        <p>{item.type}</p>
                        <p>{item.description}</p>
                        <p>{item.volume}</p>
                    </div>
                    )) : <p>No cargos available</p>}
                </span>
            </div>
            
                <a href='#!' className='secondary-content'>
                <i className="material-icons">
                { shipments.status === "ACTIVE"
                        ? "done"
                        : shipments.status === "COMPLETED"
                        ? "done_all"
                        : shipments.status === "NEW"
                        ? "near_me"
                        : ""}
                </i>
                </a>

      </li>
      <div className="days-left more-wrapper" style={{color: "#ff942e", cursor: 'pointer'}}>
         <Link to={`/shipments/${shipments.id}`}>
                See more
        </Link>
       </div>
    </div>
  )
}

export default ShippingItem
