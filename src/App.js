import logo from "./logo.svg";
import "./App.css";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

function App() {
  return (
    <div className="App">
      <div className="App-logo">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="Heading-Container">
        <p className="Heading-Container-Paragraph">
          SOME RANDOM TEXT, SOME RANDOM TEXT, SOME RANDOM TEXT, SOME RANDOM TEXT
        </p>
      </div>

      <form>
        <div>
          <div className="Login-Heading ">
            <div class="row mt-5 p-3">
              <div className="col-6">
                <div className="Login-Container">
                  <h5 className="Login-Text">Login</h5>
                </div>
              </div>
              <div className="col-6">
                <div className="Signup-Container">
                  <h5 className="Signup-Text">Signup</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="Input-Container">
            <div class="row mt-1 p-4 justify-content-center">
              <div className="col-12 ">
                <input
                  className="input-field"
                  type="text"
                  placeholder="Enter Username"
                  name="username"
                  required
                />
              </div>
              <div className="col-12 mt-3">
                <input
                  className="input-field"
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  required
                />
              </div>
            </div>
          </div>
          <div className="Button-Container mt-2">
            <button className="Login-Button">LOGIN</button>
          </div>
          <div className="Forgot-Container m-1">
            <div className="row justify-content-end">
              <div className="col-6 m-1 ml-3 mt-2 ">
                <p className="forgot-pass">Forgot Password?</p>
              </div>
            </div>
          </div>
        </div>
      </form>
      <p className="Login-with">or login with</p>
      <div className="icons">
        <FcGoogle className="p-2" size={60} />
        <FaFacebook className="p-2" size={60} />
        <AiFillTwitterCircle className="p-2" size={60} />
      </div>

      <div className="p-1 mt-2">
        <p className="para-text">
          Don't have an account?
          <span className="link-para">Create new now!</span>
        </p>
      </div>
      <div className="p-2 mb-5">
        <p className="para-text">
          By signing up, you are agree with our{" "}
          <span className="terms-para">Terms & Conditions</span>
        </p>
      </div>
    </div>
  );
}

export default App;
