import React from 'react'

const Footer = () => {
    return (
        <main id='main' className="page-footer" style={{ backgroundColor: '#1F1D2B', color: 'white' }}>
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Freighthub Frontend challenge</h5>
                <p className="grey-text text-lighten-4">This is a project of ENYE.org. This project was done by Benson Madueke</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Contact Me @...</h5>
                <ul>
                  
                  <li><a className="grey-text text-lighten-3" href="https://github.com/zemchuks"><i className='fab fa-github'></i> {''} GitHub</a></li>
                  <li><a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/bruno-ezemba/"><i className='fab fa-linkedin'></i> {''} LinkedIn</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2021 Copyright
            </div>
          </div>
        </main>
            
    )
}
export default Footer