import React from 'react';
import Layout from './layout';
import { Link } from 'react-router-dom';

const Tabelartikel = () => {
  return (
    <>
      <Layout>
        <div className="page-content">
          <div className="container-fluid">
            {/* start page title */}
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0">Tabel Artikel</h4>
                </div>
              </div>
            </div>
            {/* end page title */}
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <div>
                      <div className="float-end">
                        <form className="d-inline-flex mb-3">
                          <label
                            className="form-check-label my-2 me-2"
                            htmlFor="order-selectinput"
                          >
                            Kategori
                          </label>
                          <select
                            className="form-select"
                            id="order-selectinput"
                          >
                            <option selected="">All</option>
                            <option value={1}>Industri dan Organisasi</option>
                            <option value={2}>Karir</option>
                            <option value={3}>Keluarga</option>
                            <option value={4}>Masalah Diri</option>
                            <option value={5}>Trauma</option>
                          </select>
                        </form>
                      </div>
                      <button
                        type="button"
                        className="btn btn-success waves-effect waves-light mb-3"
                      >
                        <i className="mdi mdi-plus me-1" /> Add New Artikel
                      </button>
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
                            <th>ID</th>
                            <th>Banner Artikel</th>
                            <th>Tanggal</th>
                            <th>Isi Artikel</th>
                            <th>Nama Penulis</th>
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
                                1
                              </a>{' '}
                            </td>
                            <td>banner.png</td>
                            <td>05 May 2023</td>
                            <td>
                              Sed perspicia unde omnis iste natus error
                              voluptatem accsam dolor laudantium waset
                              totamaperiam eaqipsaty quaenventore veritatis
                              quasi architecto beatae
                            </td>
                            <td>Budi</td>
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

export default Tabelartikel;
