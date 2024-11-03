// src/components/OrderList.js

import React from 'react';

const OrderList = ({ orders }) => (
    <div>
        <h2>Order List</h2>
        <ul>
            {orders.map(order => (
                <li key={order.orderId}>
                    {order.orderId} - {order.address} ({order.weight})
                </li>
            ))}
        </ul>
    </div>
);

export default OrderList;
