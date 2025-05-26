import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api';

const center = { lat: 21.133058, lng: -86.9645823 };

const darkMapStyle = [
  {
    elementType: 'geometry',
    stylers: [{ color: '#212121' }]
  },
  {
    elementType: 'labels.icon',
    stylers: [{ visibility: 'off' }]
  },
  {
    elementType: 'labels.text.fill',
    stylers: [{ color: '#757575' }]
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [{ color: '#212121' }]
  },
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [{ color: '#757575' }]
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [{ color: '#2c2c2c' }]
  },
  {
    featureType: 'road',
    elementType: 'geometry.fill',
    stylers: [{ color: '#2c2c2c' }]
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#212121' }]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{ color: '#3c3c3c' }]
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{ color: '#2c2c2c' }]
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#000000' }]
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#3d3d3d' }]
  }
];

const MapaInteractivo = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_REACT_GOOGLE_AP_KEY,
  });

  if (loadError) return <div>Error al cargar el mapa</div>;
  if (!isLoaded) return <div>Cargando mapa...</div>;

  return (
    <GoogleMap
      mapContainerStyle={{ width: '100%', height: '500px' }}
      center={center}
      zoom={18}
      options={{
        disableDefaultUI: true,
        styles: darkMapStyle,
      }}
    >
      <Marker
        position={center}
        icon={{
          url: '/pin-isla-diamante.png',
          scaledSize: new window.google.maps.Size(100, 100),
        }}
      />
    </GoogleMap>
  );
};

export default MapaInteractivo;
