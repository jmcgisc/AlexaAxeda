import React, { Component }  from 'react'; 
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';
import { InfoBox } from '@react-google-maps/api';

const containerStyle = {
  width: '1300px',
  height: '400px'
};

//Esta dirreccion es la correcta de indo en la pagina de Axeda
const center = {
  lat: 21.098023925357964,
  lng: -89.39039807301391
};

const position = {
  lat: 21.098023925357964,
  lng: -89.39039807301391
} 

const options = { closeBoxURL: '', enableEventPropagation: true };
 
const onLoad = marker => { 
} 

class Map extends Component {
  render() {
    // let { center } = this.props;
  
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
                    Indo, ubicación privilegiada!
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
  