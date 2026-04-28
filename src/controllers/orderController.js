import {getAllOrders, getOrderById, updateOrder, deleteOrder, createOrder} from '../services/orderService.js';

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
    const {name, price, truck, shippingAddress} = req.body;
    const newOrder = await createOrder({name, price, shippingAddress, truck, user: req.user.id});
    res.status(201).json(newOrder);
}

export async function updateOrderHandler(req, res){
    const id = parseInt(req.params.id);
    const {name, price, shippingAddress} = req.body;
    const updatedOrder = await updateOrder(id, {name, price, shippingAddress});
    res.status(200).json(updatedOrder);
}

export async function deleteOrderHandler(req, res) {
  const id = parseInt(req.params.id);
  await deleteOrder(id);
  res.status(204).send();
}