import { Router } from "express";
import { createEventCont, getHistoryCont,
        deleteHistoryCont, getEventCont } from "./event.controllers";
const eventRouter = Router();
eventRouter.post('/event', createEventCont);
eventRouter.get('/history', getHistoryCont);
eventRouter.delete('/history', deleteHistoryCont);
eventRouter.get('/event', getEventCont);
export default eventRouter;