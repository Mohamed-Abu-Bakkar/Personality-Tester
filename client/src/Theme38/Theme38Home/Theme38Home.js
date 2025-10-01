// Theme38Home/Theme38Home.js
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import PersonalityCard from "../components/PersonalityCard";
import { personalities } from "../data/personalities";
import {
  Brain,
  Users,
  TrendingUp,
  Award,
  ArrowRight,
  Play,
} from "lucide-react";

const Theme38Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
        <div
          className="absolute inset-0 animate-float opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-16.569 13.431-30 30-30v60c-16.569 0-30-13.431-30-30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground">
              Discover Your
              <span className="block text-psychology-light animate-pulse-glow">
                Personality Type
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Unlock the secrets of your mind with our comprehensive MBTI
              personality assessment. Understanding yourself is the first step
              to personal growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                variant="accent"
                size="lg"
                className="text-lg px-8 py-6"
              >
                <Link to="/test">
                  <Play className="w-6 h-6" />
                  Start Your Journey
                </Link>
              </Button>

              <Button
                variant="ghost"
                size="lg"
                className="text-lg px-8 py-6 text-primary-foreground hover:bg-white/10"
              >
                Learn More
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About MBTI Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              What is the{" "}
              <span className="text-psychology-deep">MBTI Test</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The Myers-Briggs Type Indicator is a powerful tool that helps you
              understand your psychological preferences and how you perceive the
              world around you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: <Brain className="w-8 h-8" />,
                title: "Scientific Approach",
                description:
                  "Based on Carl Jung's psychological theories and decades of research",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Personal Growth",
                description:
                  "Understand your strengths and areas for development",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Career Insights",
                description:
                  "Discover careers that align with your personality type",
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Relationship Building",
                description:
                  "Improve communication and understanding with others",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="card-gradient border-border/50 p-6 text-center hover:glow-effect transition-smooth group"
              >
                <div className="text-psychology-deep mb-4 flex justify-center group-hover:text-psychology-light transition-smooth">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Personality Types Section */}
      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              The{" "}
              <span className="text-psychology-deep">16 Personality Types</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Each personality type represents a unique combination of four
              psychological preferences. Discover which one resonates with you.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {personalities.map((personality, index) => (
              <div
                key={personality.type}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <PersonalityCard {...personality} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="card-gradient border-border/50 p-12 glow-effect">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Ready to{" "}
              <span className="text-psychology-deep">Discover Yourself</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Take our comprehensive personality assessment and unlock insights
              about your unique psychological makeup. The journey to
              self-discovery starts here.
            </p>

            <Button
              asChild
              variant="hero"
              size="lg"
              className="text-xl px-12 py-6"
            >
              <Link to="/test">
                <Play className="w-6 h-6" />
                Begin Assessment
              </Link>
            </Button>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            Understanding personality types can transform how you see yourself
            and others.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Theme38Home;
