import React from 'react';
import Layout from './layout';

const Login = () => {
  return (
    <>
      <div className="account-pages my-5 pt-sm-5">
        <div className="container">
          <div className="row"></div>
          <div className="row align-items-center justify-content-center">
            <div className="col-md-8 col-lg-6 col-xl-5">
              <div className="card">
                <div className="card-body p-4">
                  <div className="text-center mt-2">
                    <h5 className="text-primary">Selamat datang !</h5>
                  </div>
                  <div className="p-2 mt-4">
                    <form>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="username">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="username"
                          placeholder="Enter username"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="userpassword">
                          Password
                        </label>
                        <input
                          type="password"
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
                          Masuk
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </div>
    </>
  );
};

export default Login;
