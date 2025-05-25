import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Zap, Shield, Wind, Monitor, Layers, Cog } from "lucide-react";

const TechnicalFeatures = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const technicalFeatures = [{
    icon: <Zap className="w-8 h-8" />,
    title: "AUDI 2.5 LITRE FIVE-CYLINDER TFSI",
    description: "At the heart of the machine is the legendary 2.5 litre, five-cylinder engine manufactured by Audi AG",
    details: ["Lighter, more compact, more powerful and more efficient than comparable engines", "Enormous amounts of torque available at low revs with characteristic tone", "Perfect match with the KTM X-BOW GT-XR's radical philosophy", "Crowned 'engine of the year' on nine separate occasions", "World's most powerful production five-cylinder engine", "Latest in a long line of successful Audi engines that have shone on racetracks"],
    image: "/ktm-xbow-images/929701f8-cbd0-4d97-b84b-bae57c23462f.png"
  }, {
    icon: <Layers className="w-8 h-8" />,
    title: "Carbon Bodywork",
    description: "Lightweight construction with limitless customization possibilities",
    details: ["High-density carbon fiber reduces weight while boosting rigidity", "Available in matte or glossy carbon finishes", "Near-infinite custom paint combinations", "Clear-coated carbon finish options"],
    image: "/ktm-xbow-images/c8d7cea5-3e7d-4de4-ad45-aea310cbf566.png"
  }, {
    icon: <Wind className="w-8 h-8" />,
    title: "Advanced Aerodynamics",
    description: "Race-proven aerodynamic principles for maximum performance",
    details: ["Carbon rear wing ensures grip and stability at speed", "Optimized suspension geometry sharpens handling", "Underbody ground effect design increases downforce", "AirCurtain system for enhanced ground-sealing grip"],
    image: "/ktm-xbow-images/da6bff58-9ea2-4d41-888d-8a6650b4a7f4.png"
  }];

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
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50" id="technical-features" ref={sectionRef}>
      <div className="section-container">
        {/* Enhanced section header */}
        <div className="text-center mb-12 sm:mb-20">
          <div className="flex items-center gap-4 mb-12 sm:mb-16">
            <div className="flex items-center gap-4">
              <div className="pulse-chip bg-gradient-to-r from-orange-500 to-red-600 text-white border-0 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/20 text-white mr-3 font-bold">3</span>
                <span className="font-semibold">Technical Innovation</span>
              </div>
            </div>
            <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-red-600 opacity-30 hover:opacity-50 transition-opacity duration-300"></div>
          </div>
          
          <h2 className="section-title mb-6 opacity-0 fade-in-element bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent hover:from-orange-600 hover:to-red-600 transition-all duration-500 cursor-default">
            Born on the Track,<br className="hidden sm:block" />
            <span className="text-orange-600">Engineered for the Road</span>
          </h2>
          <p className="section-subtitle mx-auto opacity-0 fade-in-element max-w-4xl hover:text-gray-700 transition-colors duration-300">
            The X-BOW GT-XR is packed with motorsport-grade technology, refined through extreme testing to deliver uncompromising performance.
          </p>
        </div>

        {/* Enhanced feature sections */}
        <div className="space-y-16 sm:space-y-20">
          {technicalFeatures.map((feature, index) => (
            <div 
              key={index} 
              className={cn(
                "grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center opacity-0 fade-in-element group hover:bg-white/50 rounded-3xl p-6 transition-all duration-500",
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              )}
            >
              <div className={cn("space-y-6", index % 2 === 1 ? "lg:col-start-2" : "")}>
                <div className="flex items-center space-x-4">
                  <div className="rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 p-4 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">{feature.title}</h3>
                  </div>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
                
                <div className="space-y-3">
                  {feature.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start space-x-3 hover:translate-x-2 transition-transform duration-300 cursor-default">
                      <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0 hover:bg-red-500 transition-colors duration-300"></div>
                      <p className="text-gray-700 hover:text-gray-900 transition-colors duration-300">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className={cn("relative", index % 2 === 1 ? "lg:col-start-1" : "")}>
                <div className="rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:scale-105">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-[400px] sm:h-[500px] object-cover hover:scale-110 transition-transform duration-700 cursor-pointer" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced action images */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 opacity-0 fade-in-element">
          <div className="relative rounded-2xl overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-500 cursor-pointer">
            <img 
              src="/ktm-xbow-images/b5ccb088-c3b8-400c-aa69-8be542f95bec.png" 
              alt="KTM X-BOW GT-XR in Motion" 
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/70 transition-all duration-300">
              <div className="absolute bottom-4 left-4 text-white transform group-hover:translate-y-[-4px] transition-transform duration-300">
                <h4 className="font-bold text-lg group-hover:text-orange-300 transition-colors duration-300">Dynamic Performance</h4>
                <p className="text-sm text-white/90 group-hover:text-white transition-colors duration-300">Track-proven capabilities</p>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-500 cursor-pointer">
            <img 
              src="/ktm-xbow-images/4bf7ffda-90cc-4230-ae32-6bf7b5a4b14f.png" 
              alt="KTM X-BOW GT-XR Street Legal" 
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/70 transition-all duration-300">
              <div className="absolute bottom-4 left-4 text-white transform group-hover:translate-y-[-4px] transition-transform duration-300">
                <h4 className="font-bold text-lg group-hover:text-orange-300 transition-colors duration-300">Street Legal Racing</h4>
                <p className="text-sm text-white/90 group-hover:text-white transition-colors duration-300">Road and track ready</p>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-500 cursor-pointer md:col-span-2 lg:col-span-1">
            <img 
              src="/ktm-xbow-images/a25ccc78-155c-4f8a-9073-eaa221984b83.png" 
              alt="KTM X-BOW GT-XR Mountain Road" 
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/70 transition-all duration-300">
              <div className="absolute bottom-4 left-4 text-white transform group-hover:translate-y-[-4px] transition-transform duration-300">
                <h4 className="font-bold text-lg group-hover:text-orange-300 transition-colors duration-300">Ultimate Freedom</h4>
                <p className="text-sm text-white/90 group-hover:text-white transition-colors duration-300">Anywhere, anytime performance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalFeatures;
