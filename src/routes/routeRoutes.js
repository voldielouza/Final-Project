import express from 'express';
import { createRouteHandler, deleteRouteHandler, getAllRoutesHandler, getRouteByIdHandler, updateRouteHandler } from '../controllers/routeController.js';
import { authenticate } from '../middleware/autheticate.js';
import { authorizeRouteOwnership } from '../middleware/authorizeOwnership.js';

const router = express.Router();

router.get('/', getAllRoutesHandler);
router.get('/:id', getRouteByIdHandler);
router.post('/', authenticate, createRouteHandler);
router.put('/:id', updateRouteHandler);
router.delete('/:id', deleteRouteHandler);

export default router;