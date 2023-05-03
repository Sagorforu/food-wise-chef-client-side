import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import { FaGithub, FaGoogle } from "react-icons/fa";
import Lottie from "lottie-react";
import login5 from "../../assets/login5.json";

const Register = () => {
  const [accepted, setAccepted] = useState(false);


  const handleCheckbox = event => {
    setAccepted(event.target.checked)
  }

  return (
    <div className="hero py-10 bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-3xl lg:text-5xl text-[#383838] font-bold mb-10">
            Register Here
          </h1>
        </div>
        <div className="grid lg:grid-cols-2 items-center gap-6">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg text-[#383838] font-semibold">Name</span>
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
                  <span className="label-text text-lg text-[#383838] font-semibold">
                    Photo URL
                  </span>
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
                  <span className="label-text text-lg text-[#383838] font-semibold">
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
                  <span className="label-text text-lg text-[#383838] font-semibold">
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
              <div className="flex gap-4 mt-2 font-semibold text-[#383838]">
                <input onClick={handleCheckbox} className="w-4" type="checkbox" name="accept" id="" />
                {
                  <p>
                    Accept <Link className="underline" to="/terms">Terms and Conditions</Link>
                  </p>
                }
              </div>
              <div className="form-control mt-6">
                <button disabled={!accepted} className="btn btn-outline text-[#383838]">
                  Register Now
                </button>
                <p className="text-lg font-semibold mt-4 text-[#383838]">
                  Already have an account?{" "}
                  <Link className="text-[#e05f09]" to="/login">
                    login
                  </Link>
                </p>
              </div>
            </div>
            <div className="container">
              <div className="line"></div>
              <p className="text text-[#383838]">or</p>
              <div className="line"></div>
            </div>
            <div className="mx-auto py-6">
              <button className="btn btn-outline text-[#383838] flex gap-2">
                <FaGoogle className="lg:font-bold font-semibold text-lg lg:text-2xl text-[#e05f09]" />
                <span>Sign Up With Google</span>
              </button>
              <button className="btn btn-outline text-[#383838] mt-3 flex gap-2">
                <FaGithub className="lg:font-bold font-semibold text-lg lg:text-2xl text-[#e05f09]" />
                <span>Sign Up With GitHub</span>
              </button>
            </div>
          </div>
          <div>
            <Lottie
              className="object-cover"
              animationData={login5}
              loop={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
