import React from "react";
const SpecsSection = () => {
  return <section className="w-full py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-white" id="specifications">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header with enhanced badge and line */}
        <div className="flex items-center gap-4 mb-12 sm:mb-20">
          <div className="flex items-center gap-4">
            <div className="pulse-chip bg-gradient-to-r from-orange-500 to-red-600 text-white border-0 shadow-lg">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/20 text-white mr-3 font-bold">2</span>
              <span className="font-semibold">Technology</span>
            </div>
          </div>
          <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-red-600 opacity-30"></div>
        </div>
        
        {/* Enhanced main content with better typography and layout */}
        <div className="max-w-6xl pl-4 sm:pl-8">
          <div className="mb-12">
            <h2 className="text-sm uppercase tracking-wider text-orange-600 font-semibold mb-4">
              Engineering Excellence
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-8 text-gray-900">
              Pure Race Technology
            </h3>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8">
                Developing a super sportscar is like climbing a mountain of speed. You need to have a plan if you want to reach the summit, but you also need to train hard to push your own boundaries.
              </p>
              
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
                All of the underlying ideas, concepts and innovations for the KTM X-BOW GT-XR must first be proven on the racetrack. Our journey began in 2008 with the first KTM X-BOW. Inspired by LMP and GT racing cars, every technical detail of the KTM X-BOW GT-XR has been developed to deliver absolute performance.
              </p>
              
              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 sm:p-8 rounded-2xl border-l-4 border-orange-500 mb-12">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
                  What we have created is an uncompromising driving machine designed for lightweight and aerodynamic efficiency. Components tried and tested on the racetrack, such as the jet fighter canopy, the ultra-light carbon monocoque, the powerful five-cylinder engine and the removable steering wheel with integrated LED display are not available in this combination in any other road-legal super sportscar.
                </p>
              </div>
            </div>

            {/* Detailed Technical Specifications */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Engine Specifications */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">Engine</h4>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Power</span>
                    <span className="text-gray-900 font-bold">368 kW (500 HP)</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Max. Torque</span>
                    <span className="text-gray-900 font-bold">581 Nm @ 5550 rpm</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Displacement</span>
                    <span className="text-gray-900 font-bold">2480 cm³</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Design</span>
                    <span className="text-gray-900 font-bold text-right">5-Cylinder Turbo</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Transmission</span>
                    <span className="text-gray-900 font-bold">7-Speed DSG</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-600 font-medium">Fuel Consumption</span>
                    <span className="text-gray-900 font-bold">9.1L/100km</span>
                  </div>
                </div>
              </div>

              {/* Chassis & Performance */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">Chassis & Performance</h4>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Max Speed</span>
                    <span className="text-gray-900 font-bold">280 km/h</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Dry Weight</span>
                    <span className="text-gray-900 font-bold">1,130 kg</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Weight Distribution</span>
                    <span className="text-gray-900 font-bold">44:56 F/R</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Wheelbase</span>
                    <span className="text-gray-900 font-bold">2,850 mm</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Tyres F/R</span>
                    <span className="text-gray-900 font-bold text-right">235/35 R19 / 295/35 R20</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-600 font-medium">Tank Capacity</span>
                    <span className="text-gray-900 font-bold">96L</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Highlights */}
            <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 text-white mb-12">
              <h4 className="text-2xl font-bold mb-6 text-center">Performance Highlights</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-orange-500 mb-2">3.4s</div>
                  <div className="text-gray-300">0-100 km/h</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-orange-500 mb-2">280</div>
                  <div className="text-gray-300">km/h Top Speed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-orange-500 mb-2">1,130</div>
                  <div className="text-gray-300">kg Dry Weight</div>
                </div>
              </div>
            </div>
            
            {/* Technology highlights grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Carbon Monocoque</h4>
                <p className="text-gray-600">Ultra-lightweight construction for maximum rigidity and safety</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Jet Fighter Canopy</h4>
                <p className="text-gray-600">Electric opening system inspired by aerospace technology</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Five-Cylinder Engine</h4>
                <p className="text-gray-600">Powerful TFSI engine delivering race-proven performance</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Limited Slip Differential</h4>
                <p className="text-gray-600">Rear-wheel drive with advanced traction control</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default SpecsSection;