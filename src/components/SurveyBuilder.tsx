import { SurveyCreatorComponent, SurveyCreator } from "survey-creator-react";
import "survey-creator-core/survey-creator-core.min.css";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function SurveyBuilder() {
  const navigate = useNavigate();
  const creator = new SurveyCreator();

  creator.saveSurveyFunc = async (saveNo: number, callback: Function) => {
    try {
      const result = await api.post("/surveys", {
        title: creator.text, 
        json: creator.JSON,
        creatorId: "mock-user-id" 
      });
      callback(saveNo, true);
      navigate("/");
    } catch (error) {
      console.error("Error saving survey:", error);
      callback(saveNo, false);
    }
  };

  return <SurveyCreatorComponent creator={creator} />;
}
