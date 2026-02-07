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
      <div className="mb-8 animate-fade-in">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-muted-foreground font-medium">
            Question {questionNumber} of {totalQuestions}
          </span>
          <span className="text-sm gradient-text font-semibold">
            {Math.round(progress)}% Complete
          </span>
        </div>
        <Progress value={progress} className="h-2 transition-slow" />
      </div>

      <Card className="card-gradient border-border/50 p-8 md:p-10 animate-scale-in">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-foreground leading-relaxed">
          {question}
        </h2>

        <div className="space-y-3">
          {options.map((option, index) => (
            <Button
              key={index}
              variant="outline"
              className={`w-full p-6 h-auto text-left justify-start text-wrap hover:border-psychology-deep hover:bg-psychology-deep/10 hover:shadow-lg transition-smooth group animate-slide-up stagger-${index + 1}`}
              onClick={() => onAnswer(option.value)}
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full border-2 border-current flex items-center justify-center font-semibold group-hover:bg-psychology-deep group-hover:text-white group-hover:scale-110 transition-smooth">
                  {String.fromCharCode(65 + index)}
                </div>
                <span className="text-base leading-relaxed flex-1">{option.text}</span>
              </div>
            </Button>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default TestQuestion;
