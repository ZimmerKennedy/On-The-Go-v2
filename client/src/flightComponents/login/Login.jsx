import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Navbar";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const isEmailValid = (email) => {
    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isEmailValid(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (isSignUp && password !== passwordConfirm) {
      alert("Passwords do not match.");
      return;
    }

    navigate("/flight-home");
  };

  return (
    <main className="bg-gray-100">
      <Navbar />
      <div className="flex justify-center items-center min-h-screen">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md w-96"
        >
          <h2 className="text-2xl font-bold mb-6">
            {isSignUp ? "Sign Up" : "Login"}
          </h2>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          {isSignUp && (
            <div className="mb-4">
              <label htmlFor="passwordConfirm" className="block text-sm mb-2">
                Retype Password
              </label>
              <input
                id="passwordConfirm"
                type="password"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 focus:outline-none"
          >
            {isSignUp ? "Sign Up" : "Login"}
          </button>
          <button
            type="button"
            className="mt-2 w-full p-2 text-sm text-gray-500 font-bold rounded hover:text-blue-500 focus:outline-none"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? "Already have an account? Login" : "Create an account"}
          </button>
        </form>
      </div>
    </main>
  );
};

export default Login;
