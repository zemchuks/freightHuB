import React, { Fragment } from 'react'
import './App.css';
import SearchBar from './Components/SearchBar';
import Footer from './Components/Footer';
import Shippings from './Components/Shippings';

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import 'material-design-icons/iconfont/material-icons.css'

function App() {
  return (
    <Fragment>
        <div className="app-container">
          <SearchBar />
          <Shippings />
          <Footer />
        </div>
    </Fragment>
    
  );
}

export default App;
