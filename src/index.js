import express  from "express";
import routes from "./routes/routes.js";
import cors from "cors";
const app =  express();
import { testApp } from './app.js';

app.use(cors());
app.options('*', cors());
app.use('/api/v1', routes);



const start = async () => {
    app.listen(3001, () => {
        console.log(' 🚀 server started at port 3001!!')
    });
    
}

start();