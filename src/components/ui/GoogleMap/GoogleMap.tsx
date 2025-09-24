"use client";

import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";

import styles from "./GoogleMap.module.css";

import { CONTACT_INFO } from "@/constants/contact";

export const GoogleMap = () => {
  const position = CONTACT_INFO.MAP_POSITION;

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
      <div className={styles.map}>
        <Map
          defaultZoom={18}
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
