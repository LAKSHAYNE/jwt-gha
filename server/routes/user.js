import  { Router } from "express";
import { getUser, insertUser } from  "../controllers/users.js";

const userRouter = Router();

userRouter.post("/getUser", getUser);

userRouter.post("/insertUser", insertUser);


export { userRouter };
