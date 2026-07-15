import express from 'express';
import cors from 'cors';
import ConnectDb from './config/dbConfig.js';
import authRouter from './routes/authRouter.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.use('/auth' , authRouter);

app.listen(3000 , () => {
    console.log("Server is running");
    ConnectDb();
})