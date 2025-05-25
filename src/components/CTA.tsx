
import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  const ctaRef = useRef<HTMLDivElement>(null);
  
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
    
    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }
    
    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);
  
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white relative" id="get-access" ref={ctaRef}>
      <div className="section-container relative z-10 opacity-0 px-4 sm:px-6">
        {/* Featured X-BOW image */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="/lovable-uploads/14ccd954-7f54-4f37-96fd-324f7b2cbce1.png" 
              alt="KTM X-BOW GT-XR orange racing through scenic landscape" 
              className="w-full h-64 sm:h-96 object-cover"
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto glass-card p-6 sm:p-8 md:p-10 lg:p-14 text-center overflow-hidden relative">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-pulse-100/30 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-24 sm:w-32 h-24 sm:h-32 bg-gray-100/50 rounded-full -translate-x-1/2 translate-y-1/2 blur-2xl"></div>
          
          <div className="pulse-chip mx-auto mb-4 sm:mb-6">
            <span>Limited Production</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Own the Ultimate <br className="hidden sm:inline" />
            <span className="text-pulse-500">Racing Machine</span>
          </h2>
          
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Experience pure performance with the KTM X-BOW GT-XR. Configure your dream machine and join the exclusive community of X-BOW owners.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#details" className="button-primary group flex items-center justify-center w-full sm:w-auto">
              Configure Your X-BOW
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#" className="button-secondary w-full sm:w-auto text-center">
              Find Dealer
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
