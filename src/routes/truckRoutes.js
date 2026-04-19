import express from 'express';
import { createTruckHandler, deleteTruckHandler, getAllTrucksHandler, getTruckByIdHandler, updateTruckHandler } from '../controllers/truckController.js';

const router = express.Router();

router.get('/', getAllTrucksHandler);
router.get('/:id', getTruckByIdHandler);
router.post('/', createTruckHandler);
router.put('/:id', updateTruckHandler);
router.delete('/:id', deleteTruckHandler);

export default router;