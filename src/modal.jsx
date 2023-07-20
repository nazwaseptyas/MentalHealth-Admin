import axios from 'axios';
import React, { Children, useRef } from 'react';
import { mutate } from 'swr';
import { API } from './variable';
import { Link } from 'react-router-dom';

const Modal = (props) => {
  // const { setclicked, hapus } = props
  let modalref = useRef();

  const deleteartikel = async (id) => {
    const response = await axios.delete(API + '/artikel/' + id);
    console.log(response);
    mutate('artikel');
    modalref.current.click();
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-danger"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        {props.children}
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Apakah Anda Yakin Ingin Menghapus Data ?
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                ref={modalref}
                aria-label="Close"
              />
            </div>
            {/* <div className="modal-body">...</div> */}
            <div className="modal-footer">
              <Link
                to={`/data/${props.artikelid}`}
                // type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Batal
              </Link>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={() => deleteartikel(props.id)}
                // onClick={() => handleUpdateData()}
                className="btn btn-primary"
              >
                Yakin
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
