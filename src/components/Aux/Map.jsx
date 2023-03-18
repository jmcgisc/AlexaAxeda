import React, { Component }  from 'react' 
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

import './map.css'

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
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
          zoom={10}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
    )
  }
}
// 
// const Map = ({ location, zoomLevel }) => (
    // <div className="map"> 
{/*    */}
      {/* <div className="google-map">  */}
        {/* <GoogleMapReact */}
          // bootstrapURLKeys={{ key: '' }}
          // defaultCenter={location}
          // defaultZoom={zoomLevel}
        // >
          {/* <LocationPin */}
            // lat={location.lat}
            // lng={location.lng}
            // text={location.address}
          // />
        {/* </GoogleMapReact> */}
      {/* </div>  */}
    {/* </div> */}
  // )


export default Map
  