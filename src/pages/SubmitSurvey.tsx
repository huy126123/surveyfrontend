// src/pages/SubmitSurvey.tsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";
import SurveyRunner from "../components/SurveyRunner";

export default function SubmitSurvey() {
  const { id } = useParams();
  const [survey, setSurvey] = useState<any>(null);

  useEffect(() => {
    api.get(`/surveys/${id}`).then((res) => setSurvey(res.data));
  }, [id]);

  if (!survey) return <p>Loading...</p>;

  return <SurveyRunner surveyJson={survey.json} surveyId={survey.id} />;
}
