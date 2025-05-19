// src/components/MyMap.tsx
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import type { LatLngExpression } from "leaflet";

// حل مشکل marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// موقعیت مد نظر (تهران)
// const position: LatLngExpression = [35.6892, 51.389];
const position: LatLngExpression = [35.43281, 51.81347];

const MyMap = () => {
  return (
    <MapContainer
      center={position}
      zoom={15}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          <span className="font-myFont">کارخانه استیل کاکتوس</span>
          <br />
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=35.43281,51.81347"
            target="_blank"
            rel="noopener noreferrer"
            className="font-myFont"
          >
            مسیریابی با گوگل‌مپ
          </a>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MyMap;
