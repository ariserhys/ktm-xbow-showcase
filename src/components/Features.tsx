import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Zap, Shield, Settings, Timer, Award, Cog } from "lucide-react";
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}
const FeatureCard = ({
  icon,
  title,
  description,
  index
}: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  return <div ref={cardRef} className={cn("group bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 opacity-0 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:border-orange-200")} style={{
    animationDelay: `${0.1 * index}s`
  }}>
      <div className="flex items-center mb-6">
        <div className="rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 w-14 h-14 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <div className="ml-4">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">{title}</h3>
        </div>
      </div>
      <p className="text-gray-600 text-base sm:text-lg leading-relaxed">{description}</p>
    </div>;
};
const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const featuresData = [{
    icon: <Zap className="w-6 h-6" />,
    title: "Carbon Bodywork",
    description: "Ultra-lightweight carbon fiber construction providing exceptional strength-to-weight ratio and aerodynamic efficiency for superior performance.",
    index: 0
  }, {
    icon: <Shield className="w-6 h-6" />,
    title: "Carbon Fiber Monocoque",
    description: "Ultra-lightweight carbon fiber chassis provides exceptional rigidity and safety while maintaining minimal 1,130kg dry weight for optimal performance.",
    index: 1
  }, {
    icon: <Settings className="w-6 h-6" />,
    title: "7-Speed DSG Transmission",
    description: "Dual-clutch automatic transmission with lightning-fast gear changes and manual paddle shift control for ultimate driving precision.",
    index: 2
  }, {
    icon: <Timer className="w-6 h-6" />,
    title: "3.4s 0-100 km/h",
    description: "Explosive acceleration with race-inspired aerodynamics and advanced traction control systems for maximum grip and stability.",
    index: 3
  }, {
    icon: <Award className="w-6 h-6" />,
    title: "FIA Safety Standards",
    description: "Advanced safety features including integrated roll cage, racing harnesses, and collision protection meeting FIA racing safety standards.",
    index: 4
  }, {
    icon: <Cog className="w-6 h-6" />,
    title: "500HP AUDI TFSI Engine",
    description: "Turbocharged 2.5L five-cylinder engine delivering exceptional power with race-tuned performance characteristics and 581 Nm of torque.",
    index: 5
  }];
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll(".fade-in-element");
          elements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add("animate-fade-in");
            }, index * 100);
          });
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return <section className="py-16 sm:py-20 md:py-24 bg-white" id="features" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center gap-4 mb-12 sm:mb-16">
            <div className="flex items-center gap-4">
              <div className="pulse-chip bg-gradient-to-r from-orange-500 to-red-600 text-white border-0 shadow-lg">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/20 text-white mr-3 font-bold">4</span>
                <span className="font-semibold">Key Features</span>
              </div>
            </div>
            <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-red-600 opacity-30"></div>
          </div>
          
          <h2 className="section-title mb-6 opacity-0 fade-in-element">
            Unmatched Capabilities for <span className="text-orange-600">Every Need</span>
          </h2>
          <p className="section-subtitle mx-auto opacity-0 fade-in-element">
            From precision engineering to advanced technology, discover what makes the X-BOW GT-XR extraordinary.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuresData.map((feature, index) => <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} index={feature.index} />)}
        </div>

        {/* Additional performance stats */}
        <div className="mt-16 sm:mt-20 bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-3xl p-8 sm:p-12 text-white">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Performance at a Glance</h3>
            <p className="text-gray-300 text-lg">Every number tells the story of racing excellence</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-3xl sm:text-4xl font-bold text-orange-500 mb-2 group-hover:scale-110 transition-transform duration-300">500</div>
              <div className="text-gray-300 font-medium">Horsepower</div>
            </div>
            <div className="group">
              <div className="text-3xl sm:text-4xl font-bold text-orange-500 mb-2 group-hover:scale-110 transition-transform duration-300">581</div>
              <div className="text-gray-300 font-medium">Nm Torque</div>
            </div>
            <div className="group">
              <div className="text-3xl sm:text-4xl font-bold text-orange-500 mb-2 group-hover:scale-110 transition-transform duration-300">280</div>
              <div className="text-gray-300 font-medium">km/h Top Speed</div>
            </div>
            <div className="group">
              <div className="text-3xl sm:text-4xl font-bold text-orange-500 mb-2 group-hover:scale-110 transition-transform duration-300">1,130</div>
              <div className="text-gray-300 font-medium">kg Dry Weight</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Features;