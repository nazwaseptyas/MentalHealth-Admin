import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div id="layout-wrapper">
        <header id="page-topbar">
          <div className="navbar-header">
            <div className="d-flex">
              {/* LOGO */}
              <div className="navbar-brand-box">
                <a href="/" className="logo logo-dark">
                  <span className="logo-sm">
                    <img
                      src="/assets/img/logo/logoyukcerita.png"
                      alt=""
                      height={22}
                    />
                  </span>
                  <span className="logo-lg">
                    <img
                      src="/assets/img/logo/logoyukcerita.png"
                      alt=""
                      height={20}
                    />
                  </span>
                </a>
              </div>
              <button
                type="button"
                className={`btn btn-sm px-3 font-size-16 header-item waves-effect vertical-menu-btn ${
                  isSidebarOpen ? 'open' : ''
                }`}
                onClick={toggleSidebar}
              >
                <i className="fa fa-fw fa-bars" />
              </button>
            </div>
            <div className="d-flex">
              <div className="dropdown d-inline-block">
                <button
                  type="button"
                  className="btn header-item waves-effect"
                  id="page-header-user-dropdown"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    className="rounded-circle header-profile-user"
                    src="assets/img/user.svg"
                    alt="Header Avatar"
                  />
                  <span className="d-none d-xl-inline-block ms-1 fw-medium font-size-15">
                    Admin
                  </span>
                  <i className="uil-angle-down d-none d-xl-inline-block font-size-15" />
                </button>
                <div className="dropdown-menu dropdown-menu-end">
                  {/* item*/}
                  <a className="dropdown-item" href="/logout">
                    <i className="uil uil-sign-out-alt font-size-18 align-middle me-1 text-muted" />{' '}
                    <span className="align-middle">Keluar</span>
                  </a>
                </div>
              </div>
              <div className="dropdown d-inline-block">
                <button
                  type="button"
                  className="btn header-item noti-icon right-bar-toggle waves-effect"
                >
                  <i className="uil-cog" />
                </button>
              </div>
            </div>
          </div>
        </header>
        {/* ========== Left Sidebar Start ========== */}
        <div className="vertical-menu">
          {/* LOGO */}
          <div className="navbar-brand-box">
            <a href="/" className="logo logo-dark">
              <span className="logo-sm">
                <img
                  src="/assets/img/logo/logoyukcerita.png"
                  alt=""
                  height="50px"
                />
              </span>
              <span className="logo-lg">
                <img
                  src="/assets/img/logo/yukceritalogo.png"
                  alt=""
                  height="80px"
                />
              </span>
            </a>
          </div>
          <button
            type="button"
            className="btn btn-sm px-3 font-size-16 header-item waves-effect vertical-menu-btn"
            onClick={toggleSidebar}
          >
            <i className="fa fa-fw fa-bars" />
          </button>
          <div data-simplebar="" className="sidebar-menu-scroll">
            {/*- Sidemenu */}
            <div id="sidebar-menu">
              {/* Left Menu Start */}
              <ul className="metismenu list-unstyled" id="side-menu">
                <li className="menu-title">Dashboard</li>
                <li>
                  <a href="/tabelartikel">
                    <i className="uil-home-alt" />
                    <span>Artikel</span>
                  </a>
                </li>
                <li>
                  <a href="/tabelkonsultasi">
                    <i className="uil-home-alt" />
                    <span>Konsultasi</span>
                  </a>
                </li>
              </ul>
            </div>
            {/* Sidebar */}
          </div>
        </div>
        {/* Left Sidebar End */}
        <div className="main-content">
          <main>{children}</main>
        </div>
        <footer className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6">© Yuk Cerita</div>
            </div>
          </div>
        </footer>
      </div>
      {/* end main content*/}
      {/* END layout-wrapper */}
      {/* Right bar overlay*/}
      <div className="rightbar-overlay" />
    </>
  );
};

export default Layout;
