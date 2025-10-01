// Theme38/styles.js - Exact conversion from theme38-styles.css
import styled, { createGlobalStyle } from "styled-components";

// Global Theme Styles - Exact copy from theme38-styles.css
export const GlobalThemeStyle = createGlobalStyle`
  /* Custom CSS Variables and Classes for Theme38 */
  
  :root {
    /* Exact HSL colors from actual site */
    --background: 240 10% 3.9%;
    --foreground: 0 0% 98%;
    --card: 240 10% 3.9%;
    --card-foreground: 0 0% 98%;
    --primary: 263 85% 65%;
    --primary-foreground: 0 0% 98%;
    --secondary: 240 4% 16%;
    --secondary-foreground: 0 0% 98%;
    --muted: 240 5% 16%;
    --muted-foreground: 240 5% 64%;
    --accent: 197 71% 73%;
    --accent-foreground: 240 6% 10%;
    --border: 240 6% 20%;
    --ring: 263 85% 65%;
    
    /* MBTI Psychology colors */
    --psychology-deep: 263 85% 65%;
    --psychology-light: 197 71% 73%;
    --psychology-accent: 290 84% 60%;
    --psychology-neutral: 240 5% 84%;
    
    /* Gradients */
    --gradient-hero: linear-gradient(135deg, hsl(var(--psychology-deep)), hsl(var(--psychology-accent)));
    --gradient-card: linear-gradient(145deg, hsl(var(--card)), hsl(240 6% 10%));
    --gradient-accent: linear-gradient(90deg, hsl(var(--psychology-light)), hsl(var(--accent)));
    
    /* Shadows */
    --shadow-glow: 0 0 40px hsl(var(--psychology-deep) / 0.3);
    --shadow-card: 0 10px 30px -10px hsl(0 0% 0% / 0.3);
  }
/* Apply Theme38 colors to the body */
body {
  background-color: hsl(var(--background))!important;
  color: hsl(var(--foreground)) !important;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  margin: 0;
  min-height: 100vh;
}

  /* Utility Classes */
  .text-foreground {
    color: hsl(var(--foreground));
  }

  .text-muted-foreground {
    color: hsl(var(--muted-foreground));
  }

  .text-psychology-deep {
    color: hsl(var(--psychology-deep));
  }

  .text-psychology-light {
    color: hsl(var(--psychology-light));
  }

  .text-psychology-neutral {
    color: hsl(var(--psychology-neutral));
  }

  .text-primary-foreground {
    color: hsl(var(--primary-foreground));
  }

  .border-border\\/50 {
    border-color: hsl(var(--border) / 0.5);
  }

  .border-psychology-deep\\/50 {
    border-color: hsl(var(--psychology-deep) / 0.5);
  }

  .border-psychology-deep\\/30 {
    border-color: hsl(var(--psychology-deep) / 0.3);
  }

  .hover\\:border-psychology-deep:hover {
    border-color: hsl(var(--psychology-deep));
  }

  .hover\\:border-psychology-light:hover {
    border-color: hsl(var(--psychology-light));
  }

  .hover\\:bg-psychology-deep\\/10:hover {
    background-color: hsl(var(--psychology-deep) / 0.1);
  }

  .hover\\:bg-white\\/10:hover {
    background-color: hsl(0 0% 100% / 0.1);
  }

  .hover\\:text-psychology-light:hover {
    color: hsl(var(--psychology-light));
  }

  .hover\\:text-primary-foreground:hover {
    color: hsl(var(--primary-foreground));
  }

  .bg-card\\/30 {
    background-color: hsl(var(--card) / 0.3);
  }

  .bg-background {
    background-color: hsl(var(--background));
  }

  /* Animations */
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }

  @keyframes pulse-glow {
    0% {
      box-shadow: 0 0 5px hsl(var(--psychology-deep) / 0.5);
    }
    100% {
      box-shadow: 0 0 20px hsl(var(--psychology-deep) / 0.8), 0 0 30px hsl(var(--psychology-accent) / 0.6);
    }
  }

  @keyframes slide-up {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
  }

  .animate-pulse-glow {
    animation: pulse-glow 2s ease-in-out infinite;
  }

  .animate-slide-up {
    animation: slide-up 0.6s ease-out;
  }

  .group:hover .group-hover\\:animate-pulse-glow {
    animation: pulse-glow 2s ease-in-out infinite;
  }

  .group:hover .group-hover\\:text-psychology-light {
    color: var(--psychology-light);
  }

  .group:hover .group-hover\\:bg-psychology-deep {
    background-color: var(--psychology-deep);
  }

  .group:hover .group-hover\\:text-primary-foreground {
    color: var(--primary-foreground);
  }

  /* Transitions */
  .transition-smooth {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* Hero gradient */
  .hero-gradient {
    background: var(--gradient-hero);
  }

  /* Background clip text */
  .bg-clip-text {
    -webkit-background-clip: text;
    background-clip: text;
  }

  .text-transparent {
    color: transparent;
  }

  /* Card gradient */
  .card-gradient {
    background: var(--gradient-card);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
  }

  /* Glow effect */
  .glow-effect {
    box-shadow: var(--shadow-glow);
  }

  .hover\\:glow-effect:hover {
    box-shadow: var(--shadow-glow);
    transform: translateY(-2px);
  }

  /* Spacing utilities */
  .space-y-4 > * + * {
    margin-top: 1rem;
  }

  .gap-2 {
    gap: 0.5rem;
  }

  .gap-4 {
    gap: 1rem;
  }

  .gap-6 {
    gap: 1.5rem;
  }

  /* Flexbox utilities */
  .flex {
    display: flex;
  }

  .flex-col {
    flex-direction: column;
  }

  .flex-wrap {
    flex-wrap: wrap;
  }

  .items-center {
    align-items: center;
  }

  .justify-between {
    justify-content: space-between;
  }

  .justify-center {
    justify-content: center;
  }

  .justify-start {
    justify-content: flex-start;
  }

  .flex-grow {
    flex-grow: 1;
  }

  /* Grid utilities */
  .grid {
    display: grid;
  }

  /* Text utilities */
  .text-xs {
    font-size: 0.75rem;
  }

  .text-sm {
    font-size: 0.875rem;
  }

  .text-base {
    font-size: 1rem;
  }

  .text-lg {
    font-size: 1.125rem;
  }

  .text-xl {
    font-size: 1.25rem;
  }

  .text-2xl {
    font-size: 1.5rem;
  }

  .text-4xl {
    font-size: 2.25rem;
  }

  .text-5xl {
    font-size: 3rem;
  }

  .text-7xl {
    font-size: 4.5rem;
  }

  .font-medium {
    font-weight: 500;
  }

  .font-bold {
    font-weight: 700;
  }

  .leading-relaxed {
    line-height: 1.625;
  }

  .text-center {
    text-align: center;
  }

  .text-left {
    text-align: left;
  }

  /* Width and height utilities */
  .w-full {
    width: 100%;
  }

  .w-8 {
    width: 2rem;
  }

  .w-16 {
    width: 4rem;
  }

  .h-full {
    height: 100%;
  }

  .h-auto {
    height: auto;
  }

  .h-8 {
    height: 2rem;
  }

  .h-16 {
    height: 4rem;
  }

  .h-2 {
    height: 0.5rem;
  }

  .min-h-screen {
    min-height: 100vh;
  }

  /* Margin and padding utilities */
  .p-4 {
    padding: 1rem;
  }

  .p-6 {
    padding: 1.5rem;
  }

  .p-8 {
    padding: 2rem;
  }

  .px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .py-6 {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }

  .py-20 {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }

  .mb-2 {
    margin-bottom: 0.5rem;
  }

  .mb-4 {
    margin-bottom: 1rem;
  }

  .mb-8 {
    margin-bottom: 2rem;
  }

  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }

  /* Border utilities */
  .border {
    border-width: 1px;
  }

  .border-2 {
    border-width: 2px;
  }

  .border-t {
    border-top-width: 1px;
  }

  .rounded-full {
    border-radius: 9999px;
  }

  /* Position utilities */
  .relative {
    position: relative;
  }

  .absolute {
    position: absolute;
  }

  .inset-0 {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  /* Z-index */
  .z-10 {
    z-index: 10;
  }

  /* Overflow */
  .overflow-hidden {
    overflow: hidden;
  }

  /* Cursor */
  .cursor-pointer {
    cursor: pointer;
  }

  /* Max width */
  .max-w-2xl {
    max-width: 42rem;
  }

  .max-w-3xl {
    max-width: 48rem;
  }

  .max-w-4xl {
    max-width: 56rem;
  }

  .max-w-5xl {
    max-width: 64rem;
  }

  .max-w-6xl {
    max-width: 72rem;
  }

  /* Opacity utilities */
  .opacity-30 {
    opacity: 0.3;
  }

  .opacity-90 {
    opacity: 0.9;
  }

  .text-primary-foreground-90 {
    color: hsl(var(--primary-foreground) / 0.9);
  }

  /* Responsive utilities */
  @media (min-width: 640px) {
    .sm\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    
    .sm\\:flex-row {
      flex-direction: row;
    }
  }

  @media (min-width: 768px) {
    .md\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    
    .md\\:text-2xl {
      font-size: 1.5rem;
    }
    
    .md\\:text-5xl {
      font-size: 3rem;
    }
    
    .md\\:text-7xl {
      font-size: 4.5rem;
    }
  }

  @media (min-width: 1024px) {
    .lg\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }
`;

// Optional styled components for convenience (you can use CSS classes instead)
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;
