import cookieParser from 'cookie-parser';
import cors from 'cors'
import express from 'express';
import userRouter from './routes/userroutes.js';
import cycleRouter from './routes/cycleroutes.js';
import bookingRouter from './routes/bookingroutes.js';
const app=express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

app.listen(8000,()=>{
    console.log("Server is running at port 5000");
});

app.get('/',(req,res)=>{
    res.send('Sriman');
})

app.use('/user',userRouter);
app.use('/cycle',cycleRouter);
app.use('/booking',bookingRouter);

export default app;