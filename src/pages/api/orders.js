// src/pages/api/orders.js

export default function handler(req, res) {
    const orders = [
        { orderId: "101", address: "Oberoi Mall, Goregaon", area: "Mumbai", deliveryTime: "10:00 AM", weight: "light" },
        // ... (include all sample data here)
    ];
    res.status(200).json(orders);
}
