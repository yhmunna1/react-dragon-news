import React from "react";
import Navbar from "../Shared/Navbar/Navbar";

const Login = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-gray-100 my-10 py-20">
        <h2 className="text-4xl font-semibold text-gray-600 text-center">
          Login your account
        </h2>
        <hr className="my-5" />
      </div>
    </div>
  );
};

export default Login;
