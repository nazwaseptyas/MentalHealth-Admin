import React, { useState } from 'react';
import Layout from './layout';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Loading from './loading';
import { API } from './variable';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

  const navigate = useNavigate();
  const [isLoading, setisLoading] = useState(false);

  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
  });

  const simpan = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const formdata = Object.fromEntries(data.entries());
    const { email, password } = formdata;
    // const { errors, isValid } = validateForm(formdata);
    // if (!isValid) {
    //   setFormErrors(errors);
    //   return;
    // }

    try {
      setisLoading(true);
      const response = await axios.post(
        API + '/login',
        { email, password },
        {
          withCredentials: true,
        },
      );

      if (response.status === 200) {
        localStorage.setItem('user', JSON.stringify(response.data));
        navigate('/home');
        toast.success('Logout berhasil!', {
          position: toast.POSITION.TOP_RIGHT, // Atur posisi toast (bisa diganti dengan TOP_LEFT, TOP_CENTER, TOP_RIGHT, BOTTOM_LEFT, BOTTOM_CENTER, BOTTOM_RIGHT)
          autoClose: 3000, // Atur waktu otomatis menutup toast (dalam milidetik), misalnya 3000ms = 3 detik
        });
      }
      setisLoading(true);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="account-pages my-5 pt-sm-5">
        <div className="container">
          <ToastContainer />

          <div className="row"></div>
          <div className="row align-items-center justify-content-center">
            <div className="col-md-8 col-lg-6 col-xl-5">
              <div className="card">
                <div className="card-body p-4">
                  <div className="text-center mt-2">
                    <h5 className="text-primary">Selamat datang !</h5>
                  </div>
                  <div className="p-2 mt-4">
                    <form onSubmit={simpan}>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="username">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="username"
                          name="email"
                          placeholder="Enter username"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="userpassword">
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          id="userpassword"
                          placeholder="Enter password"
                        />
                      </div>
                      <div className="form-check"></div>
                      <div className="mt-3 text-end">
                        <button
                          className="btn btn-primary w-sm waves-effect waves-light"
                          type="submit"
                        >
                          {isLoading ? <Loading /> : 'Masuk'}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
