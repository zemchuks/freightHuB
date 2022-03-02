import React, { useState } from 'react'

 const SearchBar = () => {

  const [isActive, setIsActive] = useState(false)

  const handleToggle = () => {
    document.documentElement.classList.toggle('dark')
    setIsActive(!isActive)
  }
 
        return (
          <div className="container app-header">
          <div className="app-header-left">
            <span className="app-icon"></span>
            <p className="app-name">Records API</p>
            <div className="search-wrapper">
              <input className="search-input browser-default" type="text" placeholder="Search"  onChange={(e) =>  onSearch(e)} />
              <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
            </div>
          </div>
          <div className="app-header-right">
            <button key={isActive} className={isActive ? "dark" : "mode-switch"} title="Switch Theme" onClick={handleToggle}>
              <svg className="moon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="24" height="24" viewBox="0 0 24 24">
                <defs></defs>
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
              </svg>
            </button>
            
            <button className="profile-btn">
              <img src="images/bruno2.jpg" alt='profile-img' />
              <span>Benson M.</span>
            </button>
          </div>
          
        </div>
        )
    
}

export default SearchBar 