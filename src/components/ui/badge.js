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
    background-color: #e6f7f5;
    color: #0d9488;
    border: 1px solid #99f6e4;
  }

  &.badge-outline {
    background-color: transparent;
    border: 1px solid rgba(20, 184, 166, 0.3);
    color: #0d9488;
  }

  &.badge-outline:hover {
    border-color: #14b8a6;
    background-color: rgba(20, 184, 166, 0.1);
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
