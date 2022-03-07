import React, { Fragment, useEffect } from "react"
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SearchBar from "./Components/layouts/SearchBar"
import Footer from "./Components/layouts/Footer"
import Shippings from "./Components/ShippingData/Shipments"
import ShipmentScreen from "./screens/ShipmentScreen"
import EditShippingName from "./Components/ShippingData/EditShippingName"
import { Provider } from "react-redux"
import { ConfigureStore } from "./redux/store"

import "materialize-css/dist/css/materialize.min.css"
import M from 'materialize-css/dist/js/materialize.min.js'
import "material-design-icons/iconfont/material-icons.css"

const store = ConfigureStore()

function App() {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit()
  })
  return (
    <Provider store={store}>
      <Router>
      <Fragment>
        <div className='app-container'>
          <SearchBar />
          <Routes>
          <Route path='/' element={<Shippings />} />
          <Route path='/shipments/:id' element={<ShipmentScreen />} />
          </Routes>
          
          <EditShippingName />
          <Footer />
        </div>
      </Fragment>
      </Router>
    </Provider>
  )
}

export default App
