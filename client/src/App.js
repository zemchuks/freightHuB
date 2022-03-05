import React, { Fragment, useEffect } from "react"
import "./App.css"
import SearchBar from "./Components/layouts/SearchBar"
import Footer from "./Components/layouts/Footer"
import Shippings from "./Components/ShippingData/Shipments"
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
      <Fragment>
        <div className='app-container'>
          <SearchBar />
          <Shippings />
          <EditShippingName />
          <Footer />
        </div>
      </Fragment>
    </Provider>
  )
}

export default App
