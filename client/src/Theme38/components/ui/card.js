// src/components/ui/card.jsx
import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  background: hsl(var(--card));
  border: 1px solid hsl(var(--border));
  border-radius: 12px;
  box-shadow: var(--shadow-card);
  transition: all 0.3s ease;

  &.card-gradient {
    background: var(--gradient-card);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
  }

  &.glow-effect:hover {
    box-shadow: var(--shadow-glow);
    transform: translateY(-2px);
  }

  &.hover\\:glow-effect:hover {
    box-shadow: var(--shadow-glow);
    transform: translateY(-2px);
  }
`;

export const Card = ({ className = "", children, ...props }) => {
  return (
    <StyledCard className={`${className}`} {...props}>
      {children}
    </StyledCard>
  );
};
