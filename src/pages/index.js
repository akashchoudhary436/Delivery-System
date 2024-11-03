// src/pages/index.js

import { useState, useEffect } from 'react';
import OrderList from '../components/OrderList';
import Map from '../components/Map';
import OptimizeButton from '../components/OptimizeButton';

const Home = () => {
    const [orders, setOrders] = useState([]);
    const [optimizedRoutes, setOptimizedRoutes] = useState([]);

    useEffect(() => {
        fetch('/api/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);

    const handleOptimizeRoutes = () => {
        fetch('/api/optimize', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ orders }),
        })
            .then(res => res.json())
            .then(data => setOptimizedRoutes(data));
    };

    return (
        <div>
            <h1>Delivery Route System</h1>
            <OptimizeButton onClick={handleOptimizeRoutes} />
            <OrderList orders={orders} />
            <Map orders={optimizedRoutes.length ? optimizedRoutes : orders} />
        </div>
    );
};

export default Home;
