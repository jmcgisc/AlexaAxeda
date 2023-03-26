import React, { Component }  from 'react' 
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '1300px',
  height: '400px'
};

const center = {
  lat: 21.098064163906468,
  lng: -89.39039837301571
};

class Map extends Component {
  render() {
    return (
      <LoadScript
        googleMapsApiKey='AIzaSyC0vqlgE1XvoDzx46EExICcp4REfgfKAAo'
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={13}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
    )
  }
}

export default Map
  