import React, { Component, Fragment } from 'react'
import './Header.scss'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }


render = () => {
    return (
      <Fragment>
        <div className="header-wrapper">
          <div className="header">
            <div className="header-part">TITLE</div>
            <div className="header-part">
              <div>
                <input type='search' placeholder='search' name='search-field'/>
              </div>
            </div>
            <div className="header-part">
              <div className="menu">
                <a className='menu-icon' href='#'></a>
                <a className='menu-icon' href='#'></a>
                <a className='menu-icon' href='#'></a>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Header