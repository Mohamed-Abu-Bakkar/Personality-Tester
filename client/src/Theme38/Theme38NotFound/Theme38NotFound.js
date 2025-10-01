// src/themes/Theme38/Theme38NotFound/Theme38NotFound.js
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Page,
  Container,
  Title,
  Subtitle,
  Description,
  BackButton,
} from "./style";
import { Home } from "lucide-react";

const Theme38NotFound = () => {
  const navigate = useNavigate();

  return (
    <Page>
      <Container>
        <Title>404</Title>
        <Subtitle>Page Not Found</Subtitle>
        <Description>
          The page you’re looking for doesn’t exist or may have been moved.
          Let’s get you back to safety.
        </Description>
        <BackButton
          startIcon={<Home size={18} />}
          onClick={() => navigate("/")}
        >
          Back to Home
        </BackButton>
      </Container>
    </Page>
  );
};

export default Theme38NotFound;
