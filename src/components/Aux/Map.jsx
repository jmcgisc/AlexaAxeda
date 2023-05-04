import React, { Component }  from 'react'  
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';
import { InfoBox } from '@react-google-maps/api';

const containerStyle = {
  width: '1300px',
  height: '400px'
};

const center = {
  lat: 21.098064163906468,
  lng: -89.39039837301571
};

const position = {
  lat: 20.98852240519842,
  lng: -89.61747923034035
} 
 

const onLoad = marker => {
  console.log('marker: ', marker)
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
                    Rosavento, tu nuevo hogar!
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
  