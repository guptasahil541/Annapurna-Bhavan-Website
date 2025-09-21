"use client";

import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";

import styles from "./GoogleMap.module.css";

export const GoogleMap = () => {
  const position = { lat: 28.67507146622031, lng: 77.10374507570099 };

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
      <div className={styles.map}>
        <Map
          defaultZoom={15}
          defaultCenter={position}
          mapId={process.env.NEXT_PUBLIC_GOOGLE_MAP_ID}
          gestureHandling="greedy"
        >
          <AdvancedMarker position={position} />
        </Map>
      </div>
    </APIProvider>
  );
};
