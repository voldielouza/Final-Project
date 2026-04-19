import {getAll} from '../repositories/orderRepo.js';

export async function getAllOrders() {
    return getAll();
}