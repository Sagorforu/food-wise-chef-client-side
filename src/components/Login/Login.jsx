import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import login3 from "../../assets/login3.json";
import { AuthContext } from "../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const { logInUser } = useContext(AuthContext);
  const [error, setError] = useState(null);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const password = form.password.value;
    const email = form.email.value;
    console.log(password, email);
    if (!email) {
      setError("Email is required");
      return;
    } else if (!password) {
      setError("Password is required");
      return;
    } else {
      setError("");
    }

    logInUser(email, password)
      .then((result) => {
        const signedUser = result.user;
        console.log(signedUser);
        toast("User logged in successfully");
        event.target.reset();
      })
      .catch((error) => {
        console.log(error);
        setError("wrong email or password")
      });
  };

  return (
    <div className="hero py-10 bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-3xl lg:text-5xl font-bold mb-10">Please Login</h1>
        </div>
        <form
          onSubmit={handleLogin}
          className="grid lg:grid-cols-2 items-center gap-32"
        >
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
              <p className="text-red-600 mt-2">{error}</p>
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
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
