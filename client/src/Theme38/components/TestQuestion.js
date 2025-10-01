// src/components/TestQuestion.js
import React from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";

const TestQuestion = ({
  question,
  options,
  progress,
  onAnswer,
  questionNumber,
  totalQuestions,
}) => {
  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-muted-foreground">
            Question {questionNumber} of {totalQuestions}
          </span>
          <span className="text-sm text-psychology-light font-medium">
            {Math.round(progress)}% Complete
          </span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <Card className="card-gradient border-border/50 p-8 animate-slide-up">
        <h2 className="text-2xl font-bold mb-8 text-center text-foreground leading-relaxed">
          {question}
        </h2>

        <div className="space-y-4">
          {options.map((option, index) => (
            <Button
              key={index}
              variant="outline"
              className="w-full p-6 h-auto text-left justify-start text-wrap hover:border-psychology-deep hover:bg-psychology-deep/10 transition-smooth group"
              onClick={() => onAnswer(option.value)}
            >
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center group-hover:bg-psychology-deep group-hover:text-primary-foreground transition-smooth">
                  {String.fromCharCode(65 + index)}
                </div>
                <span className="text-base leading-relaxed">{option.text}</span>
              </div>
            </Button>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default TestQuestion;
