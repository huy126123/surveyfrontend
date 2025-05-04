import { Link } from "react-router-dom";
import api from "../services/api";
import { useEffect, useState } from "react";
type Survey = {
    id: string;
    title: string;
    json: any;
  };
export default function SurveyList() {
  const [surveys, setSurveys] = useState<Survey[]>([]);

  useEffect(() => {
    api.get("/surveys").then((res) => setSurveys(res.data));
  }, []);

  const deleteSurvey = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this survey?")) return;
    await api.delete(`/surveys/${id}`);
    setSurveys(surveys.filter((s) => s.id !== id));
  };

  return (
    <div>
      <Link to="/create">
        <button>Create New Survey</button>
      </Link>
      <ul>
        {surveys.map((survey: any) => (
          <li key={survey.id}>
            <strong>{survey.title}</strong>
            <Link to={`/survey/${survey.id}`}>[Submit]</Link>
            <Link to={`/edit/${survey.id}`}>[Edit]</Link>
            <button onClick={() => deleteSurvey(survey.id)}>[Delete]</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
