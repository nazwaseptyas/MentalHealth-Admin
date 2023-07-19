import React from 'react';
import Layout from './layout';
import { Link } from 'react-router-dom';

const Tabelartikel = () => {
  return (
    <>
      <Layout>
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row justify-content-between mb-5">
                      <div className="col-8">
                        <h4 className="card-title">Data Artikel</h4>
                      </div>
                      <div className="col-2">
                        <Link
                          to="/form"
                          className="btn btn-primary waves-effect waves-light me-1"
                        >
                          Tambah Data
                        </Link>
                      </div>
                    </div>
                    <div className="table-responsive">
                      <table className="table table-editable table-nowrap align-middle table-edits">
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Edit</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-id={1}>
                            <td data-field="id" style={{ width: 80 }}>
                              1
                            </td>
                            <td data-field="name">David McHenry</td>
                            <td data-field="age">24</td>
                            <td data-field="gender">Male</td>
                            <td style={{ width: 100 }}>
                              <a
                                className="btn btn-outline-secondary btn-sm edit"
                                title="Edit"
                              >
                                <i className="fas fa-pencil-alt" />
                              </a>
                            </td>
                          </tr>
                          <tr data-id={2}>
                            <td data-field="id">2</td>
                            <td data-field="name">Frank Kirk</td>
                            <td data-field="age">22</td>
                            <td data-field="gender">Male</td>
                            <td>
                              <a
                                className="btn btn-outline-secondary btn-sm edit"
                                title="Edit"
                              >
                                <i className="fas fa-pencil-alt" />
                              </a>
                            </td>
                          </tr>
                          <tr data-id={3}>
                            <td data-field="id">3</td>
                            <td data-field="name">Rafael Morales</td>
                            <td data-field="age">26</td>
                            <td data-field="gender">Male</td>
                            <td>
                              <a
                                className="btn btn-outline-secondary btn-sm edit"
                                title="Edit"
                              >
                                <i className="fas fa-pencil-alt" />
                              </a>
                            </td>
                          </tr>
                          <tr data-id={4}>
                            <td data-field="id">4</td>
                            <td data-field="name">Mark Ellison</td>
                            <td data-field="age">32</td>
                            <td data-field="gender">Male</td>
                            <td>
                              <a
                                className="btn btn-outline-secondary btn-sm edit"
                                title="Edit"
                              >
                                <i className="fas fa-pencil-alt" />
                              </a>
                            </td>
                          </tr>
                          <tr data-id={5}>
                            <td data-field="id">5</td>
                            <td data-field="name">Minnie Walter</td>
                            <td data-field="age">27</td>
                            <td data-field="gender">Female</td>
                            <td>
                              <a
                                className="btn btn-outline-secondary btn-sm edit"
                                title="Edit"
                              >
                                <i className="fas fa-pencil-alt" />
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{' '}
          {/* end col */}
        </div>
      </Layout>
    </>
  );
};

export default Tabelartikel;
