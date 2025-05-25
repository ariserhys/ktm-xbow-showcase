
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Zap, Wind, Settings, Shield, Palette } from "lucide-react";

const ImageShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeFeature, setActiveFeature] = useState(0);

  const showcaseImages = [
    {
      src: "/lovable-uploads/e230e96c-4bca-48c4-b4a1-1d949eea67c3.png",
      title: "GT Race Performance",
      description: "Pure race car performance in a street-legal package",
      category: "Performance"
    },
    {
      src: "/lovable-uploads/c9c390d2-5e7b-4d5d-baaf-318db739b3c5.png",
      title: "Racing Design Details",
      description: "Every element focused on functionality and performance",
      category: "Design"
    },
    {
      src: "/lovable-uploads/929701f8-cbd0-4d97-b84b-bae57c23462f.png",
      title: "Engine Technology",
      description: "Turbocharged five-cylinder engine with race-grade components",
      category: "Technology"
    },
    {
      src: "/lovable-uploads/da6bff58-9ea2-4d41-888d-8a6650b4a7f4.png",
      title: "Aerodynamic Excellence",
      description: "Race-optimized aerodynamics for maximum downforce",
      category: "Aerodynamics"
    },
    {
      src: "/lovable-uploads/c8d7cea5-3e7d-4de4-ad45-aea310cbf566.png",
      title: "Carbon Fiber Bodywork",
      description: "Lightweight construction with limitless customization",
      category: "Carbon"
    },
    {
      src: "/lovable-uploads/b1b1ff66-de10-4bbe-ac0a-286cd22a0df4.png",
      title: "Track Performance",
      description: "Built to thrill on both track and street",
      category: "Performance"
    }
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "GT Race Performance",
      description: "The KTM X-BOW GT-XR delivers pure race car performance in a package that's legal for the road. Engineered with lightweight materials, aggressive aerodynamics, and a powerful engine."
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Racing-Inspired Design",
      description: "Every element focused on functionality. Bold lines, sharp edges, and smooth surfaces come together in a sleek carbon exterior with jet fighter-style canopy."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Motorsport Technology",
      description: "Packed with motorsport-grade technology including carbon monocoque chassis, turbocharged five-cylinder engine, and removable steering wheel with LED display."
    },
    {
      icon: <Wind className="w-6 h-6" />,
      title: "Extreme Aerodynamics",
      description: "Race-proven aerodynamic principles deliver maximum downforce with carbon rear wing, optimized suspension, and AirCurtain system for enhanced grip."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [features.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll(".fade-in-element");
    elements.forEach((el, index) => {
      (el as HTMLElement).style.animationDelay = `${0.1 * (index + 1)}s`;
      observer.observe(el);
    });
    
    return () => {
      elements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white" id="showcase" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 px-6 py-3 rounded-full text-sm font-semibold mb-6 opacity-0 fade-in-element border border-orange-200/50 backdrop-blur-sm">
            <Play className="w-4 h-4 mr-2" />
            <span>Visual Experience</span>
          </div>
          <h2 className="section-title mb-6 opacity-0 fade-in-element bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Pure Racing DNA in<br className="hidden sm:block" />
            <span className="text-orange-600">Every Detail</span>
          </h2>
          <p className="section-subtitle mx-auto opacity-0 fade-in-element max-w-4xl">
            Experience the KTM X-BOW GT-XR through stunning visuals that showcase its racing heritage, cutting-edge technology, and uncompromising performance.
          </p>
        </div>

        {/* Main Carousel */}
        <div className="mb-16 opacity-0 fade-in-element">
          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent>
              {showcaseImages.map((image, index) => (
                <CarouselItem key={index}>
                  <Card className="border-0 shadow-none">
                    <CardContent className="p-0">
                      <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                        <img
                          src={image.src}
                          alt={image.title}
                          className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                            <div className="inline-flex items-center bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 rounded-full px-4 py-2 text-sm font-medium mb-4">
                              {image.category}
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-bold mb-2">{image.title}</h3>
                            <p className="text-white/90 text-lg max-w-2xl">{image.description}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden lg:flex" />
            <CarouselNext className="hidden lg:flex" />
          </Carousel>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-6 opacity-0 fade-in-element">
            {features.map((feature, index) => (
              <div
                key={index}
                className={cn(
                  "p-6 rounded-2xl border transition-all duration-500 cursor-pointer",
                  activeFeature === index
                    ? "bg-gradient-to-r from-orange-50 to-red-50 border-orange-200 shadow-lg"
                    : "bg-white border-gray-200 hover:border-orange-200 hover:shadow-md"
                )}
                onClick={() => setActiveFeature(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className={cn(
                    "rounded-2xl p-3 transition-colors duration-300",
                    activeFeature === index
                      ? "bg-gradient-to-r from-orange-500 to-red-600 text-white"
                      : "bg-gray-100 text-gray-600"
                  )}>
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={cn(
                      "text-xl font-bold mb-2 transition-colors duration-300",
                      activeFeature === index ? "text-orange-600" : "text-gray-900"
                    )}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative opacity-0 fade-in-element">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/lovable-uploads/00e2f72e-3d0e-4c2b-b8e9-a63d65ff9b7c.png"
                alt="KTM X-BOW GT-XR Track Performance"
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            {/* Floating stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-1">3.4s</div>
                <div className="text-sm text-gray-600 font-medium">0-100 km/h</div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-1">500</div>
                <div className="text-sm text-gray-600 font-medium">Horsepower</div>
              </div>
            </div>
          </div>
        </div>

        {/* Manufacturing Excellence */}
        <div className="mt-20 bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-3xl p-8 sm:p-12 text-white opacity-0 fade-in-element">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 rounded-full px-4 py-2 text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                Manufacturing Excellence
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-6">
                Crafted with <span className="text-orange-500">Precision</span>
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Every KTM X-BOW GT-XR is meticulously crafted using advanced manufacturing processes, premium materials, and rigorous quality control to ensure uncompromising performance and reliability.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-2xl font-bold text-orange-500 mb-2">100%</div>
                  <div className="text-gray-300 text-sm">Carbon Fiber Body</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-500 mb-2">FIA</div>
                  <div className="text-gray-300 text-sm">Safety Standards</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/lovable-uploads/1bf56bb1-7374-46af-8bf1-8ed791bd9cbd.png"
                alt="KTM Manufacturing Facility"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcase;
