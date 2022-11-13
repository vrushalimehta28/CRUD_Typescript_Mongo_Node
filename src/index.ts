// import { Console } from 'console';
import express,{Request, Response} from 'express';
import {router} from "./routes/routes"
import connects from './config/db';
const app = express();
const PORT = 5000

app.get('/test',(req:Request,resp:Response):void=>{
    resp.json({data:"test page"})
})

connects();

app.listen(PORT,():void=>{
    console.log('server is running on ${PORT}')
})