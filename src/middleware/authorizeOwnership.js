import {getOrderById} from '../services/orderService.js';
import {getTruckById} from '../services/truckService.js';

export async function authorizeOrderOwnership(req, res, next) {
    const id = parseInt(req.params.id);
    const order = await getOrderById(id);
    if (order.userId !== req.user.id) {
        const error = new Error('Forbidden: insufficient permission.');
        error.status = 403;
        return next(error);
    }
    next();
}

export async function authorizeTruckOwnership(req, res, next) {
    const id = parseInt(req.params.id);
    const truck = await getTruckById(id);
    if (truck.userId !== req.user.id) {
        const error = new Error('Forbidden: insufficient permission.');
        error.status = 403;
        return next(error);
    }
    next();
}