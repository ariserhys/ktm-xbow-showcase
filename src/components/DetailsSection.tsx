
import React, { useState } from "react";
import { toast } from "sonner";

const DetailsSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!formData.fullName || !formData.email) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Demo form submission
    toast.success("Configuration request submitted successfully!");

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      company: ""
    });
  };

  return (
    <section id="details" className="w-full bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 sm:py-20 lg:py-24">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-2 xl:gap-16">
          {/* Left Card - The Specifications */}
          <div className="group rounded-3xl overflow-hidden shadow-elegant hover:shadow-elegant-hover transition-all duration-500 hover:-translate-y-2">
            {/* Card Header with enhanced background image */}
            <div className="relative h-56 sm:h-64 lg:h-72 p-8 sm:p-10 flex items-end overflow-hidden" style={{
              backgroundImage: "linear-gradient(135deg, rgba(0,0,0,0.3), rgba(0,0,0,0.1)), url('/background-section3.png')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <h2 className="relative text-3xl sm:text-4xl lg:text-5xl font-display text-white font-bold tracking-tight">
                Specifications
              </h2>
            </div>
            
            {/* Card Content with enhanced styling */}
            <div className="bg-white p-6 sm:p-8 lg:p-10 border-t border-gray-100">
              <h3 className="text-xl sm:text-2xl font-display mb-8 text-gray-900 leading-tight">
                Engineering excellence meets racing pedigree
              </h3>

              <div className="space-y-5 sm:space-y-6">
                {[
                  { label: "Power", value: "365 HP" },
                  { label: "0-100 km/h", value: "3.4s" },
                  { label: "Weight", value: "998kg" },
                  { label: "Top Speed", value: "280 km/h" },
                  { label: "Engine", value: "2.0L TFSI" }
                ].map((spec, index) => (
                  <div key={index} className="flex items-start gap-4 group/item">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center mt-1 flex-shrink-0 shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                      <svg width="16" height="12" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="p-4 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100/80 backdrop-blur-sm border border-gray-200/50 hover:border-orange-200 hover:shadow-md transition-all duration-300 group-hover/item:bg-gradient-to-r group-hover/item:from-orange-50 group-hover/item:to-red-50">
                        <span className="font-bold text-lg text-gray-900">{spec.label}:</span>
                        <span className="ml-2 text-lg text-orange-600 font-semibold">{spec.value}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Card - Contact Form with enhanced design */}
          <div className="group rounded-3xl overflow-hidden shadow-elegant hover:shadow-elegant-hover transition-all duration-500 hover:-translate-y-2">
            {/* Card Header with enhanced background image */}
            <div className="relative h-56 sm:h-64 lg:h-72 p-8 sm:p-10 flex flex-col items-start justify-between overflow-hidden" style={{
              backgroundImage: "linear-gradient(135deg, rgba(0,0,0,0.3), rgba(0,0,0,0.1)), url('/background-section1.png')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="relative inline-flex items-center px-5 py-3 border-2 border-white/30 text-white rounded-full text-sm font-semibold backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all duration-300">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
                Configure yours
              </div>
              <h2 className="relative text-3xl sm:text-4xl lg:text-5xl font-display text-white font-bold tracking-tight">
                Build your X-BOW
              </h2>
            </div>
            
            {/* Card Content - Enhanced Form */}
            <div className="bg-white p-6 sm:p-8 lg:p-10 border-t border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-7">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    name="fullName" 
                    value={formData.fullName} 
                    onChange={handleChange} 
                    placeholder="Enter your full name" 
                    className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300 text-gray-900 placeholder-gray-500" 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="Enter your email address" 
                    className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300 text-gray-900 placeholder-gray-500" 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Dealer Preference</label>
                  <input 
                    type="text" 
                    name="company" 
                    value={formData.company} 
                    onChange={handleChange} 
                    placeholder="Preferred dealer (optional)" 
                    className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300 text-gray-900 placeholder-gray-500" 
                  />
                </div>
                
                <div className="pt-4">
                  <button 
                    type="submit" 
                    className="w-full px-8 py-5 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] text-lg tracking-wide"
                  >
                    Request Configuration
                    <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
