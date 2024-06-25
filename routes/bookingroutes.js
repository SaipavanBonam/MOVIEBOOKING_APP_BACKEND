import { Router } from "express";
import { bookingdone, bookingissue, findAvailableCycle } from "../controllers/booking.controller.js";

const bookingRouter=Router();
bookingRouter.post('/findcycle',findAvailableCycle);
bookingRouter.post('/bookingissue',bookingissue);
bookingRouter.post('/bookingdone',bookingdone);

export default bookingRouter;