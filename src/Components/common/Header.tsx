import React from 'react'
import ContactHeader from './ContactHeader'
import {Link} from  'react-router-dom';

export default function Header() {
  return (
          <header id="masthead" className="header ttm-header-style-03">
            {/* topbar */}
            <ContactHeader />
            {/* topbar end */}
            {/* site-header-menu */}
            <div id="site-header-menu" className="site-header-menu ttm-bgcolor-darkgrey">
              <div className="site-header-menu-inner ttm-stickable-header">
                <div className="container-fluid fullwide">
                  <div className="row">
                    <div className="col-lg-12">
                      {/*site-navigation */}
                      <div id="site-navigation" className="site-navigation d-flex flex-row align-items-center justify-content-between" data-sticky-height={60}>
                        {/* site-branding */}
                        <a className="home-link" href="/" title="WELCOME PRINTS" rel="home">
                          <img id="logo-img" className="img-fluid auto_size" src="/images/logo-light.svg" alt="logo-img" width={138} height={37} />
                        </a>
                        {/* site-branding end */}
                        <div className="d-flex flex-row m-auto">
                          <div className="btn-show-menu-mobile menubar menubar--squeeze">
                            <span className="menubar-box">
                              <span className="menubar-inner" />
                            </span>
                          </div>
                          {/* menu */}
                          <nav className="main-menu menu-mobile" id="menu">
                            <ul className="menu">
                              <li><Link data-scroll to={{pathname: '/', hash: '#ttm-home'}}>Home</Link></li>
                              <li><Link data-scroll to={{pathname: '/', hash: "#about"}}>About Us</Link></li>
                              <li><Link data-scroll to={{pathname: '/', hash: "#services"}}>Services</Link></li>
                              {/* <li><a data-scroll href="#contact">Contact Us</a></li> */}
                            </ul>
                          </nav>
                          {/* menu end */}
                        </div>
                        <div className="header_extra d-flex flex-row align-items-center">
                          <a href="#contact" className="ttm-btn ttm-btn-style-fill ttm-btn-shape-square ttm-btn-color-white">Contact Us!</a>
                        </div>
                      </div>
                      {/* site-navigation end*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* site-header-menu end*/}
          </header>
  )
}
