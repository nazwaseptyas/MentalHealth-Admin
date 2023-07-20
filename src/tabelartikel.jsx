import React, { useEffect, useState } from 'react';
import Layout from './layout';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API } from './variable';
import Modal from './modal';
import useSWR, { useSWRConfig } from 'swr';
import Loading from './loading';

function convertTanggal(isoString) {
  const dateObject = new Date(isoString);

  const year = dateObject.getFullYear();
  const month = String(dateObject.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so we add 1
  const date = String(dateObject.getDate()).padStart(2, '0');

  const formattedDateTime = `${year}-${month}-${date} `;
  return formattedDateTime;
}
const Tabelartikel = () => {
  const navigate = useNavigate();
  const [isLoading, setisLoading] = useState(false);
  const [clicked, setclicked] = useState(false);
  let [artikel, setartikel] = useState([]);

  const { mutate } = useSWRConfig();
  const fetcher = async () => {
    const response = await axios.get(API + '/artikel');
    return response.data;
  };

  const { data } = useSWR('artikel', fetcher);
  // if (!data) return <div className='d-flex align-items-center justify-content-center'><Loading></Loading></div>;
  const deleteartikel = async (id) => {
    const response = await axios.delete(API + '/artikel/' + id);
    console.log(response);
    mutate('artikel');
    modalref.current.click();
  };
  console.log(data);
  // if (clicked) {
  // const deleteartikel = async (id) => {
  //   try {
  //     setisLoading(true);
  //     const response = await axios.delete(API + '/artikel/' + id);
  //     // setartikel(response.data)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // deleteartikel()
  // }
  // console.log(clicked);
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
                      {!data ? (
                        <div className="d-flex align-items-center justify-content-center">
                          <Loading></Loading>
                        </div>
                      ) : (
                        <table className="table table-editable table-nowrap align-middle table-edits">
                          <thead>
                            <tr>
                              <th>No</th>
                              <th>Judul Artikel </th>
                              <th>Penulis</th>
                              <th>Isi Artikel</th>
                              <th>Tanggal</th>
                              <th>Aksi</th>
                            </tr>
                          </thead>
                          <tbody>
                            {data.map((val, index) => {
                              return (
                                <tr data-id={index} key={index}>
                                  <td data-field="id" style={{ width: 80 }}>
                                    {index + 1}
                                  </td>
                                  <td data-field="name">{val.judul}</td>
                                  <td data-field="age">{val.penulis}</td>
                                  <td data-field="gender">{val.isi_artikel}</td>
                                  <td data-field="gender">{val.tanggal}</td>
                                  <td style={{ width: 100, gap: '10px' }}>
                                    <div className="d-flex gap-2">
                                      <Link
                                        to={'/update-artikel/' + val.id}
                                        className="btn btn-success"
                                        title="Edit"
                                      >
                                        <i className="fas fa-pencil-alt" />
                                      </Link>
                                      {/* <Modal artikelid={val.id}>
                                        <i className="far fa-trash-alt"></i>
                                      </Modal> */}
                                      <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => deleteartikel(val.id)}
                                      >
                                        <i className="far fa-trash-alt"></i>
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      )}
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
