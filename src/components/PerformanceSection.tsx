import React, { useEffect, useRef, useState } from "react";

const PerformanceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ticking = useRef(false);
  const lastScrollY = useRef(0);

  // More responsive timing function with shorter duration
  const cardStyle = {
    height: '60vh',
    maxHeight: '600px',
    borderRadius: '20px',
    transition: 'transform 0.5s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
    willChange: 'transform, opacity'
  };
  useEffect(() => {
    // Create intersection observer to detect when section is in view
    const observer = new IntersectionObserver(entries => {
      const [entry] = entries;
      setIsIntersecting(entry.isIntersecting);
    }, {
      threshold: 0.1
    } // Start observing when 10% of element is visible
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Optimized scroll handler using requestAnimationFrame
    const handleScroll = () => {
      if (!ticking.current) {
        lastScrollY.current = window.scrollY;
        window.requestAnimationFrame(() => {
          if (!sectionRef.current) return;
          const sectionRect = sectionRef.current.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          const totalScrollDistance = viewportHeight * 2;

          // Calculate the scroll progress
          let progress = 0;
          if (sectionRect.top <= 0) {
            progress = Math.min(1, Math.max(0, Math.abs(sectionRect.top) / totalScrollDistance));
          }

          // Determine which card should be visible based on progress
          if (progress >= 0.66) {
            setActiveCardIndex(2);
          } else if (progress >= 0.33) {
            setActiveCardIndex(1);
          } else {
            setActiveCardIndex(0);
          }
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Card visibility based on active index instead of direct scroll progress
  const isFirstCardVisible = isIntersecting;
  const isSecondCardVisible = activeCardIndex >= 1;
  const isThirdCardVisible = activeCardIndex >= 2;
  return <div ref={sectionRef} className="relative" style={{
    height: '300vh'
  }}>
      <section className="w-full h-screen py-10 md:py-16 sticky top-0 overflow-hidden bg-white" id="performance">
        <div className="container px-6 lg:px-8 mx-auto h-full flex flex-col">
          <div className="mb-2 md:mb-3">
            <div className="flex items-center gap-4 mb-2 md:mb-2 pt-8 sm:pt-6 md:pt-4">
              <div className="flex items-center gap-4">
                <div className="pulse-chip bg-gradient-to-r from-orange-500 to-red-600 text-white border-0 shadow-lg">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/20 text-white mr-3 font-bold">1</span>
                  <span className="font-semibold">Performance</span>
                </div>
              </div>
              <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-red-600 opacity-30"></div>
            </div>
          </div>
          
          <div ref={cardsContainerRef} className="relative flex-1 perspective-1000">
            {/* First Card - Engine Performance */}
            <div className={`absolute inset-0 overflow-hidden shadow-xl ${isFirstCardVisible ? 'animate-card-enter' : ''}`} style={{
            ...cardStyle,
            zIndex: 10,
            transform: `translateY(${isFirstCardVisible ? '90px' : '200px'}) scale(0.9)`,
            opacity: isFirstCardVisible ? 0.9 : 0
          }}>
              <div className="absolute inset-0 z-0 bg-gradient-to-b from-pulse-900/40 to-dark-900/80" style={{
              backgroundImage: "url('/background-section1.png')",
              backgroundSize: "cover",
              backgroundPosition: "top center",
              backgroundBlendMode: "overlay"
            }}></div>
              
              <div className="absolute top-4 right-4 z-20">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                  <span className="text-sm font-medium">Engine</span>
                </div>
              </div>
              
              <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center">
                <div className="max-w-lg">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-white font-bold leading-tight mb-4">
                    Raw Power Meets <span className="text-[#FC4D0A]">Precision Control</span>
                  </h3>
                  <p className="text-white/80 text-sm sm:text-base">
                    The 500HP turbocharged engine delivers explosive acceleration while maintaining perfect control.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Second Card - Aerodynamics */}
            <div className={`absolute inset-0 overflow-hidden shadow-xl ${isSecondCardVisible ? 'animate-card-enter' : ''}`} style={{
            ...cardStyle,
            zIndex: 20,
            transform: `translateY(${isSecondCardVisible ? activeCardIndex === 1 ? '55px' : '45px' : '200px'}) scale(0.95)`,
            opacity: isSecondCardVisible ? 1 : 0,
            pointerEvents: isSecondCardVisible ? 'auto' : 'none'
          }}>
              <div className="absolute inset-0 z-0 bg-gradient-to-b from-pulse-900/40 to-dark-900/80" style={{
              backgroundImage: "url('/background-section2.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundBlendMode: "overlay"
            }}></div>
              
              <div className="absolute top-4 right-4 z-20">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                  <span className="text-sm font-medium">Aerodynamics</span>
                </div>
              </div>
              
              <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center">
                <div className="max-w-lg">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-white font-bold leading-tight mb-4">
                    Race-Proven <span className="text-[#FC4D0A]">Aerodynamics</span>
                  </h3>
                  <p className="text-white/80 text-sm sm:text-base">
                    Advanced aerodynamic design provides exceptional downforce and stability at high speeds.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Third Card - Chassis */}
            <div className={`absolute inset-0 overflow-hidden shadow-xl ${isThirdCardVisible ? 'animate-card-enter' : ''}`} style={{
            ...cardStyle,
            zIndex: 30,
            transform: `translateY(${isThirdCardVisible ? activeCardIndex === 2 ? '15px' : '0' : '200px'}) scale(1)`,
            opacity: isThirdCardVisible ? 1 : 0,
            pointerEvents: isThirdCardVisible ? 'auto' : 'none'
          }}>
              <div className="absolute inset-0 z-0 bg-gradient-to-b from-pulse-900/40 to-dark-900/80" style={{
              backgroundImage: "url('/background-section3.png')",
              backgroundSize: "cover",
              backgroundPosition: "bottom center",
              backgroundBlendMode: "overlay"
            }}></div>
              
              <div className="absolute top-4 right-4 z-20">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                  <span className="text-sm font-medium">Chassis</span>
                </div>
              </div>
              
              <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center">
                <div className="max-w-lg">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-white font-bold leading-tight mb-4">
                    <span className="text-[#FC4D0A]">Carbon Fiber</span> Excellence
                  </h3>
                  <p className="text-white/80 text-sm sm:text-base">
                    Carbon fiber monocoque chassis delivers exceptional rigidity and safety while maintaining minimal weight.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default PerformanceSection;