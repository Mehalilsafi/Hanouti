'use client'

import React, { useState } from 'react';
import { ChevronRight, Zap, Globe, Truck, BarChart3, Bot, Users, Target, Award, ArrowRight, Star, Sparkles } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Stat {
  number: string;
  label: string;
}

interface TeamMember {
  name: string;
  role: string;
  description: string;
}

export default function AboutPage(): React.JSX.Element {
  const [activeFeature, setActiveFeature] = useState<number>(0);

  const features: Feature[] = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI-Powered Landing Pages",
      description: "Create stunning, converting landing pages in minutes with our advanced AI technology tailored for the Algerian market."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Multi-Platform Integration",
      description: "Seamlessly connect with Meta Pixel, TikTok Ads, and other essential marketing platforms to maximize your reach."
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Delivery Partners",
      description: "Integrated with local Algerian delivery companies for smooth, reliable shipping across all 48 wilayas."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Smart Analytics",
      description: "Track performance, optimize conversions, and grow your business with comprehensive analytics dashboard."
    }
  ];

  const stats: Stat[] = [
    { number: "10,000+", label: "Active Merchants" },
    { number: "500K+", label: "Products Sold" },
    { number: "48", label: "Wilayas Covered" },
    { number: "99.9%", label: "Uptime" }
  ];

  const team: TeamMember[] = [
    { name: "Ahmed Benali", role: "Founder & CEO", description: "E-commerce veteran with 10+ years experience in the Algerian market" },
    { name: "Fatima Djebar", role: "Head of AI", description: "AI specialist focused on Arabic language processing and local market adaptation" },
    { name: "Yacine Brahimi", role: "Head of Operations", description: "Expert in logistics and delivery solutions across North Africa" }
  ];

  return (
    <div className="bg-bg-main text-text-base">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-bg-main via-bg-secondary/20 to-primary/10"></div>
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-accent/20 to-text-highlight/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center z-10">
          {/* Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3 mb-8 hover:scale-105 transition-transform duration-300">
            <Sparkles className="w-5 h-5 text-primary mr-3 animate-spin" />
            <span className="text-text-highlight font-semibold">The Future of Algerian E-commerce</span>
            <Star className="w-4 h-4 text-accent ml-3" />
          </div>
          
          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-tight">
            <span className="block bg-gradient-to-r from-text-highlight via-primary to-accent bg-clip-text text-transparent animate-pulse">
              HANOUTI
            </span>
            <span className="block text-3xl md:text-4xl lg:text-5xl font-bold text-text-base/80 mt-4">
              Built for Algeria, Powered by AI
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-xl md:text-2xl lg:text-3xl text-text-base/70 max-w-5xl mx-auto leading-relaxed mb-12 font-light">
            We're not just another e-commerce platform. We're the bridge between 
            <span className="text-primary font-semibold"> traditional Algerian commerce </span>
            and the 
            <span className="text-accent font-semibold"> digital future</span>.
          </p>
          
          {/* Key Features Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { icon: <Bot className="w-5 h-5" />, text: "AI Landing Pages" },
              { icon: <Globe className="w-5 h-5" />, text: "Meta & TikTok Integration" },
              { icon: <Truck className="w-5 h-5" />, text: "48 Wilayas Delivery" },
              { icon: <BarChart3 className="w-5 h-5" />, text: "Smart Analytics" }
            ].map((feature, index) => (
              <div key={index} className="inline-flex items-center bg-bg-secondary/30 backdrop-blur-sm border border-text-highlight/20 rounded-full px-6 py-3 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 cursor-pointer group">
                <span className="text-accent group-hover:text-primary transition-colors mr-3">
                  {feature.icon}
                </span>
                <span className="text-text-highlight font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 flex items-center">
              Discover Our Story
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border-2 border-text-highlight/30 text-text-highlight px-8 py-4 rounded-2xl font-bold text-lg hover:bg-text-highlight/10 hover:border-text-highlight/60 transition-all duration-300">
              See What We've Built
            </button>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-text-highlight/40 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-text-highlight/60 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center bg-primary/10 rounded-full px-4 py-2 mb-6">
                <Target className="w-4 h-4 text-primary mr-2" />
                <span className="text-primary font-medium">Our Mission</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-text-highlight mb-6">
                Empowering Algerian Entrepreneurs
              </h2>
              <p className="text-lg text-text-base/80 mb-8 leading-relaxed">
                We believe every Algerian has the potential to build a successful online business. 
                That's why we created Hanouti—to break down the technical barriers and make 
                e-commerce accessible to everyone, from Algiers to Tamanrasset.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <ChevronRight className="w-5 h-5 text-accent mr-3" />
                  <span className="text-text-base">Democratizing e-commerce technology</span>
                </div>
                <div className="flex items-center">
                  <ChevronRight className="w-5 h-5 text-accent mr-3" />
                  <span className="text-text-base">Supporting local businesses</span>
                </div>
                <div className="flex items-center">
                  <ChevronRight className="w-5 h-5 text-accent mr-3" />
                  <span className="text-text-base">Creating jobs across Algeria</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-bg-secondary to-primary/20 rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-bg-main rounded-xl p-6 transform -rotate-3">
                  <h3 className="text-2xl font-bold text-text-highlight mb-4">Why Algeria?</h3>
                  <p className="text-text-base/80">
                    Algeria's e-commerce market is growing rapidly, but entrepreneurs face unique challenges. 
                    Local payment methods, delivery logistics, and cultural nuances require specialized solutions. 
                    That's exactly what we provide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-highlight mb-6">
              Built for Algeria, Powered by AI
            </h2>
            <p className="text-lg text-text-base/80 max-w-3xl mx-auto">
              Every feature is designed with the Algerian market in mind, from language support to local integrations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`bg-bg-main rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:transform hover:scale-105 ${
                  activeFeature === index ? 'ring-2 ring-primary shadow-2xl' : 'hover:shadow-xl'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className={`inline-flex p-3 rounded-xl mb-6 ${
                  activeFeature === index ? 'bg-primary text-white' : 'bg-accent/10 text-accent'
                }`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-text-highlight mb-4">{feature.title}</h3>
                <p className="text-text-base/80 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-highlight mb-6">
              Growing Together
            </h2>
            <p className="text-lg text-text-base/80">
              These numbers represent real Algerian entrepreneurs building their dreams
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-110 transition-all duration-300">
                <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-6 mb-4 shadow-lg group-hover:shadow-2xl">
                  <div className="text-3xl md:text-4xl font-bold text-white">{stat.number}</div>
                </div>
                <div className="text-text-base/80 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-accent/10 rounded-full px-4 py-2 mb-6">
              <Users className="w-4 h-4 text-accent mr-2" />
              <span className="text-accent font-medium">Our Team</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-text-highlight mb-6">
              The Minds Behind Hanouti
            </h2>
            <p className="text-lg text-text-base/80 max-w-3xl mx-auto">
              A passionate team of Algerian entrepreneurs and technologists united by one vision: 
              making e-commerce accessible to everyone.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-bg-main rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-text-highlight mb-2">{member.name}</h3>
                <div className="text-accent font-medium mb-4">{member.role}</div>
                <p className="text-text-base/80 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-primary/10 rounded-full px-6 py-3 mb-8">
            <Award className="w-5 h-5 text-primary mr-3" />
            <span className="text-primary font-medium">Our Vision</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-text-highlight mb-8">
            The Future of Algerian E-commerce
          </h2>
          <p className="text-xl text-text-base/80 leading-relaxed mb-12">
            We envision an Algeria where anyone with a great product idea can build a thriving online business. 
            Where technology empowers rather than intimidates. Where local entrepreneurs compete globally 
            while staying rooted in their communities.
          </p>
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Join the Revolution</h3>
            <p className="text-lg opacity-90">
              Together, we're not just building an e-commerce platform—we're building the future of business in Algeria.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}