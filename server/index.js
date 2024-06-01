import express from 'express'
import {mongooseConnection} from './utils/dbconnect.js'
import jwt from "jsonwebtoken"
import { apiRouter } from './routes/index.js'

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongooseConnection()

app.use("/api", apiRouter);

app.get('/ping',(req,res)=>{
    res.send('Server is running!')
})

app.use((_, res) => {
    res.send({
      message: "Not found!",
    });
  });

app.listen(8000,()=>console.log("server is running on 8000"))