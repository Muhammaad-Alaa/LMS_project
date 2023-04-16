import React, { useState } from 'react'
import { BrowserRouter, Route, Routes,NavLink } from "react-router-dom";
import Courses from '../AllCourses/index'
import Course from '../course/index'
import Edit from '../edit/index'
import Footer from "../footer/index";
export default class Header extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container-scroller">
          <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
            <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
              <a className="navbar-brand brand-logo mr-5" href="index.html">
                Al_Azher
              </a>
              <a className="navbar-brand brand-logo-mini" href="/">
                <img src="image/logo.jpg" className="mr-2" alt="logo" />
              </a>
            </div>
            <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
              <button
                className="navbar-toggler navbar-toggler align-self-center"
                type="button"
                data-toggle="minimize"
                
              >
                <span className="icon-menu"></span>
              </button>
              <ul className="navbar-nav mr-lg-2">
                <li className="nav-item nav-search d-none d-lg-block">
                  <div className="input-group">
                    <div
                      className="input-group-prepend hover-cursor"
                      id="navbar-search-icon"
                    >
                      <span className="input-group-text" id="search">
                        <i className="icon-search"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      id="navbar-search-input"
                      placeholder="Search now"
                      aria-label="search"
                      aria-describedby="search"
                    />
                  </div>
                </li>
              </ul>
              <ul className="navbar-nav navbar-nav-right">
                <li className="nav-item dropdown">
                  <a className="nav-link count-indicator dropdown-toggle"
                    id="notificationDropdown"
                    href="#"
                    data-toggle="dropdown"
                  >
                    <i className="icon-bell mx-0"></i>
                    <span className="count"></span>
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                    aria-labelledby="notificationDropdown"
                  >
                    <p className="mb-0 font-weight-normal float-left dropdown-header">
                      Notifications
                    </p>
                  </div>
                </li>
                <li className="nav-item nav-profile dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                    id="profileDropdown"
                  >
                    <img src="image/icon_4.png" alt="profile" />
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right navbar-dropdown"
                    aria-labelledby="profileDropdown"
                  >
                    <NavLink className="dropdown-item " to="/edit">
                      <i className="ti-settings text-primary"></i>
                      Settings
                    </NavLink>
                    <a className="dropdown-item" href="#">
                      <i className="ti-power-off text-primary"></i>
                      Logout
                    </a>
                  </div>
                </li>
                
              </ul>
              <button
                className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
                type="button"
                data-toggle="offcanvas"
              >
                <span className="icon-menu"></span>
              </button>
            </div>
          </nav>

      <div className="container-fluid page-body-wrapper">
        <div className="theme-setting-wrapper">
          <div id="settings-trigger">
            <i className="ti-settings"></i>
          </div>
          <div id="theme-settings" className="settings-panel">
            <i className="settings-close ti-close"></i>
            <p className="settings-heading">SIDEBAR SKINS</p>
            <div
              className="sidebar-bg-options selected"
              id="sidebar-light-theme"
            >
              <div className="img-ss rounded-circle bg-light border mr-3"></div>
              Light
            </div>
            <div className="sidebar-bg-options" id="sidebar-dark-theme">
              <div className="img-ss rounded-circle bg-dark border mr-3"></div>
              Dark
            </div>
            <p className="settings-heading mt-2">HEADER SKINS</p>
            <div className="color-tiles mx-0 px-4">
              <div className="tiles success"></div>
              <div className="tiles warning"></div>
              <div className="tiles danger"></div>
              <div className="tiles info"></div>
              <div className="tiles dark"></div>
              <div className="tiles default"></div>
            </div>
          </div>
        </div>

      {isOpen && (
          <nav className="sidebar sidebar-offcanvas" id="sidebar">
          <ul className="nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                <i className="icon-grid menu-icon"></i>
                <span className="menu-title">All courses</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                <i className="icon-grid menu-icon"></i>
                <span className="menu-title">add courses</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/create-exame">
                <i className="icon-grid menu-icon"></i>
                <span className="menu-title">create exame</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      )}

            <div className="main-panel">
              
              {/* <Edit/> */}
              <Routes>
                <Route path="/" element={<Courses />} />
                <Route path="/edit" element={<Edit />} />
                
              </Routes>
              <Footer/>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Header