import { Router } from "express";
import { addNewCycle,updateStatus } from "../controllers/cycle.controller.js";

const cycleRouter=Router();
cycleRouter.post('/addCycle',addNewCycle);
cycleRouter.post('/updateCycleStatus',updateStatus);

export default cycleRouter;