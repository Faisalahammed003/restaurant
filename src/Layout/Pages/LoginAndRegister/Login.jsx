import { useEffect, useRef, useState } from "react";
import coverImg from "../../../assets/others/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { Link } from "react-router-dom";
const Login = () => {
  const captchaRef = useRef(null);
  const [disiabled, setDisabled] = useState(true);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleLogin = (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;
    console.log(email, password);
  };

  const handleCaptcha = () => {
    const captchaValue = captchaRef.current.value;
    console.log(captchaValue);

    if (validateCaptcha(captchaValue)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  return (
    <div className="hero bg-[url('https://i.ibb.co.com/1KtTyqx/authentication.png')] min-h-screen">
      <div className="hero-content flex-col md:flex-row-reverse">
        <div className="text-center md:w-1/2 lg:text-left">
          <img src={coverImg} alt="" />
        </div>
        <div className="card bg-[url('https://i.ibb.co.com/1KtTyqx/authentication.png')] md:w-1/2 max-w-sm shadow-2xl">
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <div className="flex justify-between items-center">
                <label className="label ">
                  <LoadCanvasTemplate />
                </label>
                <button
                  onClick={handleCaptcha}
                  className="btn btn-outline btn-xs mb-7"
                >
                  Validate
                </button>
              </div>
              <input
                ref={captchaRef}
                type="text"
                name="captcha"
                placeholder="type the text you see above"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input
                disabled={disiabled}
                className="btn text-white bg-[#D1A054]"
                type="submit"
                value="Login"
              />
            </div>
            <p className="text-[#D1A054] text-center font-semibold">
              <small>
                New Here?{" "}
                <Link className="font-bold" to="/signUp">
                  Create a New Account
                </Link>
              </small>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
