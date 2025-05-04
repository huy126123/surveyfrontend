import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { SurveyCreator, SurveyCreatorComponent } from "survey-creator-react";
import "survey-creator-core/survey-creator-core.min.css";
import api from "../services/api";

export default function SurveyEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [creator, setCreator] = useState<SurveyCreator | null>(null);

  useEffect(() => {
    async function fetchSurvey() {
      const { data } = await api.get(`/surveys/${id}`);
      const c = new SurveyCreator();
      c.JSON = data.json;
      c.text = data.title;
      c.saveSurveyFunc = async (saveNo: number, callback: (saveNo: number, success: boolean) => void) => {
        try {
          await api.put(`/surveys/${id}`, {
            title: c.text,
            json: c.JSON,
          });
          callback(saveNo, true);
          navigate("/");
        } catch (error) {
          console.error("Update failed:", error);
          callback(saveNo, false);
        }
      };
      setCreator(c);
    }

    fetchSurvey();
  }, [id, navigate]);

  if (!creator) return <p>Loading...</p>;
  return <SurveyCreatorComponent creator={creator} />;
}
