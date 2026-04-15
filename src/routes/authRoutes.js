import express from 'express';
import {signUpHandler, logInHandler} from '../controllers/authController.js';
const router = express.Router();

router.post('/signup', signUpHandler);
router.post('/logIn', logInHandler);
export default router;

