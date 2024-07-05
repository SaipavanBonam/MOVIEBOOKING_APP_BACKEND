import { Router } from "express";
import { login,signup,logout} from "../controllers/user.controller.js";
import {saveTicket,getUserBookings} from "../controllers/ticket.controller.js";



const userRouter=Router();
userRouter.post('/ticket',saveTicket)
userRouter.post('/logout',logout);
userRouter.post('/signup',signup);
userRouter.post('/login',login);
userRouter.post('/bookings',getUserBookings)
export default userRouter;