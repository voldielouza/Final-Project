import express from 'express';
import { createOrderHandler, deleteOrderHandler, getAllOrdersHandler, getOrderByIdHandler, updateOrderHandler } from '../controllers/orderController.js';
import { authenticate } from '../middleware/autheticate.js';
import { authorizeOrderOwnership } from '../middleware/authorizeOwnership.js';

const router = express.Router();

router.get('/', getAllOrdersHandler);
router.get('/:id', getOrderByIdHandler);
router.post('/', authenticate, createOrderHandler);
router.put('/:id', updateOrderHandler);
router.delete('/:id', authenticate, deleteOrderHandler);

export default router;