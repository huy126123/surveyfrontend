import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import * as Survey from 'survey-react';
import 'survey-react/survey.css';

function TakeSurvey() {
  const { id } = useParams();
  const [surveyJson, setSurveyJson] = useState<any>(null);

  useEffect(() => {
    axios.get(`https://survey-backend-hm76.onrender.com/surveys/${id}`).then(res => setSurveyJson(res.data.json));
  }, [id]);

  const handleComplete = (survey: any) => {
    axios.post('https://survey-backend-hm76.onrender.comresponses', {
      surveyId: id,
      userId: 'mock-user-id',
      answers: survey.data,
    });
  };

  return surveyJson ? <Survey.Survey json={surveyJson} onComplete={handleComplete} /> : <div>Loading...</div>;
}

export default TakeSurvey;
