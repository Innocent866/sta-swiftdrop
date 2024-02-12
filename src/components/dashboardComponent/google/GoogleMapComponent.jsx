import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

const GoogleMapComponent = () => {
  const [map, setMap] = useState(null);
  const [restaurants, setRestaurants] = useState([]);
  const [center, setCenter] = useState(null);
  const [userLocationMarker, setUserLocationMarker] = useState(null);

  const mapStyles = useMemo(
    () => ({
      height: '900px',
      width: '100%',
    }),
    []
  );

  const fetchRestaurants = useCallback(async () => {
    try {
      const response = await fetch(
        'https://swifdropp.onrender.com/api/v1/restaurant'
      );
      const data = await response.json();
      const availableRestaurants = data.restaurants.filter(
        (restaurant) => restaurant.isAvailable
      );

      if (
        JSON.stringify(availableRestaurants) !== JSON.stringify(restaurants)
      ) {
        setRestaurants(availableRestaurants);
      }
      const interval = setInterval(fetchRestaurants, 60000);

      return () => clearInterval(interval);
    } catch (error) {}
  }, [restaurants]);

  useEffect(() => {
    fetchRestaurants();
  }, [fetchRestaurants]);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            const userLocation = { lat: latitude, lng: longitude };
            setCenter(userLocation);

            const marker = new window.google.maps.Marker({
              position: userLocation,
              map: map,
              title: 'Your Location',
            });
            setUserLocationMarker(marker);
          },
          (error) => {
            console.error('Error getting current location:', error);
          }
        );
      } else {
        console.error('Geolocation is not supported by your browser');
      }
    };

    getLocation();

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const handleVisibilityChange = () => {
    if (document.visibilityState === 'visible') {
      fetchRestaurants();
    }
  };

  const onLoad = useCallback((map) => {
    setMap(map);
  }, []);

  const onMarkerClick = useCallback(
    (markerPosition) => {
      if (map && center) {
        map.panTo(markerPosition);
        map.setZoom(16);
      }
    },
    [map, center]
  );

  return (
    <div style={{ width: '700px' }}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={12}
        center={center}
        onLoad={onLoad}
      >
        {userLocationMarker && <MemoizedMarker position={center} />}

        {restaurants.map((restaurant) => {
          // Check if coordinates exist and are valid numbers
          if (
            restaurant.coordinates &&
            typeof restaurant.coordinates.latitude === 'number' &&
            typeof restaurant.coordinates.longitude === 'number'
          ) {
            return (
              <Marker
                key={restaurant._id}
                position={{
                  lat: restaurant.coordinates.latitude,
                  lng: restaurant.coordinates.longitude,
                }}
                title={restaurant.restaurantName}
                onClick={() =>
                  onMarkerClick({
                    lat: restaurant.coordinates.latitude,
                    lng: restaurant.coordinates.longitude,
                  })
                }
              />
            );
          } else {
            // Handle invalid coordinate
            return null;
          }
        })}
      </GoogleMap>
    </div>
  );
};

const MemoizedMarker = React.memo(Marker);
export default GoogleMapComponent;
