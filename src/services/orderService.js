import {getAll, getById} from '../repositories/orderRepo.js';

export async function getAllOrders() {
    return getAll();
}

export async function getOrderById(id) {
    const order = await getById(id);
    if (order) return order;
    else {
        const error = new Error(`Post ${id} not found`);
        error.status = 404;
        throw error;
    }
}

export async function createOrder(orderData) {
    return create(orderData);
}

export async function updateOrder(id, updatedData) {
    const updatedOrder = await update(id, updatedData);
    if (updatedOrder) return updatedOrder;
    else {
        const error = new Error(`Post ${id} not found`);
        error.status = 404;
        throw error;
    }
}

export async function deleteOrder(id) {
    const result = await remove(id);
    if (result) return;
    else {
        const error = new Error(`Post ${id} not found`);
        error.status = 404;
        throw error;
    }
}