import { Component } from "react";

class Login extends Component {
  render() {
    return (
      <>
        <div id="form-login">
          <div className="container-fluid">
            <a href="#" className="text-primary">
                <b>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-left me-2 text-primary"
                    viewBox="0 0 16 16"
                >
                    <path
                    fillRule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                    />
                </svg>
                Kembali
                </b>

            </a>
            <div className="container">
              <div className="row justify-content-center align-items-center ">
                <div className="card w-50 shadow border">
                  <img
                    src="../../../public/icon-login.png"
                    className="card-img-top w-50 m-auto"
                    alt="..."
                  />
                  <div className="card-body">
                    <div className="login text-center"><h2>Login</h2></div>
                    <form className="form">
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control border-0 border-bottom shadow-none"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />

                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputPassword1"
                          className="form-label"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control border-0 border-bottom shadow-none"
                          id="exampleInputPassword1"
                        />
                      </div>
                     <a className="text-primary text-end" href="#"><p>Lupa Password?</p></a>
                     <div className="container text-center">
                        <button type="submit" className="btn btn-primary w-75">
                        Login
                      </button>
                     </div>
                      
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
