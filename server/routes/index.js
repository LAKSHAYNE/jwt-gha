import { Router } from "express";
import { userRouter } from "./user.js";
import homeRouter from "./home.js";
import verifyJWT from "../utils/verifyauth.js";

const apiRouter = Router();

apiRouter.use("/user", userRouter);

apiRouter.use('/home',verifyJWT,homeRouter)

export { apiRouter };
