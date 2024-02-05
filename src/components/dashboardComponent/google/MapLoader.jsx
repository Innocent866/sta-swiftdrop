import React, { useState, useEffect } from 'react';

const GoogleMapsLoader = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places';
    script.async = true;
    script.onload = () => {
      setIsLoaded(true);
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return isLoaded ? children : null;
};

export default GoogleMapsLoader;
