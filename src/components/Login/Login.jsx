import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import login3 from "../../assets/login3.json";

const Login = () => {
  return (
    <div className="hero py-10 bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-3xl lg:text-5xl font-bold mb-10">Please Login</h1>
        </div>
        <div className="grid lg:grid-cols-2 items-center gap-32">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Email
                  </span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Password
                  </span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-outline text-[#383838]">
                  Login
                </button>
              </div>
              <p className="text-lg font-semibold mt-4">
                Don't have an account?{" "}
                <Link className="text-[#e05f09]" to="/register">
                  Register
                </Link>
              </p>
            </div>
          </div>
          <div>
            <Lottie
              className="object-cover"
              animationData={login3}
              loop={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
