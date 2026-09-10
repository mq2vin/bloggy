import express from 'express';
import userController from '../controllers/userController.js'

const router = express.Router();

router.get('', userController.getAllUsers)

router.get('/:id/comment', userController.getComment)

router.post('', userController.createUser)

router.put('', userController.updateUser)

router.delete('', userController.deleteUser)

export default router;