import React, { Component }  from 'react'; 
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';
import { InfoBox } from '@react-google-maps/api';

const containerStyle = {
  width: '1300px',
  height: '400px'
};

 const center = {
   lat: 21.099458244981633, 
   lng: -89.39934697574414
 }; 
 
const position = {
  lat: 21.099458244981633, 
  lng: -89.39934697574414
} 

const options = { closeBoxURL: '', enableEventPropagation: true };
 
const onLoad = marker => { 
} 

class Map extends Component {
  render() {
  
    return (
      <LoadScript 
        googleMapsApiKey={import.meta.env.VITE_REACT_GOOGLE_AP_KEY}
      >
        <GoogleMap
          id="marker-example"
          mapContainerStyle={containerStyle}
          center={center} 
          zoom={13}
        >

          <Marker
            onLoad={onLoad}
            position={position}
          />

          <InfoBox
                onLoad={onLoad}
                options={options}
                position={center}
              >
                <div style={{ backgroundColor: 'yellow', opacity: 0.75, padding: 12 }}>
                  <div style={{ fontSize: 16, fontColor: `#08233B` }}>
                    Terravento, tu nuevo hogar!
                  </div>
                </div>
              </InfoBox>
          
      <>
        </>
        </GoogleMap>
      </LoadScript>
    )
  }
}

export default Map
  