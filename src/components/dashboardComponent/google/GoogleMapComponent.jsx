import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

const GoogleMapComponent = () => {
  const [map, setMap] = useState(null);
  const [restaurants, setRestaurants] = useState([]);
  const [center, setCenter] = useState(null);

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
      console.log(data);
      const availableRestaurants = data.restaurants.filter(
        (restaurant) => restaurant.isAvailable
      );

      // Only update restaurants state if it has changed
      if (
        JSON.stringify(availableRestaurants) !== JSON.stringify(restaurants)
      ) {
        setRestaurants(availableRestaurants);
      }
    } catch (error) {
      console.error('Error fetching restaurants:', error);
    }
  }, [restaurants]);

  useEffect(() => {
    fetchRestaurants();
  }, [fetchRestaurants]);

  useEffect(() => {
    const watchLocation = () => {
      if (navigator.geolocation) {
        const watchId = navigator.geolocation.watchPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            setCenter({ lat: latitude, lng: longitude });
            console.log(position);
          },
          (error) => {
            console.error('Error getting current location:', error);
          }
        );
        return () => navigator.geolocation.clearWatch(watchId);
      } else {
        console.error('Geolocation is not supported by your browser');
      }
    };

    watchLocation();

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
        {restaurants.map((restaurant) => {
          // Check if latitude and longitude are valid numbers
          if (
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
            return null;
          }
        })}
      </GoogleMap>
    </div>
  );
};

const MemoizedMarker = React.memo(Marker);
export default GoogleMapComponent;
