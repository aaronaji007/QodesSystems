'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect } from 'react';

const Map = () => {
    const officeLocations = [
        { lat: -33.8688, lng: 151.2093, name: "Sydney Office" },
        { lat: 10.1632, lng: 76.6413, name: "Kerala Office" },
    ];
    useEffect(() => {
        return () => {
            const existingMap = document.querySelector('.leaflet-container');
            //@ts-expect-error specify type of existingMap as any
            if (existingMap && existingMap._leaflet_id) {
                //@ts-expect-error specify type of existingMap as any
                delete existingMap._leaflet_id;
            }
        };
    }, []);

    return (
        <MapContainer
            center={[ -33.8688, 151.2093]}
            zoom={2}
            className='!w-[900px] !h-[500px] z-10 rounded-xl'
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {officeLocations.map((loc, index) => (
                <Marker
                    key={index}
                    position={[loc.lat, loc.lng]}
                    icon={L.icon({
                        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
                        iconAnchor: [12, 41],
                        popupAnchor: [0, -41],
                    })}
                >
                    <Popup>{loc.name}</Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default Map;
