// src/pages/api/optimize.js

import optimizeRoutes from '../../utils/optimizeRoutes';

export default function handler(req, res) {
    const { orders } = req.body;
    const optimizedRoutes = optimizeRoutes(orders);
    res.status(200).json(optimizedRoutes);
}
