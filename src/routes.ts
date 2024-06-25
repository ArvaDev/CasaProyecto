import { Router } from "express";
import eventRouter from "./events/infrastructure/event.routes";
import userRouter from "./users/infrestructure/user.routes";
const router = Router();
router.use(eventRouter);
router.use(userRouter);
export default router;