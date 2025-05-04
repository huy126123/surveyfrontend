import React from "react";

export default function Login() {
  const handleGoogleLogin = () => {
    window.location.href = "https://survey-backend-hm76.onrender.com/auth/google"; 
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">Welcome to Survey App</h1>
        <p className="mb-6">Please sign in with Google to continue.</p>
        <button
          onClick={handleGoogleLogin}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
