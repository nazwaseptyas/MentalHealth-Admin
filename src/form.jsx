import React, { useState } from 'react';
import Layout from './layout';
import { Image } from 'cloudinary-react';
import { API } from './variable';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Form = () => {
  const [isLoading, setisLoading] = useState(false);

  const simpan = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const formdata = Object.fromEntries(data.entries());
    const { gambar, judul, penulis, isi_artikel, tanggal } = formdata;
    // console.log({ gambar, judul, penulis, isi_artikel, tanggal });
    try {
      setisLoading(true);
      const res = await axios.post(
        API + '/artikel',
        { gambar, judul, penulis, isi_artikel, tanggal },
        {
          withCredentials: true,
        },
      );
      // console.log(res);
      if (res.status === 201) {
        toast.success('Data Berhasil Tersimpan', {
          position: toast.POSITION.TOP_RIGHT, // Atur posisi toast (bisa diganti dengan TOP_LEFT, TOP_CENTER, TOP_RIGHT, BOTTOM_LEFT, BOTTOM_CENTER, BOTTOM_RIGHT)
          autoClose: 3000, // Atur waktu otomatis menutup toast (dalam milidetik), misalnya 3000ms = 3 detik
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Layout>
        <ToastContainer />
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-12">
                <Link
                  to="/tabelartikel"
                  className="btn btn-primary waves-effect waves-light me-1"
                  style={{ marginBottom: '20px' }}
                >
                  Kembali
                </Link>
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Tambah Artikel</h4>
                    <form className="custom-validation mb-5" onSubmit={simpan}>
                      <div className="mb-3 mt-5">
                        <label className="form-label">Link gambar</label>
                        <input
                          name="gambar"
                          type="text"
                          className="form-control"
                          required=""
                          placeholder="Type something"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Judul</label>
                        <input
                          type="text"
                          name="judul"
                          className="form-control"
                          required=""
                          placeholder="Masukkan judul artikel"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Tanggal</label>
                        <div>
                          <input
                            type="date"
                            name="tanggal"
                            className="form-control"
                            required=""
                            placeholder="Type something"
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Penulis</label>
                        <div>
                          <input
                            type="text"
                            className="form-control"
                            name="penulis"
                            required=""
                            placeholder="Nama penulis"
                          />
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Isi Artikel</label>
                        <div>
                          <textarea
                            required=""
                            name="isi_artikel"
                            className="form-control"
                            rows={5}
                            defaultValue={''}
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-content-end">
                        <div style={{ display: 'flex', gap: '5px' }}>
                          <button
                            type="reset"
                            className="btn btn-secondary waves-effect"
                          >
                            Batal
                          </button>
                          <button
                            type="submit"
                            className="btn btn-primary waves-effect waves-light me-1"
                          >
                            Simpan
                          </button>
                        </div>
                      </div>
                    </form>
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

export default Form;
