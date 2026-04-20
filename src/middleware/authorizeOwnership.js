import {getOrderById} from '../services/orderService.js';

export async function authorizeOrderOwnership(req, res, next) {
    const id = parseInt(req.params.id);
    const order = await getOrderById(id);
    if (order.authorId !== req.user.id) {
        const error = new Error('Forbidden: insufficient permission.');
        error.status = 403;
        return next(error);
    }
    next();
}

export async function authorizeTruckOwnership(req, res, next) {
    const id = parseInt(req.params.id);
    const truck = await getTruckById(id);
    if (truck.authorId !== req.user.id) {
        const error = new Error('Forbidden: insufficient permission.');
        error.status = 403;
        return next(error);
    }
    next();
}