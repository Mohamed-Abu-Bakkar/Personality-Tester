// Theme38Home/style.js
import styled, { keyframes } from "styled-components";
import { Button } from "@mui/material";

/* === Keyframes === */
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const floatSlow = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const glow = keyframes`
  0% { box-shadow: 0 0 0 rgba(255,77,77,0); }
  50% { box-shadow: 0 10px 30px rgba(255,77,77,0.12); }
  100% { box-shadow: 0 0 0 rgba(255,77,77,0); }
`;

/* Layout */
export const Page = styled.div`
  min-height: 100vh;
  background: var(--bg-background, #ff0000ff);
`;

export const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const HeroGradient = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.9;
  background: linear-gradient(
    180deg,
    rgba(13, 42, 64, 0.85),
    rgba(8, 18, 33, 0.9)
  );
  z-index: 0;
`;

export const HeroFloat = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.3;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  animation: ${floatSlow} 14s linear infinite;
  z-index: 0;
`;

export const Container = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 1200px;
  padding: 5rem 1.25rem;
  margin: 0 auto;
  color: var(--text-foreground, #0f172a);
`;

export const HeroText = styled.div`
  text-align: center;
  color: #fff;
  animation: ${fadeUp} 0.9s ease both;

  @media (min-width: 1024px) {
    text-align: left;
  }
`;

export const Tag = styled.span`
  display: inline-block;
  background: rgba(255, 77, 77, 0.12);
  color: #ff4d4d;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const Headline = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  font-size: clamp(2.5rem, 6vw, 4.25rem);
  line-height: 0.95;
  margin: 0 0 1rem 0;

  span {
    color: #ff4d4d;
    display: block;
  }
`;

export const Description = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.92);
  max-width: 60ch;
  margin: 0 auto 1.5rem;

  @media (min-width: 1024px) {
    margin: 0 0 1.5rem 0;
  }
`;

export const CTAs = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1.5rem;

  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
`;

export const PrimaryButton = styled(Button)`
  && {
    background: linear-gradient(90deg, #ff4d4d 0%, #d60000 100%);
    color: #fff;
    border-radius: 12px;
    padding: 12px 20px;
    font-weight: 700;
    text-transform: none;
    box-shadow: 0 8px 24px rgba(214, 0, 0, 0.18);
  }
`;

export const SecondaryButton = styled(Button)`
  && {
    background: transparent;
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 12px;
    padding: 12px 20px;
    text-transform: none;
    font-weight: 600;
  }
`;

export const FeaturesRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const FeatureCard = styled.div`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.02),
    rgba(255, 255, 255, 0.01)
  );
  border: 1px solid rgba(255, 255, 255, 0.04);
  padding: 1.25rem;
  border-radius: 1rem;
  text-align: center;
  transition: transform 0.28s ease, box-shadow 0.28s ease;
  will-change: transform;

  &:hover {
    transform: translateY(-8px);
    animation: ${glow} 1.2s ease forwards;
  }

  svg {
    color: #ff4d4d;
  }
`;

export const PersonalityGrid = styled.div`
  display: grid;
  gap: 1rem;
  margin-top: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const SmallFooter = styled.footer`
  padding: 3rem 1rem;
  border-top: 1px solid rgba(15, 23, 42, 0.06);
  text-align: center;
  color: rgba(15, 23, 42, 0.7);
  margin-top: 4rem;
`;
