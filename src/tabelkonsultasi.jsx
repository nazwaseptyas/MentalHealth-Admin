import React, { useEffect, useState } from 'react';
import Layout from './layout';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API } from './variable';
import Loading from './loading';

function convertTanggal(isoString) {
  const dateObject = new Date(isoString);

  const year = dateObject.getFullYear();
  const month = String(dateObject.getMonth() + 1).padStart(2, "0"); // Months are zero-based, so we add 1
  const date = String(dateObject.getDate()).padStart(2, "0");
  const hours = String(dateObject.getHours()).padStart(2, "0");
  const minutes = String(dateObject.getMinutes()).padStart(2, "0");
  const seconds = String(dateObject.getSeconds()).padStart(2, "0");

  const formattedDateTime = `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
  return formattedDateTime
}
const Tabelkonsultasi = () => {

  const navigate = useNavigate();
  const [isLoading, setisLoading] = useState(false);
  let [konsultasi, setkonsultasi] = useState([]);
  useEffect(() => {
    const fetchkonsultasi = async () => {
      try {
        setisLoading(true);
        const response = await axios.get(API + '/konsultasi');
        setkonsultasi(response.data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchkonsultasi()
    setisLoading(false);
  }, [])

  konsultasi = konsultasi.filter(item => item.nama !== '');
  console.log(konsultasi);
  return (
    <>
      <Layout>
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row justify-content-between">
                      <div className="">
                        <h4 className="card-title">Data Konsultasi</h4>
                      </div>
                    </div>
                    <div className="table-responsive">
                      <table className="table table-editable table-nowrap align-middle table-edits">
                        <thead>
                          <tr>
                            <th>No</th>
                            <th>Nama</th>
                            <th>Email</th>
                            <th>Tanggal</th>
                            <th>Keluhan</th>
                            <th>No Telepon</th>
                          </tr>
                        </thead>
                        <tbody>
                          {konsultasi?.map((val, index) => {
                            const tanggal = convertTanggal(val.tanggal)
                            return (<tr data-id={index} key={index}>
                              <td data-field="id" style={{ width: 80 }}>
                                {index + 1}
                              </td>
                              <td data-field="name">{val.nama}</td>
                              <td data-field="age">{val.email}</td>
                              <td data-field="gender">{tanggal}</td>
                              <td data-field="gender">{val.keluhan}</td>
                              <td data-field="gender">{val.nohp}</td>

                            </tr>)
                          })}

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

export default Tabelkonsultasi;
