import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import { FaGithub, FaGoogle } from "react-icons/fa";
import Lottie from "lottie-react";
import login5 from "../../assets/login5.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../Providers/AuthProvider";

const Register = () => {
  const { createUser,GoogleUser, GithubUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    if (passwordError) {
      toast("Fix password error");
      return;
    } else if (!email) {
      setError("Email is required");
      return;
    } else if (!password) {
      setError("Password is required");
      return;
    } else {
      setError("");
    }
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        event.target.reset();
      })
      .then((error) => {
        console.log(error.message)
        setError(error);
      });
  };
  const handleGoogleUser = () => {
    GoogleUser()
    .then(result => {
      const googleLoggedUser = result.user;
      console.log(googleLoggedUser)
    })
    .then(error => {
      console.log(error.message)
      setError(error)
    })
  };
  const handleGithubUser = () => {
    GithubUser()
    .then(result => {
      const githubLoggedUser = result.user;
      console.log(githubLoggedUser)
    })
    .then(error => {
      console.log(error.message)
      setError(error)
    })
  }

  const handleEmail = (event) => {
    setEmail(event.target.value);
    event.target.reset();
  };
  const handlePassword = (event) => {
    const passwordInput = event.target.value;
    setPassword(passwordInput);
    if (passwordInput.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return;
    } else {
      setPasswordError("");
    }
    event.target.reset();
  };

  const handleCheckbox = (event) => {
    setAccepted(event.target.checked);
    event.target.reset();
  };

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
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg text-[#383838] font-semibold">
                    Name
                  </span>
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
                  value={email}
                  onChange={handleEmail}
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
                  value={password}
                  onChange={handlePassword}
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                {passwordError && (
                  <span className="text-red-600 mt-2">{passwordError}</span>
                )}
              </div>
              <div className="flex gap-4 mt-2 font-semibold text-[#383838]">
                <input
                  onClick={handleCheckbox}
                  className="w-4"
                  type="checkbox"
                  name="accept"
                  id=""
                />
                {
                  <p>
                    Accept{" "}
                    <Link className="underline text-[#e05f09]" to="/terms">
                      Terms and Conditions
                    </Link>
                  </p>
                }
              </div>
              <p className="text-red-600 mt-2">{error}</p>
              <div className="form-control mt-6">
                <button
                  disabled={!accepted}
                  className="btn btn-outline text-[#383838]"
                >
                  Register Now
                </button>
                <p className="text-lg font-semibold mt-4 text-[#383838]">
                  Already have an account?{" "}
                  <Link className="text-[#e05f09]" to="/login">
                    login
                  </Link>
                </p>
              </div>
            </form>
            <div className="container">
              <div className="line"></div>
              <p className="text text-[#383838]">or</p>
              <div className="line"></div>
            </div>
            <div className="mx-auto py-6">
              <button onClick={handleGoogleUser} className="btn btn-outline text-[#383838] flex gap-2">
                <FaGoogle className="lg:font-bold font-semibold text-lg lg:text-2xl text-[#e05f09]" />
                <span>Sign Up With Google</span>
              </button>
              <button onClick={handleGithubUser} className="btn btn-outline text-[#383838] mt-3 flex gap-2">
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
        <ToastContainer />
      </div>
    </div>
  );
};

export default Register;
