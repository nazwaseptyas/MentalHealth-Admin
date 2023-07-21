import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem('user');

    if (!user) {
      navigate('/');
    }
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const logout = () => {
    localStorage.removeItem('user');
    // Notify('Logout Berhasil')
    navigate('/');
    toast.success('Logout berhasil!', {
      position: toast.POSITION.TOP_RIGHT, // Atur posisi toast (bisa diganti dengan TOP_LEFT, TOP_CENTER, TOP_RIGHT, BOTTOM_LEFT, BOTTOM_CENTER, BOTTOM_RIGHT)
      autoClose: 3000, // Atur waktu otomatis menutup toast (dalam milidetik), misalnya 3000ms = 3 detik
    });
  };
  return (
    <>
      <div id="layout-wrapper">
        <header id="page-topbar">
          <ToastContainer />

          <div className="navbar-header">
            <div className="d-flex">
              {/* LOGO */}
              <div className="navbar-brand-box">
                <Link to="/home" className="logo logo-dark">
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
                </Link>
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
                  <a className="dropdown-item" onClick={logout}>
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
            <Link to="/home" className="logo logo-dark">
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
            </Link>
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
                  <Link to="/tabelartikel">
                    <i className="uil-home-alt" />
                    <span>Artikel</span>
                  </Link>
                </li>
                <li>
                  <Link to="/tabelkonsultasi">
                    <i className="uil-home-alt" />
                    <span>Konsultasi</span>
                  </Link>
                </li>
                <li>
                  <Link to="/tabel">
                    <i className="uil-home-alt" />
                    <span>Tabel</span>
                  </Link>
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
