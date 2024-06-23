import { Router } from "express";
import eventRouter from "./events/infrastructure/event.routes";
const router = Router();
router.use(eventRouter);
export default router;