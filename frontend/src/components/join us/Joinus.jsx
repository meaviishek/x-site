// src/components/JoinUsPopup.js
import React from 'react';
import { useEffect,useState } from 'react';
import { logowhite } from '..';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const Joinus = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleSuccess = (response) => {
    console.log('Google login successful:', response);
    onClose(); // Close the popup after login
  };

  const handleError = () => {
    console.log('Google login failed');
  };

  useEffect(() => {
    setIsVisible(true); // Trigger animation on mount
  }, []);

  const handleClose = () => {
    setIsVisible(false); // Trigger exit animation
    setTimeout(onClose, 300); // Close popup after animation ends
  };

  return (
    <div className="fixed inset-40 ml-[1050px]  flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-3xl z-50">
      <div  className={`bg-[#240427ea] rounded-lg p-6 w-96 relative shadow-lg transform transition-all duration-300 ${
          isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}>
        <button onClick={handleClose} className="absolute top-2 right-2 text-gray-600 hover:text-gray-900">
          &times;
        </button>
      
        <h2 className="text-2xl font-bold mb-4 text-center text-white">Join Us</h2>
        <p className="text-center mb-6 text-sm text-gray-300">Sign in with Google to continue.</p>
        <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
          <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
        </GoogleOAuthProvider>
      </div>
    </div>
  );
};

export default Joinus;
