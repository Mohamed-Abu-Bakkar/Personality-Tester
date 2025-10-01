// src/components/ui/progress.jsx
import React from "react";
import styled from "styled-components";

const ProgressContainer = styled.div`
  width: 100%;
  background-color: hsl(var(--muted));
  border-radius: 9999px;
  overflow: hidden;

  &.h-2 {
    height: 8px;
  }
`;

const ProgressBar = styled.div`
  height: 100%;
  background: hsl(var(--psychology-deep));
  transition: width 0.3s ease;
  border-radius: 9999px;
`;

export const Progress = ({ value = 0, className = "", ...props }) => {
  return (
    <ProgressContainer className={className} {...props}>
      <ProgressBar style={{ width: `${Math.min(100, Math.max(0, value))}%` }} />
    </ProgressContainer>
  );
};
