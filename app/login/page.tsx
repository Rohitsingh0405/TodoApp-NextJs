import React from "react";

export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-black">
      <div className="w-full max-w-sm bg-amber-400 border-2 border-black rounded-lg p-6 space-y-4 shadow-lg">
        
        <h1 className="text-center font-bold text-3xl text-white">Login</h1>

        <input
          type="text"
          placeholder="Username"
          className="w-full h-10 px-3 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full h-10 px-3 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
        />

        <button
          className="w-full h-10 bg-black text-white font-semibold rounded-lg hover:bg-white hover:text-black transition"
        >
          Login
        </button>

        <button
          className="w-full h-10 bg-white text-black font-semibold rounded-lg border-2 border-black hover:bg-black hover:text-white transition"
        >
          Login with Google
        </button>
      </div>
    </div>
  );
}
