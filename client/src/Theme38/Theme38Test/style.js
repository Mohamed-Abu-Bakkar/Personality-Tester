// Theme38Test/style.js
import styled, { keyframes } from "styled-components";
import { Button } from "@mui/material";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const PageWrapper = styled.div`
  min-height: 100vh;
  background: hsl(var(--background));
  padding: 2rem 1rem;
`;

export const Centered = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 6rem);
  animation: ${fadeIn} 0.6s ease both;
`;

export const CardWrapper = styled.div`
  width: 100%;
  max-width: 880px;
  margin: 0 auto;
`;

export const FooterBar = styled.div`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const PrimaryButton = styled(Button)`
  && {
    background: hsl(var(--primary));
    color: hsl(var(--primary-foreground));
    border-radius: 10px;
    text-transform: none;
    font-weight: 700;
    box-shadow: 0 2px 4px hsl(var(--primary) / 0.2);
  }
`;

export const SecondaryButton = styled(Button)`
  && {
    background: transparent;
    color: hsl(var(--foreground));
    border: 1px solid hsl(var(--border));
    border-radius: 10px;
    text-transform: none;
    font-weight: 600;
  }
`;
