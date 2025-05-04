
import { Survey } from "survey-react-ui";

import { Model } from "survey-core";
import { useState } from "react";
import api from "../services/api";

interface Props {
  surveyJson: any;
  surveyId: string;
}

export default function SurveyRunner({ surveyJson, surveyId }: Props) {
  const surveyModel = new Model(surveyJson);
  const [submitted, setSubmitted] = useState(false);

  surveyModel.onComplete.add(async (sender) => {
    await api.post(`/responses`, {
      surveyId,
      answers: sender.data,
      userId: "User-id"
    });
    setSubmitted(true);
  });

  if (submitted) return <p>Thank you for your response!</p>;

  return <Survey model={surveyModel} />;
}
