
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from '!mapbox-gl';
import PopupForm from './PopupForm';
import 'mapbox-gl/dist/mapbox-gl.css';
//mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

mapboxgl.accessToken = 'pk.eyJ1IjoicmFtdGlua2F6ZW1pIiwiYSI6ImNsaTJlaDNsazA0MHIzbXMxOXJnaHF1dHYifQ.odM1dPQsnSwxTa0tk5V6Rg';
//no build
function Map() {
  const mapContainer = useRef(null);
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [location, setLocation] = useState(null);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const [, setSubmitted] = useState(false);

  const handleFlyTo = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          map.flyTo({
            center: [longitude, latitude],
            essential: true
          });
        },
        (error) => {
          console.error("Error getting geolocation: ", error);
        }
      );
    }
  };

  useEffect(() => {
    if (mapContainer.current) {
      const newMap = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-117.2340, 32.8801],
        zoom: 14.5,
      });

      let currentMarker;

      newMap.on('load', () => {
        setMap(newMap);

        // If the user has allowed location services, show their location
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              newMap.flyTo({
                center: [longitude, latitude],
                essential: true
              });

              // place a marker at user's location
              new mapboxgl.Marker({ color: 'red' , scale:0.65})

              //new mapboxgl.Marker()
                .setLngLat([longitude, latitude])
                .addTo(newMap);
            },
            (error) => {
              console.error("Error getting geolocation: ", error);
            }
          );
        }
      });

      newMap.on('click', (e) => {
        const { lng, lat } = e.lngLat;

        if (currentMarker) {
          currentMarker.remove();
        }

        currentMarker = new mapboxgl.Marker({draggable: true })
          .setLngLat([lng, lat])
          .addTo(newMap);

        setMarker(currentMarker);
        setShowPopup(true);
        setSubmitted(false); // to reset the submitted state
        setLocation({ lat, lng });

        // Calculate pixel position of marker
        const popupPosition = newMap.project([lng, lat]);
        setPopupPosition(popupPosition);
      });

    }
  }, [mapContainer]);

  const onClose = () => {
    if (marker) {
      marker.remove();
      setMarker(null);
    }
    setShowPopup(false);
  };

  return (
    <div ref={mapContainer} style={{ width: '100vw', height: '100vh' }}>
      {showPopup && marker && location && (
        <PopupForm onClose={onClose} location={location} position={popupPosition} />
      )}

      <button
          onClick={handleFlyTo}
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            zIndex: 1,
            padding: "10px",
            borderRadius: "5px",
            width: "50px",
            height: "50px",
            border: "none",
            backgroundColor: 'transparent',
          }}
      >
          <img src='./myloc.jpg' alt="Go to my location" style={{width: "100%", height: "100%"}}/>
      </button>
    </div>
  );
}

export default Map;
