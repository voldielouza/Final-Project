import express from 'express';
import { createRouteHandler, deleteRouteHandler, getAllRoutesHandler, getRouteByIdHandler, updateRouteHandler } from '../controllers/routeController.js';

const router = express.Router();

router.get('/', getAllRoutesHandler);
router.get('/:id', getRouteByIdHandler);
router.post('/', createRouteHandler);
router.put('/:id', updateRouteHandler);
router.delete('/:id', deleteRouteHandler);

export default router;