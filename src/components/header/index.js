import React, { Component } from "react";
// import './header.css';
// import Courses from '../AllCourses/index'
import Edit from '../edit/index'
import Footer from "../footer/index";
export default class Header extends Component {
  render() {
    return (
      <>
        <div class="container-scroller">
          <nav class="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
            <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
              <a class="navbar-brand brand-logo mr-5" href="index.html">
                Al_Azher
              </a>
              <a class="navbar-brand brand-logo-mini" href="index.html">
                <img src="image/logo.jpg" class="mr-2" alt="logo" />
              </a>
            </div>
            <div class="navbar-menu-wrapper d-flex align-items-center justify-content-end">
              <button
                class="navbar-toggler navbar-toggler align-self-center"
                type="button"
                data-toggle="minimize"
                
              >
                <span class="icon-menu"></span>
              </button>
              <ul class="navbar-nav mr-lg-2">
                <li class="nav-item nav-search d-none d-lg-block">
                  <div class="input-group">
                    <div
                      class="input-group-prepend hover-cursor"
                      id="navbar-search-icon"
                    >
                      <span class="input-group-text" id="search">
                        <i class="icon-search"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      id="navbar-search-input"
                      placeholder="Search now"
                      aria-label="search"
                      aria-describedby="search"
                    />
                  </div>
                </li>
              </ul>
              <ul class="navbar-nav navbar-nav-right">
                <li class="nav-item dropdown">
                  <a
                    class="nav-link count-indicator dropdown-toggle"
                    id="notificationDropdown"
                    href="#"
                    data-toggle="dropdown"
                  >
                    <i class="icon-bell mx-0"></i>
                    <span class="count"></span>
                  </a>
                  <div
                    class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                    aria-labelledby="notificationDropdown"
                  >
                    <p class="mb-0 font-weight-normal float-left dropdown-header">
                      Notifications
                    </p>
                  </div>
                </li>
                <li class="nav-item nav-profile dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                    id="profileDropdown"
                  >
                    <img src="image/icon_4.png" alt="profile" />
                  </a>
                  <div
                    class="dropdown-menu dropdown-menu-right navbar-dropdown"
                    aria-labelledby="profileDropdown"
                  >
                    <a class="dropdown-item " href="pages/edit/edit.html">
                      <i class="ti-settings text-primary"></i>
                      Settings
                    </a>
                    <a class="dropdown-item" href="#">
                      <i class="ti-power-off text-primary"></i>
                      Logout
                    </a>
                  </div>
                </li>
                
              </ul>
              <button
                class="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
                type="button"
                data-toggle="offcanvas"
              >
                <span class="icon-menu"></span>
              </button>
            </div>
          </nav>

          <div class="container-fluid page-body-wrapper">
            <div class="theme-setting-wrapper">
              <div id="settings-trigger">
                <i class="ti-settings"></i>
              </div>
              <div id="theme-settings" class="settings-panel">
                <i class="settings-close ti-close"></i>
                <p class="settings-heading">SIDEBAR SKINS</p>
                <div
                  class="sidebar-bg-options selected"
                  id="sidebar-light-theme"
                >
                  <div class="img-ss rounded-circle bg-light border mr-3"></div>
                  Light
                </div>
                <div class="sidebar-bg-options" id="sidebar-dark-theme">
                  <div class="img-ss rounded-circle bg-dark border mr-3"></div>
                  Dark
                </div>
                <p class="settings-heading mt-2">HEADER SKINS</p>
                <div class="color-tiles mx-0 px-4">
                  <div class="tiles success"></div>
                  <div class="tiles warning"></div>
                  <div class="tiles danger"></div>
                  <div class="tiles info"></div>
                  <div class="tiles dark"></div>
                  <div class="tiles default"></div>
                </div>
              </div>
            </div>

            <nav class="sidebar sidebar-offcanvas" id="sidebar">
              <ul class="nav">
                <li class="nav-item">
                  <a class="nav-link" href="index.html">
                    <i class="icon-grid menu-icon"></i>
                    <span class="menu-title">All courses</span>
                  </a>
                </li>
              </ul>
            </nav>

            <div class="main-panel">
              {/* <Courses/> */}
              <Edit></Edit>
              <Footer/>
            </div>
          </div>
        </div>
      </>
    );
  }
}
