import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSearchParams } from 'react-router-dom';
export default function Dashboard() {
  const [surveys, setSurveys] = useState<any[]>([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem("token", token);
      navigate("/dashboard", { replace: true });
    }
  }, [location, navigate]);
  useEffect(() => {
    axios.get("http://localhost:3000/surveys").then((res) => setSurveys(res.data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Link
          to="/create"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          + Create Survey
        </Link>
      </div>

      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4">Your Surveys</h2>
        {surveys.length > 0 ? (
          <ul>
            {surveys.map((s) => (
              <li key={s.id} className="mb-2">
                <Link to={`/survey/${s.id}`} className="text-blue-600 hover:underline">
                  {s.title || "Untitled Survey"}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>No surveys created yet.</p>
        )}
      </div>
    </div>
  );
}
