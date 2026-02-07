// src/components/PersonalityCard.js
import React from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const PersonalityCard = ({ type, name, description, traits, icon, color }) => {
  return (
    <Card className="group h-full card-gradient border border-border/50 hover:border-psychology-deep/50 transition-slow hover-lift cursor-pointer overflow-hidden">
      <div className="p-6 h-full flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-smooth"
            style={{ backgroundColor: color, boxShadow: `0 8px 24px ${color}40` }}
          >
            {icon}
          </div>
          <Badge variant="secondary" className="text-xs font-medium transition-smooth group-hover:scale-105">
            {type}
          </Badge>
        </div>

        <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-psychology-deep transition-smooth">
          {name}
        </h3>

        <p className="text-muted-foreground mb-4 flex-grow text-sm leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {traits.map((trait, index) => (
            <Badge
              key={index}
              variant="outline"
              className="text-xs border-psychology-deep/30 text-psychology-neutral hover:border-psychology-deep hover:bg-psychology-deep/10 transition-fast"
            >
              {trait}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default PersonalityCard;
