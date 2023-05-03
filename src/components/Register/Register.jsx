import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="hero py-10 bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-3xl lg:text-5xl font-bold mb-10">Register Here</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-semibold">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="your name here"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-semibold">Photo URL</span>
              </label>
              <input
                name="photo"
                type="text"
                placeholder="photo url here"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-semibold">Email</span>
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
              <button className="btn btn-outline text-[#383838]">Register Now</button>
              <p className="text-lg font-semibold mt-4">Already have an account? <Link className="text-[#e05f09]" to="/login">login</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
