import React, {useRef, useEffect} from 'react';
import {createRoot} from "react-dom/client";
import {APIProvider, Map, MapCameraChangedEvent, useMap} from '@vis.gl/react-google-maps';
import {kmlAreaData} from '../utils/TestMapOutline';
import {buildCoordinatesArrayFromString} from '../utils/MapUtils.js';

const MapHook = () => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    

    var TestDelimiters = buildCoordinatesArrayFromString(kmlAreaData);

    var TestPolygon = new google.maps.Polygon({
      paths: TestDelimiters,
      strokeColor: '#0037FF',
      strokeOpacity: 0.8,
      strokeWeight: 3,
      fillColor: '#0037FF',
      fillOpacity: 0.35
    });

    TestPolygon.setMap(map);
  }, [map]);

  return <></>;
}

const Maps = () => (
  <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY!} onLoad={() => console.log('Maps API has loaded.')}>
    <Map
      style = {{ width: '100%', aspectRatio: 5/2 }}
      defaultZoom={4}
      defaultCenter={ { lat: 56.1304, lng: -106.3468 } }
      onCameraChanged={ (ev: MapCameraChangedEvent) =>
        console.log(ev.detail.center)
      }>
    </Map>
    <MapHook />
  </APIProvider>
);

export default Maps;