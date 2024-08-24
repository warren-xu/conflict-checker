// MapContainer.js
import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow} from '@react-google-maps/api';
import ProjectDataService from "../services/upload-files.service";
//import axios from 'axios';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 43.65107, // Example: Toronto latitude
  lng: -79.347015, // Example: Toronto longitude
};

const MapContainer = () => {
  const [markers, setMarkers] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);
  
  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const response = await ProjectDataService.getAll(); // get the addresses
        console.log('Response from getAll:', response); // Log response
        const addresses = response.data;
        console.log('Addresses:', addresses);
        
        const results = await ProjectDataService.geocode(addresses);  // geocode them
        setMarkers(results.data);
        console.log('Markers:', markers);
        
      } catch (error) {
        console.error('Error fetching addresses:', error);
      }
    };
    fetchAddresses();
  }, []);   // Empty
  
  return (

    <div>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} libraries={['places']}>
        
        
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          
          {markers.length > 0 ? markers.map((marker, index) => (
            <Marker
              key={index}
              position={marker.location}
              onClick={() => setSelectedMarker(marker)}
            />
          )) : markers.map((marker, index) => (
            <Marker
              key={index}
              position={marker.location}
              onClick={() => setSelectedMarker(marker)}
            />
          ))}
          {selectedMarker && (
            <InfoWindow
              position={selectedMarker.location}
              onCloseClick={() => setSelectedMarker(null)}
            >
              <div>
                <h2>Address</h2>
                <p>{selectedMarker.address}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapContainer;
