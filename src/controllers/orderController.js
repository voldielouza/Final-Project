import {getAllOrders, getOrderById} from '../services/orderService.js';

export async function getAllOrdersHandler(req, res) {
    let orders = await getAllOrders();
    res.status(200).json(orders);
}

export async function getOrderByIdHandler(req, res) {
    const id = parseInt(req.params.id);
    const order = await getOrderById(id);
    res.status(200).json(order);
}

export async function createOrderHandler(req, res) {
    const {name, price, shippingAddress} = req.body;
    const newOrder = await createOrder({name, price, shippingAddress, userId: req.user.id});
    res.status(201).json(newOrder);
}

export async function updateOrderHandler(req, res){
    const id = parseInt(req.params.id);
    const {name, price, shippingAddress} = req.body;
    const updatedOrder = await updatedOrder(id, {name, price, shippingAddress});
    res.status(200).json(updatedOrder);
}

export async function deleteOrderHandler(req, res) {
  const id = parseInt(req.params.id);
  await deleteOrder(id);
  res.status(204).send();
}