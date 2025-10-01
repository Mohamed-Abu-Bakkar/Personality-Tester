// Theme38Test/Theme38Test.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TestQuestion from "../components/TestQuestion";
import { questions } from "../data/questions";

const Theme38Test = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ EI: 0, SN: 0, TF: 0, JP: 0 });

  const handleAnswer = (selectedValue) => {
    const question = questions[currentQuestion];
    const selectedOption = question.options.find(
      (opt) => opt.value === selectedValue
    );

    if (selectedOption?.dimensions) {
      setScores((prevScores) => ({
        EI: prevScores.EI + (selectedOption.dimensions.EI || 0),
        SN: prevScores.SN + (selectedOption.dimensions.SN || 0),
        TF: prevScores.TF + (selectedOption.dimensions.TF || 0),
        JP: prevScores.JP + (selectedOption.dimensions.JP || 0),
      }));
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate personality type and navigate to results
      const personalityType = calculatePersonalityType(
        scores,
        selectedOption?.dimensions || {}
      );
      navigate("/result", { state: { personalityType, scores } });
    }
  };

  const calculatePersonalityType = (finalScores, lastDimensions) => {
    // Add the last answer's dimensions to final calculation
    const adjustedScores = {
      EI: finalScores.EI + (lastDimensions.EI || 0),
      SN: finalScores.SN + (lastDimensions.SN || 0),
      TF: finalScores.TF + (lastDimensions.TF || 0),
      JP: finalScores.JP + (lastDimensions.JP || 0),
    };

    let type = "";
    type += adjustedScores.EI >= 0 ? "E" : "I";
    type += adjustedScores.SN >= 0 ? "S" : "N";
    type += adjustedScores.TF >= 0 ? "T" : "F";
    type += adjustedScores.JP >= 0 ? "J" : "P";

    return type;
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-8">
      <TestQuestion
        question={questions[currentQuestion].question}
        options={questions[currentQuestion].options}
        progress={progress}
        onAnswer={handleAnswer}
        questionNumber={currentQuestion + 1}
        totalQuestions={questions.length}
      />
    </div>
  );
};

export default Theme38Test;
