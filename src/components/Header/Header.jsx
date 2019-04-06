import React, { Component } from 'react'
import './Header.css'
import logo from './../../../src/logo.svg';

export class Header extends Component {
  render() {
    return (
      <div className='header-section'>
        <div className='header-part-one'>
          <div className='houser-logo'>
            <img src="https://raw.githubusercontent.com/DevMountain/simulation-2/master/assets/houser_logo.png" alt="" />
          </div>
          <div className='houser-text'>
            Houser
          </div>

        </div>
        <div className='header-part-two'>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
    )
  }
}

export default Header
