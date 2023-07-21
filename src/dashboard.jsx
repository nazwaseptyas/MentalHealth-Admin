import React from 'react';
import Layout from './layout';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const Dashboard = () => {
  return (
    <>
      <Layout>
        <main>
          <ToastContainer />
          <div className="page-content">
            <div className="container-fluid">
              {/* start page title */}
              <div className="row">
                <div className="col-12">
                  <div className="page-title-box d-flex align-items-center justify-content-between">
                    <h4 className="mb-0">Dashboard</h4>
                  </div>
                </div>
              </div>
              {/* end page title */}
              <div className="row">
                <div className="col-md-6 col-xl-6">
                  <div className="card">
                    <div className="card-body">
                      <div className="float-end mt-2">
                        <div
                          id="total-revenue-chart"
                          data-colors='["--bs-primary"]'
                        />
                      </div>
                      <div>
                        <h4 className="mb-1 mt-1">
                          <span data-plugin="counterup">100</span>
                        </h4>
                        <p className="text-muted mb-0">Total Artikel</p>
                      </div>
                      <p className="text-muted mt-3 mb-0">
                        <Link to="/tabelartikel" className="text-success me-1">
                          Lihat Artikel
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>{' '}
                {/* end col*/}
                <div className="col-md-6 col-xl-6">
                  <div className="card">
                    <div className="card-body">
                      <div className="float-end mt-2">
                        <div id="growth-chart" data-colors='["--bs-warning"]' />
                      </div>
                      <div>
                        <h4 className="mb-1 mt-1">
                          <span data-plugin="counterup">100</span>
                        </h4>
                        <p className="text-muted mb-0">Konsultasi</p>
                      </div>
                      <p className="text-muted mt-3 mb-0">
                        <Link
                          to="/tabelkonsultasi"
                          className="text-success me-1"
                        >
                          Lihat Data Konsultasi
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>{' '}
                {/* end col*/}
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Dashboard;
