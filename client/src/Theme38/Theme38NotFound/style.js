// src/themes/Theme38/Theme38NotFound/style.js
import styled from "styled-components";
import { Button } from "@mui/material";

export const Page = styled.div`
  min-height: 100vh;
  background: hsl(var(--background));
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem;
`;

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 6rem;
  font-weight: 900;
  font-family: "Montserrat", sans-serif;
  margin: 0;
  color: hsl(var(--foreground));
`;

export const Subtitle = styled.h2`
  font-size: 2rem;
  margin-top: 1rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
`;

export const Description = styled.p`
  margin: 1rem auto 2rem;
  max-width: 480px;
  font-family: "Poppins", sans-serif;
  color: hsl(var(--muted-foreground));
  line-height: 1.6;
`;

export const BackButton = styled(Button)`
  && {
    background: hsl(var(--primary));
    color: hsl(var(--primary-foreground));
    border-radius: 10px;
    padding: 10px 18px;
    font-weight: 700;
    text-transform: none;
    box-shadow: 0 2px 4px hsl(var(--primary) / 0.2);
  }
`;
