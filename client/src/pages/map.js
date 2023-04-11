import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = () => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYWF5dXNoLXBhdXJhbmEiLCJhIjoiY2tsdmRmdXBhMTh0ajJwcDN6dzBvbTRpMSJ9.GOnDbSjS7SVzNqrhLChmXA';

    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [75.588, 28.3588],
        zoom: 12
      });

      map.on('load', () => {
        setMap(map);
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return (
    <div
      ref={el => (mapContainer.current = el)}
      style={{ width: '100%', height: '500px', display:"flex", justifyContent: "center", alignItems: "center", marginTop: "20%", marginLeft:""}}
    />
  );
};

export default Map;
