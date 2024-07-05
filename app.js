import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import userRouter from './routes/userroutes.js';


const app = express();

// Middleware setup
app.use(cors({
  origin: 'http://localhost:3000',
  credentials : true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use('/user', userRouter);



app.get('/', (req, res) => {
  res.send('Saipavan');
});

const PORT = process.env.PORT ||8000
app.listen(PORT, () => {
  console.log("Server is running at port 8000");
});

export default app;
