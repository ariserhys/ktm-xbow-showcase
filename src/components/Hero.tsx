import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, Zap, Award, Settings } from "lucide-react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Skip effect on mobile
    if (isMobile) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !imageRef.current) return;
      
      const {
        left,
        top,
        width,
        height
      } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      imageRef.current.style.transform = `perspective(1000px) rotateY(${x * 2.5}deg) rotateX(${-y * 2.5}deg) scale3d(1.02, 1.02, 1.02)`;
    };
    
    const handleMouseLeave = () => {
      if (!imageRef.current) return;
      imageRef.current.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)`;
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }
    
    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [isMobile]);
  
  useEffect(() => {
    // Skip parallax on mobile
    if (isMobile) return;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elements = document.querySelectorAll('.parallax');
      elements.forEach(el => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.dataset.speed || '0.1');
        const yPos = -scrollY * speed;
        element.style.setProperty('--parallax-y', `${yPos}px`);
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);
  
  return (
    <section 
      className="overflow-hidden relative bg-cover min-h-screen flex items-center" 
      id="hero" 
      style={{
        backgroundImage: 'url("/Header-background.webp")',
        backgroundPosition: 'center 30%', 
        padding: isMobile ? '120px 12px 60px' : '140px 20px 80px'
      }}
    >
      {/* Enhanced background overlay */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute -top-[10%] -right-[5%] w-1/2 h-[70%] bg-gradient-to-r from-orange-500/20 to-red-600/20 opacity-20 blur-3xl rounded-full"></div>
      
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10" ref={containerRef}>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          <div className="w-full lg:w-1/2">
            {/* Enhanced badge with better styling */}
            <div 
              className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-6 opacity-0 animate-fade-in" 
              style={{ animationDelay: "0.1s" }}
            >
              <Zap className="w-5 h-5 text-orange-500 mr-3" />
              <span className="text-gray-900 font-semibold">Pure Racing DNA</span>
            </div>
            
            {/* Enhanced main heading */}
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight opacity-0 animate-fade-in mb-6" 
              style={{ animationDelay: "0.3s" }}
            >
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                KTM X-BOW
              </span>
              <br />
              <span className="text-black">GT-XR</span>
            </h1>
            
            {/* Enhanced description */}
            <p 
              style={{ animationDelay: "0.5s" }} 
              className="text-lg sm:text-xl leading-relaxed opacity-0 animate-fade-in text-gray-800 font-medium mb-8 max-w-xl"
            >
              GT race car performance for the street. Engineered with lightweight materials, aggressive aerodynamics, and a powerful turbocharged engine that's built to thrill on both track and street.
            </p>

            {/* Performance stats */}
            <div 
              className="grid grid-cols-3 gap-6 mb-8 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-black">500</div>
                <div className="text-sm text-gray-600 font-medium">HP Power</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-black">3.4s</div>
                <div className="text-sm text-gray-600 font-medium">0-100 km/h</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-black">1,130</div>
                <div className="text-sm text-gray-600 font-medium">kg Weight</div>
              </div>
            </div>
            
            {/* Enhanced CTA buttons */}
            <div 
              className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" 
              style={{ animationDelay: "0.7s" }}
            >
              <a 
                href="#details" 
                className="group inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl w-full sm:w-auto"
              >
                Configure Your X-BOW
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              
              <a 
                href="#specifications" 
                className="inline-flex items-center justify-center bg-white/20 backdrop-blur-md border border-white/30 text-gray-900 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/30 w-full sm:w-auto"
              >
                <Settings className="mr-2 w-5 h-5" />
                View Specifications
              </a>
            </div>

            {/* Awards/certifications */}
            <div 
              className="flex items-center gap-6 mt-8 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.8s" }}
            >
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-orange-500" />
                <span className="text-sm text-gray-600 font-medium">FIA Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-orange-500" />
                <span className="text-sm text-gray-600 font-medium">Street Legal</span>
              </div>
            </div>
          </div>
          
          {/* Enhanced image section */}
          <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-3xl -z-10 shadow-2xl blur-xl"></div>
            <div className="relative transition-all duration-500 ease-out overflow-hidden rounded-3xl shadow-2xl border border-white/20">
              <img 
                ref={imageRef} 
                src="/lovable-uploads/0dab5121-4256-419b-8b0f-75bb84781b15.png" 
                alt="KTM X-BOW GT-XR" 
                className="w-full h-auto object-cover transition-transform duration-500 ease-out" 
                style={{ transformStyle: 'preserve-3d' }} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hidden lg:block absolute bottom-0 left-1/4 w-64 h-64 bg-orange-100/30 rounded-full blur-3xl -z-10 parallax" data-speed="0.05"></div>
    </section>
  );
};

export default Hero;
