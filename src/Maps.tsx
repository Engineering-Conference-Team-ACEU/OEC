import React from 'react';
import {createRoot} from "react-dom/client";
import {APIProvider, Map, MapCameraChangedEvent} from '@vis.gl/react-google-maps';

const Maps = () => (
 <APIProvider apiKey={process.env.GOOGLE_MAPS_API_KEY!} onLoad={() => console.log('Maps API has loaded.')}>
   <Map
      defaultZoom={13}
      defaultCenter={ { lat: 56.1304, lng: 106.3468 } }
      onCameraChanged={ (ev: MapCameraChangedEvent) =>
        console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
      }>
   </Map>
 </APIProvider>
);

export default Maps;