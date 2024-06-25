import { Router } from "express";
import { createUserCont } from "./user.controllers";
const userRouter = Router();

userRouter.post('/Users',createUserCont);

export default userRouter;