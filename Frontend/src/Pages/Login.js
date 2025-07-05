import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { ArrowRight } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (isAuthenticated === "true") {
      navigate("/onboarding");
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/onboarding");
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 via-purple-50 to-violet-100 flex items-center justify-center min-h-screen p-4">
      {/* Blurred Background Blobs */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500 rounded-full blur-3xl opacity-10"></div>
      </div>

      {/* Glassmorphic Card */}
      <div className="relative z-10 max-w-md w-full bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200 p-8 md:p-10">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Welcome Back
          </h1>
          <p className="text-slate-600">
            Sign in to your CryptoSentinel account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white border border-[#333] rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white border border-[#333] rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-slate-900 hover:bg-purple-600 text-white w-full py-3 rounded-xl font-semibold flex justify-center items-center transition-all duration-300 hover:scale-[1.03] shadow-md cursor-pointer"
          >
            Sign In
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </form>

        {/* Signup Prompt */}
        <div className="text-center mt-6 text-sm text-slate-600">
          Don't have an account?{" "}
          <span className="text-purple-600 font-semibold cursor-pointer hover:underline">
            Sign up
          </span>
        </div>
      </div>
    </div>
  );
}
