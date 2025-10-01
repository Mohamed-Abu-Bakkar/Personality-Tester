// src/components/ui/badge.jsx
import React from "react";
import styled from "styled-components";

const StyledBadge = styled.span`
  display: inline-flex;
  align-items: center;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.25rem 0.625rem;
  transition: all 0.3s ease;

  &.badge-secondary {
    background-color: hsl(var(--secondary));
    color: hsl(var(--secondary-foreground));
    border: 1px solid hsl(var(--border));
  }

  &.badge-outline {
    background-color: transparent;
    border: 1px solid hsl(var(--psychology-deep) / 0.3);
    color: hsl(var(--psychology-neutral));
  }

  &.badge-outline:hover {
    border-color: hsl(var(--psychology-light));
  }
`;

export const Badge = ({
  variant = "secondary",
  className = "",
  children,
  ...props
}) => {
  return (
    <StyledBadge className={`badge-${variant} ${className}`} {...props}>
      {children}
    </StyledBadge>
  );
};
