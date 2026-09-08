import express from 'express';
import userController from '../controllers/userController.js'

import UserController from "../controllers/userController.js";

const router = express.Router();

router.get('', userController.getAllUsers)

router.post('', userController.createUser)

router.put('', UserController.updateUser)

router.delete('', userController.deleteUser)

export default router;