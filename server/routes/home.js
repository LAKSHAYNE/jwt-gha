import  { Router } from "express";
import { home } from "../controllers/home.js";

const homeRouter = Router()

homeRouter.get('/home',home)

export default homeRouter