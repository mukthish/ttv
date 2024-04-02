import express from 'express'
import { postLogin, postRegister } from '../controllers/controllers.js';

const router = express.Router();

router.post('/register', postRegister);

router.post('/login', postLogin);

export default router;
