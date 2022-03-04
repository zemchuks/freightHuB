import React from "react"
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
                <a href='#edit-log-modal' className={`modal-trigger ${shipments.status === "ACTIVE"
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
                <span className='grey-text'>
                    <a href='#edit-log-modal' onClick={() => dispatch(setCurrent(shipments))}>
                    <span className='black-text bold'>Item Name: {" "} {shipments.name}</span>
                    </a>
                   
                     last updated on{" "}
                    <Moment format='MMM Do YYYY, h:mm:ss a'>{shipments.date}</Moment>
                </span> <br/>

                <span className='black-text'>Shipped by: </span> {" "}
                {shipments.mode === 'sea' ? <i className='material-icons tiny'>directions_boat</i> : <i className='material-icons tiny'>flight</i>} <br/>

                <span>Cargo: {" "} {shipments.cargo.map((item, key) =>( 
                    <div key={key}>
                        <p>{item.type}</p>
                        <p>{item.description}</p>
                        <p>{item.volume}</p>
                    </div>
                    ))}
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
    </div>
  )
}

export default ShippingItem
