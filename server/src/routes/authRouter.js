import express from 'express'
import { RegisterUserController } from '../controllers/authController.js';

const authRouter = express.Router();

authRouter.post("/sign-up" , RegisterUserController);

export default authRouter;