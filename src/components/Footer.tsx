
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white py-4 border-t border-gray-100">
      <div className="section-container">
        <p className="text-center text-gray-600 text-sm">
          KTM X-BOW GT-XR showcase website created by{" "}
          <a 
            href="https://devabhishekyadav.netlify.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-pulse-500 hover:underline font-medium"
          >
            Abhishek Yadav
          </a>
          . Experience pure racing DNA on the street.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
