// const Hello = () => {
//   const apiKey = 'AIzaSyDE83Koe2R_WZ1oOAt5SDicYKUBcBFLwy0';

//   return (
//     <div>
//       <h1>Hei</h1>
//     </div>
//   );
// };

// export default Hello;

// import React, { useState, useEffect } from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// const GoogleMapComponent = () => {
//   const [map, setMap] = useState(null);
//   const [restaurants, setRestaurants] = useState([]);
//   const [center, setCenter] = useState(null);

//   const mapStyles = {
//     height: '900px',
//     width: '100%',
//   };

//   useEffect(() => {
//     const fetchRestaurants = async () => {
//       try {
//         const response = await fetch(
//           'https://swifdropp.onrender.com/api/v1/restaurant'
//         );
//         const data = await response.json();
//         console.log(data);
//         const availableRestaurants = data.restaurants.filter(
//           (restaurant) => restaurant.isAvailable
//         );

//         setRestaurants(availableRestaurants);
//       } catch (error) {
//         console.error('Error fetching restaurants:', error);
//       }
//     };

//     fetchRestaurants();
//   }, []);

//   useEffect(() => {
//     const watchLocation = () => {
//       if (navigator.geolocation) {
//         const watchId = navigator.geolocation.watchPosition(
//           (position) => {
//             const latitude = position.coords.latitude;
//             const longitude = position.coords.longitude;
//             setCenter({ lat: latitude, lng: longitude });
//             console.log(position);
//           },
//           (error) => {
//             console.error('Error getting current location:', error);
//           }
//         );
//         return () => navigator.geolocation.clearWatch(watchId);
//       } else {
//         console.error('Geolocation is not supported by your browser');
//       }
//     };

//     watchLocation();
//   }, []);
//   console.log(center);

//   const onLoad = (map) => {
//     setMap(map);
//   };

//   const onMarkerClick = (markerPosition) => {
//     if (map && center) {
//       map.panTo(markerPosition);
//       map.setZoom(16);
//     }
//   };

//   const apiKey = 'AIzaSyDE83Koe2R_WZ1oOAt5SDicYKUBcBFLwy0';
//   return (
//     <div style={{ width: '700px' }}>
//       <LoadScript googleMapsApiKey={apiKey}>
//         <GoogleMap
//           mapContainerStyle={mapStyles}
//           zoom={12}
//           center={center}
//           onLoad={onLoad}
//         >
//           {restaurants.map((restaurant) => {
//             // Check if latitude and longitude are valid numbers
//             if (
//               typeof restaurant.coordinates.latitude === 'number' &&
//               typeof restaurant.coordinates.longitude === 'number'
//             ) {
//               return (
//                 <Marker
//                   key={restaurant._id}
//                   position={{
//                     lat: restaurant.coordinates.latitude,
//                     lng: restaurant.coordinates.longitude,
//                   }}
//                   title={restaurant.restaurantName}
//                   onClick={() =>
//                     onMarkerClick({
//                       lat: restaurant.coordinates.latitude,
//                       lng: restaurant.coordinates.longitude,
//                     })
//                   }
//                 />
//               );
//             } else {
//               // Handle invalid long and lat
//               return null;
//             }
//           })}
//         </GoogleMap>
//       </LoadScript>
//     </div>
//   );
// };

// export default GoogleMapComponent;
