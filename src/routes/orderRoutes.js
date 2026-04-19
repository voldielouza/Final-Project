import express from 'express';
import { createOrderHandler, deleteOrderHandler, getAllOrdersHandler, getOrderByIdHandler, updateOrderHandler } from '../controllers/orderController.js';

const router = express.Router();

router.get('/', getAllOrdersHandler);
router.get('/:id', getOrderByIdHandler);
router.post('/', createOrderHandler);
router.put('/:id', updateOrderHandler);
router.delete('/:id', deleteOrderHandler);

export default router;