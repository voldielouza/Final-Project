import express from 'express';
import { getAllUsersHandler } from '../controllers/userController.js';
import {authorizeRoles} from '../middleware/authorizeRoles.js';
import {authenticate} from '../middleware/autheticate.js';
import { validateSignUp, } from '../middleware/userValidators.js';

const router = express.Router();
router.get('/', authenticate, authorizeRoles('ADMIN'), getAllUsersHandler);

export default router;