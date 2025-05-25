
import React from "react";

const ImageShowcaseSection = () => {
  return (
    <section className="w-full pt-0 pb-8 sm:pb-12 bg-white" id="showcase">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-gray-900 mb-3 sm:mb-4">
            GT Race Car Performance for the Street
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            The KTM X-BOW GT-XR is the closest you can get to a purebred race car in a road-legal vehicle. 
            Experience untamed dynamics, radical design and pure enthusiasm in everyday life.
          </p>
        </div>
        
        {/* Main hero image */}
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant mx-auto max-w-4xl animate-on-scroll mb-8">
          <div className="w-full">
            <img 
              src="/lovable-uploads/1eb07e4d-a177-4004-a611-4f9a2063be48.png" 
              alt="KTM X-BOW GT-XR in motion on the track" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="bg-white p-4 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-display font-semibold mb-3 sm:mb-4">Engineering Mastery</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Built on the foundation of the KTM X-BOW GT2, which demonstrates its strengths with victories 
              and title wins on racetracks worldwide. Every fiber, every component, every detail is "READY TO RACE".
            </p>
          </div>
        </div>

        {/* Grid of feature images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Orange X-BOW in landscape */}
          <div className="rounded-2xl overflow-hidden shadow-elegant animate-on-scroll">
            <img 
              src="/lovable-uploads/14ccd954-7f54-4f37-96fd-324f7b2cbce1.png" 
              alt="KTM X-BOW GT-XR orange variant in scenic landscape" 
              className="w-full h-64 sm:h-80 object-cover"
            />
            <div className="bg-white p-4 sm:p-6">
              <h4 className="text-lg sm:text-xl font-semibold mb-2">Radical Design</h4>
              <p className="text-gray-600 text-sm sm:text-base">
                Lightweight construction with distinctive aerodynamics and the iconic electric jet fighter canopy.
              </p>
            </div>
          </div>

          {/* White X-BOW side profile */}
          <div className="rounded-2xl overflow-hidden shadow-elegant animate-on-scroll">
            <img 
              src="/lovable-uploads/f87df99a-1e6f-45af-bb01-7212b7e2421b.png" 
              alt="KTM X-BOW GT-XR white variant side profile" 
              className="w-full h-64 sm:h-80 object-cover"
            />
            <div className="bg-white p-4 sm:p-6">
              <h4 className="text-lg sm:text-xl font-semibold mb-2">Pure Performance</h4>
              <p className="text-gray-600 text-sm sm:text-base">
                Street-legal race car engineering with uncompromising performance for true individualists.
              </p>
            </div>
          </div>

          {/* Engine bay detail */}
          <div className="rounded-2xl overflow-hidden shadow-elegant animate-on-scroll">
            <img 
              src="/lovable-uploads/79f603c0-d7e0-497f-b3ce-4e4616a1cf5c.png" 
              alt="KTM X-BOW GT-XR engine bay with carbon fiber details" 
              className="w-full h-64 sm:h-80 object-cover"
            />
            <div className="bg-white p-4 sm:p-6">
              <h4 className="text-lg sm:text-xl font-semibold mb-2">Carbon Fiber Craftsmanship</h4>
              <p className="text-gray-600 text-sm sm:text-base">
                Extensive use of carbon fiber components for maximum strength and minimum weight.
              </p>
            </div>
          </div>

          {/* Wheel and brake detail */}
          <div className="rounded-2xl overflow-hidden shadow-elegant animate-on-scroll">
            <img 
              src="/lovable-uploads/e7b93243-0fe7-434d-bb2e-9c8a04a51bf1.png" 
              alt="KTM X-BOW GT-XR wheel with orange brake caliper detail" 
              className="w-full h-64 sm:h-80 object-cover"
            />
            <div className="bg-white p-4 sm:p-6">
              <h4 className="text-lg sm:text-xl font-semibold mb-2">Racing Technology</h4>
              <p className="text-gray-600 text-sm sm:text-base">
                High-performance braking system and racing wheels designed for track and street use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcaseSection;
