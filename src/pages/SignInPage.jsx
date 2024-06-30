import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function SignInPage() {
  const { user, login, loading, error, clearError } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData.email, formData.password);
  };

  useEffect(() => {
    if (user) {
      navigate("/summary");
    } else {
      clearError();
    }
    return;
  }, [user]);

  return (
    <div className="p-6  rounded-xl min-h-screen flex flex-col items-center">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Sign In Below</h1>
      </header>

      <form
        onSubmit={handleSubmit}
        className="bg-slate-300 border-[2px] border-slate-500 p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-slate-100  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="bg-slate-100  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        {error && (
          <div className="text-red-500 text-sm text-center mb-4">{error}</div>
        )}

        <div className="flex flex-col items-center justify-center">
          <button
            type="submit"
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
          <Link
            to="/sign-up"
            className="text-blue-500 px-4 py-2 rounded hover:text-blue-400 cursor-pointer transition"
          >
            Don't have an account? Sign up here!
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignInPage;
