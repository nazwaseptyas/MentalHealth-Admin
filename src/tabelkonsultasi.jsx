import React from 'react';
import Layout from './layout';
import { Link } from 'react-router-dom';

const Tabelkonsultasi = () => {
  return (
    <>
      <Layout>
        <div className="page-content">
          <div className="container-fluid">
            {/* start page title */}
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0">Tabel Konsultasi</h4>
                </div>
              </div>
            </div>
            {/* end page title */}
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <div>
                      <div className="float-end"></div>
                    </div>
                    <div className="table-responsive mb-4">
                      <table
                        className="table table-centered datatable dt-responsive nowrap table-card-list"
                        style={{
                          borderCollapse: 'collapse',
                          width: '100%',
                        }}
                      >
                        <thead>
                          <tr>
                            <th style={{ width: 20 }}>
                              <div className="form-check text-center font-size-16">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="ordercheck"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="ordercheck"
                                />
                              </div>
                            </th>

                            <th>Nama</th>
                            <th>Email</th>
                            <th>Tanggal</th>
                            <th>No.HP</th>
                            <th>Psikolog</th>
                            <th>Alamat</th>
                            <th>Keluhan</th>
                            <th style={{ width: 120 }}>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="form-check text-center font-size-16">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="ordercheck1"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="ordercheck1"
                                />
                              </div>
                            </td>
                            <td>
                              <a
                                href="javascript: void(0);"
                                className="text-reset  fw-bold"
                              >
                                Budi
                              </a>{' '}
                            </td>
                            <td>email@gmail.com</td>
                            <td>05 May 2023</td>
                            <td>08123456789</td>
                            <td>Nadjillah Fatin</td>
                            <td>Jl. persatuan</td>
                            <td>Sakit</td>
                            <td>
                              <a
                                href="javascript:void(0);"
                                className="px-3 text-primary"
                              >
                                <i className="uil uil-pen font-size-18" />
                              </a>
                              <a
                                href="javascript:void(0);"
                                className="px-3 text-danger"
                              >
                                <i className="uil uil-trash-alt font-size-18" />
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* end table */}
                  </div>
                  {/* end row */}
                </div>{' '}
                {/* container-fluid */}
              </div>
              {/* End Page-content */}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Tabelkonsultasi;
