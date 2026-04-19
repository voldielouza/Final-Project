import {getAllOrders} from '../servicesorderService.js';

export async function getAllOrdersHandler(req, res) {
    let orders = await getAllOrders();
    res.status(200).json(orders);
}