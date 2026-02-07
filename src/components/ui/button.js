// src/components/ui/button.jsx
import React from "react";
import styled from "styled-components";
import { Button as MuiButton } from "@mui/material";

const StyledButton = styled(MuiButton)`
  && {
    border-radius: 10px;
    text-transform: none;
    font-weight: 600;
    transition: all 0.3s ease;

    &.variant-accent {
      background: #ffffff;
      color: black;
      &:hover {
        background: #014D4E ;
        color: white;
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(20, 184, 166, 0.4);
      }
    }

    &.variant-hero {
      background: #14b8a6;
      color: white;
      font-size: 1.125rem;
      padding: 1rem 2rem;
      &:hover {
        background: #0d9488;
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(20, 184, 166, 0.4);
      }
    }

    &.variant-ghost {
      background: transparent;
      color: hsl(var(--foreground) / 0.9);
      border: 1px solid hsl(var(--border));
      &:hover {
        background: hsl(var(--muted));
      }
    }

    &.variant-outline {
      background: transparent;
      color: hsl(var(--foreground));
      border: 1px solid hsl(var(--border));
      padding: 1.5rem;
      height: auto;
      justify-content: flex-start;
      text-align: left;
      &:hover {
        border-color: #14b8a6;
        background: rgba(20, 184, 166, 0.1);
        transform: translateY(-1px);
      }
    }

    &.size-lg {
      padding: 0.75rem 2rem;
      font-size: 1.125rem;
      min-height: 48px;
    }

    .lucide {
      margin-right: 0.5rem;
    }
  }
`;

export const Button = ({
  variant = "primary",
  size = "medium",
  className = "",
  children,
  asChild,
  ...props
}) => {
  const classes = `variant-${variant} size-${size} ${className}`;

  if (asChild && React.isValidElement(children)) {
    // For asChild, we need to pass the styled classes to the child component
    return React.cloneElement(children, {
      ...children.props,
      ...props,
      className: `MuiButton-root ${classes} ${children.props.className || ""}`,
      style: {
        borderRadius: "10px",
        textTransform: "none",
        fontWeight: 600,
        transition: "all 0.3s ease",
        background:
          variant === "accent" || variant === "hero"
            ? "#14b8a6"
            : variant === "ghost"
            ? "transparent"
            : "#14b8a6",
        color:
          variant === "accent" || variant === "hero"
            ? "white"
            : variant === "ghost"
            ? "hsl(var(--foreground) / 0.9)"
            : "white",
        border:
          variant === "ghost"
            ? "1px solid hsl(var(--border))"
            : variant === "outline"
            ? "1px solid hsl(var(--border))"
            : "none",
        padding: size === "lg" ? "0.75rem 2rem" : "0.5rem 1rem",
        fontSize: size === "lg" ? "1.125rem" : "1rem",
        ...children.props.style,
      },
    });
  }

  return (
    <StyledButton className={classes} {...props}>
      {children}
    </StyledButton>
  );
};
