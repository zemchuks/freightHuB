import React, { Fragment } from "react"
import "./App.css"
import SearchBar from "./Components/layouts/SearchBar"
import Footer from "./Components/layouts/Footer"
import Shippings from "./Components/ShippingData/Shipments"
import Pagination from "./Components/Utils/Pagination"
import { Provider } from "react-redux"
import { ConfigureStore } from "./redux/store"

import "materialize-css/dist/css/materialize.min.css"
// import M from 'materialize-css/dist/js/materialize.min.js'
import "material-design-icons/iconfont/material-icons.css"

const store = ConfigureStore()

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <div className='app-container'>
          <SearchBar />
          <Shippings />
         git a
          <Pagination />
          <Footer />
        </div>
      </Fragment>
    </Provider>
  )
}

export default App
