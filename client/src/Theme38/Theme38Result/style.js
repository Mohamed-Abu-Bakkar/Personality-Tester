// src/themes/Theme38/Theme38Result/style.js
import styled, { keyframes } from "styled-components";
import { Button } from "@mui/material";

const pop = keyframes`
  from { transform: scale(.98); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
`;

export const Page = styled.div`
  min-height: 100vh;
  background: var(--bg-background, #fff);
  padding: 3rem 1rem;
  color: var(--text-foreground, #0f172a);
`;

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

/* Top result card */
export const ResultCard = styled.div`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.98), #fff);
  border-radius: 1rem;
  padding: 2rem;
  display: grid;
  gap: 1.25rem;
  grid-template-columns: 1fr;
  box-shadow: 0 6px 22px rgba(15, 23, 42, 0.05);
  animation: ${pop} 360ms ease both;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 280px;
    align-items: center;
  }
`;

/* Personality badge / icon */
export const PersonaBadge = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const PersonaIcon = styled.div`
  width: 88px;
  height: 88px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.25rem;
  background: ${(props) => props.color || "#ddd"};
  color: #fff;
  flex-shrink: 0;
`;

export const PersonaInfo = styled.div`
  h2 {
    margin: 0;
    font-family: "Montserrat", sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
  }
  p.desc {
    margin: 0.5rem 0 0;
    color: rgba(15, 23, 42, 0.8);
    font-family: "Poppins", sans-serif;
    line-height: 1.5;
  }
  span.type {
    display: inline-block;
    margin-top: 0.5rem;
    font-weight: 700;
    color: #ff4d4d;
    font-family: "Montserrat", sans-serif;
  }
`;

/* Buttons group */
export const Actions = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  justify-content: flex-end;

  @media (max-width: 767px) {
    justify-content: stretch;
  }
`;

export const PrimaryButton = styled(Button)`
  && {
    background: linear-gradient(90deg, #ff4d4d 0%, #d60000 100%);
    color: #fff;
    border-radius: 10px;
    padding: 10px 14px;
    font-weight: 700;
    text-transform: none;
  }
`;

export const GhostButton = styled(Button)`
  && {
    background: transparent;
    color: rgba(15, 23, 42, 0.9);
    border-radius: 10px;
    padding: 10px 14px;
    text-transform: none;
    border: 1px solid rgba(15, 23, 42, 0.06);
  }
`;

/* Detailed area */
export const Grid = styled.div`
  margin-top: 1.5rem;
  display: grid;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 320px;
  }
`;

export const AnalysisCard = styled.div`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.98), #fff);
  border-radius: 0.75rem;
  padding: 1.25rem;
  border: 1px solid rgba(15, 23, 42, 0.04);
  box-shadow: 0 4px 18px rgba(15, 23, 42, 0.03);
`;

/* trait list */
export const Traits = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

export const Trait = styled.li`
  background: rgba(15, 23, 42, 0.04);
  color: rgba(15, 23, 42, 0.9);
  padding: 0.45rem 0.75rem;
  border-radius: 999px;
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
`;

/* side card (quick facts / scores) */
export const SideCard = styled.div`
  border-radius: 0.75rem;
  background: linear-gradient(180deg, rgba(250, 250, 250, 1), #fff);
  padding: 1rem;
  border: 1px solid rgba(15, 23, 42, 0.04);
`;
