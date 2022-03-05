import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { updateShippingLogs } from "../../redux/actions/shippingActions"
import M from "materialize-css/dist/js/materialize"

const EditShippingName = () => {
 
  const update = useSelector(state => state.update)
  const { current } = update
  const dispatch = useDispatch()
  const [name, setName] = useState("")

  useEffect(() => {
    if (current !== null) {
      setName(current.name)
      // ?this is rad
    }
  }, [current])

  const onSubmit = () => {
    if (name === '') {
      M.toast({ html: "Please enter a new item name" })
    } else {
      //  update the shippings state
      const updLog = { id: current.id, name}
      dispatch(updateShippingLogs(updLog))

      M.toast({ html: `Shipping item name updated` })
      // Clear fields
      setName('')
      console.log(update)
    }
  }

  return (
    <div id='edit-log-modal' className='modal'>
      <div className='modal-content'>
        <h4>Enter new item name</h4>

        <div className='row'>
          <div className='input-field'>
            <input type='text' name='name' defaultValue={name} onChange={(e) => setName(e.target.value)} />
          </div>
        </div>
      </div>

      <div className='modal-footer'>
        <a href='#!' onClick={onSubmit} className='modal-close waves-effect waves-green blue btn'>Enter</a>
      </div>
    </div>
  )
}

export default EditShippingName
