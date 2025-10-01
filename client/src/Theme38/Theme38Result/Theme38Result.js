// src/themes/Theme38/Theme38Result/Theme38Result.js
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { personalities } from "../data/personalities";
import { Share2, RotateCcw, Home } from "lucide-react";

const Theme38Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { personalityType, scores } = location.state || {};

  if (!personalityType) {
    navigate("/");
    return null;
  }

  const personality = personalities.find((p) => p.type === personalityType);

  if (!personality) {
    navigate("/");
    return null;
  }

  const handleRetakeTest = () => {
    navigate("/test");
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `I'm a ${personality.name} (${personality.type})!`,
        text: `I just discovered I'm a ${personality.name} personality type! ${personality.description}`,
        url: window.location.origin,
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(
        `I'm a ${personality.name} (${personality.type})! ${personality.description} Take the test at ${window.location.origin}`
      );
    }
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 hero-gradient bg-clip-text text-transparent">
            Your Personality Type
          </h1>
          <p className="text-muted-foreground text-lg">
            Discover what makes you unique
          </p>
        </div>

        {/* Main Result Card */}
        <Card className="card-gradient border-border/50 p-8 mb-8 glow-effect animate-slide-up">
          <div className="text-center mb-8">
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 animate-pulse-glow"
              style={{ backgroundColor: personality.color }}
            >
              {personality.icon}
            </div>

            <Badge variant="secondary" className="text-base px-4 py-2 mb-4">
              {personality.type}
            </Badge>

            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {personality.name}
            </h2>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {personality.description}
            </p>
          </div>

          {/* Traits */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {personality.traits.map((trait, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-sm px-4 py-2 border-psychology-deep/30 text-psychology-neutral hover:border-psychology-light transition-smooth"
              >
                {trait}
              </Badge>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg" onClick={handleShare}>
              <Share2 className="w-5 h-5" />
              Share Results
            </Button>

            <Button variant="outline" size="lg" onClick={handleRetakeTest}>
              <RotateCcw className="w-5 h-5" />
              Retake Test
            </Button>

            <Button variant="ghost" size="lg" onClick={() => navigate("/")}>
              <Home className="w-5 h-5" />
              Back Home
            </Button>
          </div>
        </Card>

        {/* Detailed Analysis */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="card-gradient border-border/50 p-6">
            <h3 className="text-xl font-bold mb-4 text-psychology-light">
              Your Cognitive Preferences
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Energy Direction:</span>
                <Badge variant="secondary">
                  {personalityType[0] === "E" ? "Extraverted" : "Introverted"}
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">
                  Information Processing:
                </span>
                <Badge variant="secondary">
                  {personalityType[1] === "S" ? "Sensing" : "Intuitive"}
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Decision Making:</span>
                <Badge variant="secondary">
                  {personalityType[2] === "T" ? "Thinking" : "Feeling"}
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">
                  Lifestyle Approach:
                </span>
                <Badge variant="secondary">
                  {personalityType[3] === "J" ? "Judging" : "Perceiving"}
                </Badge>
              </div>
            </div>
          </Card>

          <Card className="card-gradient border-border/50 p-6">
            <h3 className="text-xl font-bold mb-4 text-psychology-light">
              What This Means
            </h3>
            <div className="space-y-3 text-muted-foreground">
              <p className="text-sm leading-relaxed">
                Your personality type represents your natural preferences in how
                you:
              </p>
              <ul className="text-sm space-y-2 list-disc list-inside">
                <li>Focus your attention and energy</li>
                <li>Take in and process information</li>
                <li>Make decisions and judgments</li>
                <li>Approach the outside world</li>
              </ul>
              <p className="text-sm leading-relaxed">
                Remember, these are preferences, not limitations. You can
                develop skills in all areas!
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Theme38Result;
