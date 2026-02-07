// Home/Home.js
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

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Professional Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Solid Teal Mesh Background */}
        <div className="absolute inset-0 hero-mesh"></div>

        {/* Overlay effect */}
        <div className="absolute inset-0 hero-overlay"></div>

        {/* Animated Teal Shapes */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ backgroundColor: '#5eead4' }}></div>
          <div className="absolute top-40 right-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ backgroundColor: '#2dd4bf', animationDelay: '2s' }}></div>
          <div className="absolute -bottom-20 left-1/3 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ backgroundColor: '#99f6e4', animationDelay: '4s' }}></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Discover Your
              <span className="block text-[#014D4E] mt-2">
                Personality Type
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Unlock the secrets of your mind with our comprehensive MBTI
              personality assessment. Understanding yourself is the first step
              to personal growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <Button
                asChild
                variant="accent"
                size="lg"
                className="text-lg px-8 py-6 btn-shine hover-lift transition-smooth"
              >
                <Link to="/test">
                  <Play className="w-6 h-6" />
                </Link>
                Start Your Journey

              </Button>

              <Button
                variant="ghost"
                size="lg"
                className="text-lg px-8 py-6 text-white hover:bg-white/10 transition-smooth"
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
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              What is the{" "}
              <span className="gradient-text">MBTI Test</span>?
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
                className={`card-gradient border-border/50 p-6 text-center hover-lift group animate-scale-in stagger-${index + 1}`}
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
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              The{" "}
              <span className="gradient-text">16 Personality Types</span>
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
                className="animate-scale-in hover-lift"
                style={{ animationDelay: `${index * 0.05}s` }}
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
          <Card className="card-gradient border-border/50 p-12 animate-scale-in glow-effect">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Ready to{" "}
              <span className="gradient-text">Discover Yourself</span>?
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
              className="text-xl px-12 py-6 btn-shine hover-lift"
            >
              <Link to="/test">
                <Play className="w-6 h-6" />

              </Link>
              Begin Assessment
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

export default Home;
