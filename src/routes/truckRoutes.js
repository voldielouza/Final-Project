import express from 'express';
import { createTruckHandler, deleteTruckHandler, getAllTrucksHandler, getTruckByIdHandler, updateTruckHandler } from '../controllers/truckController.js';
import { authenticate } from '../middleware/autheticate.js';
import { authorizeTruckOwnership } from '../middleware/authorizeOwnership.js';

const router = express.Router();

router.get('/', getAllTrucksHandler);
router.get('/:id', getTruckByIdHandler);
router.post('/', authenticate, createTruckHandler);
router.put('/:id', updateTruckHandler);
router.delete('/:id', deleteTruckHandler);

export default router;