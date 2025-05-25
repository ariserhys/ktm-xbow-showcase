import { useRef } from "react";

const RacingHeritageSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-12 bg-gray-50" id="racing-heritage" ref={sectionRef}> {/* Reduced from py-20 */}
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="pulse-chip mb-4">
              <span>Racing Heritage</span>
            </div>
            <h2 className="section-title mb-6">Beyond ordinary to extraordinary performance</h2>
            <p className="text-lg text-gray-700 mb-6">
              The KTM X-BOW goes beyond conventional sports cars to deliver a pure driving experience
              that combines racing heritage with cutting-edge technology. This enables an unmatched
              connection between driver and machine, creating a driving experience that feels like
              piloting a race car on the road.
            </p>
            <ul className="space-y-4">
              {[
                "Race-inspired aerodynamics for maximum downforce and stability",
                "Carbon fiber monocoque chassis for exceptional rigidity and safety",
                "Professional-grade suspension system for precise handling",
                "500HP turbocharged engine for explosive acceleration"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-3 text-pulse-500">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="M22 4L12 14.01L9 11.01" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Image container div has been removed */}
        </div>
      </div>
    </section>
  );
};

export default RacingHeritageSection;
