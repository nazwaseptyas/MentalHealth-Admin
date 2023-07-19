import React from 'react';
import Layout from './layout';
import { Image } from 'cloudinary-react';

const Form = () => {
  return (
    <>
      <Layout>
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Tambah Artikel</h4>
                    {/* <p className="card-title-desc">
                      Parsley is a javascript form validation library. It helps
                      you provide your users with feedback on their form
                      submission before sending it to your server.
                    </p> */}
                    <form className="custom-validation" action="#">
                      <div className="mb-3">
                        <label className="form-label">Judul</label>
                        <input
                          type="text"
                          className="form-control"
                          required=""
                          placeholder="Type something"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Tanggal</label>
                        <div>
                          <input
                            type="date"
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
                            required=""
                            placeholder="Type something"
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Gambar</label>
                        <div>
                          <Image
                            width={100}
                            height={100}
                            cloudName="dqzc2i588"
                            publicId={''}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                            }}
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Isi Artikel</label>
                        <div>
                          <textarea
                            required=""
                            className="form-control"
                            rows={5}
                            defaultValue={''}
                          />
                        </div>
                      </div>
                      <div>
                        <div>
                          <button
                            type="submit"
                            className="btn btn-primary waves-effect waves-light me-1"
                          >
                            Simpan
                          </button>
                          <button
                            type="reset"
                            className="btn btn-secondary waves-effect"
                          >
                            Batal
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
