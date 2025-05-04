// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SubmitSurvey from "./pages/SubmitSurvey";
import SurveyList from "./components/SurveyList";
import SurveyBuilder from "./components/SurveyBuilder";
import SurveyEdit from "./components/SurveyEdit";
import Login from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <Router >
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/surveys" element={<SurveyList />} />
        <Route path="/create" element={<SurveyBuilder />} />
        <Route path="/edit/:id" element={<SurveyEdit />} />
        <Route path="/survey/:id" element={<SubmitSurvey />} />
      </Routes>
    </Router>
  );
}

export default App;
