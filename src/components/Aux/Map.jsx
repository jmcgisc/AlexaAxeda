import React, { Component }  from 'react' 
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';

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
          <></>
        </GoogleMap>
      </LoadScript>
    )
  }
}

export default Map
  