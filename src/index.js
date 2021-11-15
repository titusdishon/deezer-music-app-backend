import express  from "express";
import routes from "./routes/routes.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app =  express();
import { testApp } from './app.js';
const PORT = process.env.NODE_PORT ;
app.use(cors());
app.options('*', cors());
app.use('/api/v1', routes);



const start = async () => {
    app.listen(PORT, () => {
        console.log(` 🚀 server started at port ${PORT}!!`)
    });
    
}

start();