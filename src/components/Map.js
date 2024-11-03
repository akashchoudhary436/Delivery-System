// src/components/Map.js

import React, { useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px',
};

const center = {
    lat: 19.0760,
    lng: 72.8777,
};

const Map = ({ orders }) => {
    return (
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
                {orders.map(order => (
                    <Marker
                        key={order.orderId}
                        position={{
                            lat: order.lat,
                            lng: order.lng,
                        }}
                        label={order.orderId}
                    />
                ))}
            </GoogleMap>
        </LoadScript>
    );
};

export default Map;
