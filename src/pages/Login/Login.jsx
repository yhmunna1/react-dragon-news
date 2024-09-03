import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    // console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    // console.log(form.get("password"));
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-gray-100 my-10 py-20 rounded-md">
        <h2 className="text-4xl font-semibold text-gray-600 text-center">
          Login your account
        </h2>
        <hr className="my-5" />
        {/* Form */}
        <form
          onSubmit={handleLogin}
          className="card-body md:w-3/4 lg:w-2/4 mx-auto"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-xl">
                Email address
              </span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-xl">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral">Login</button>
          </div>
          <label className="label">
            <Link
              to="/register"
              className="label-text-alt link link-hover font-medium text-base"
            >
              Dont’t Have An Account ?{" "}
              <span className="text-red-500">Register</span>
            </Link>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Login;
