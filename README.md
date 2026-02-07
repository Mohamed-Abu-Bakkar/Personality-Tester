# Personality Tester

![React](https://img.shields.io/badge/React-18-61dafb?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646cff?logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React%20Router-6-ca4245?logo=reactrouter&logoColor=white)
![Styled Components](https://img.shields.io/badge/Styled%20Components-6-db7093?logo=styledcomponents&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-6-007fff?logo=mui&logoColor=white)
![React Query](https://img.shields.io/badge/React%20Query-5-ff4154?logo=reactquery&logoColor=white)

A modern MBTI-style personality quiz built with React and Vite. The app guides users through a short assessment, calculates a personality type, and presents a polished results screen with share and retake actions.

## Features

- Interactive quiz flow with progress tracking
- Automatic MBTI-style type calculation
- Results page with personality summary, traits, and insights
- Smooth UI animations and a teal-based visual theme
- Share results via the Web Share API with clipboard fallback

## Tech Stack

- React 18
- Vite
- React Router
- Styled Components + MUI
- React Query
- Lucide Icons

## Getting Started

Install dependencies and start the dev server:

```bash
pnpm install
pnpm run dev
```

Build for production:

```bash
pnpm run build
```

Preview the production build:

```bash
pnpm run preview
```

## Scripts

- `pnpm run dev` - Start the development server
- `pnpm run build` - Build for production
- `pnpm run preview` - Preview the production build
- `pnpm run lint` - Run ESLint

## Project Structure

```
src/
  App.jsx                # App shell and routing
  Home/                  # Landing page sections
  Test/                  # Quiz flow
  Result/                # Results view
  components/            # Reusable UI components
  data/                  # Question and personality datasets
  index.css              # Global styles and theme tokens
```

## Data and Scoring

- Questions live in `src/data/questions.js`.
- Personality profiles live in `src/data/personalities.js`.
- Scores are tallied across four dimensions and mapped to a 4-letter type.

## Routes

- `/` - Home page
- `/test` - Quiz experience
- `/result` - Results summary

## Customization

- Update colors and animations in `src/index.css`.
- Edit content and sections in `src/Home/Home.js`.
- Adjust question sets and scoring in `src/data/questions.js`.
