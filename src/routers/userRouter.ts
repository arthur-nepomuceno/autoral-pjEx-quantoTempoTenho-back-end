import { Router } from "express";
import { checkSchema } from "../middlewares/dataMiddleware";
import { signUpSchema, signInSchema } from "../schemas/userSchema";
import { signUp, signIn } from "../controllers/userController";

const userRouter = Router();

userRouter.post('/signup', checkSchema(signUpSchema), signUp);
userRouter.get('/signin', checkSchema(signInSchema), signIn)

export default userRouter