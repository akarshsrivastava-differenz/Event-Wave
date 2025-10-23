import { Request , Response , NextFunction } from "express";
import { AppError } from "../utils/AppError";

export const errorHandler = (err : AppError | Error , req : Request , res : Response , next : NextFunction)=>{
    if(err instanceof AppError){
        res.status(err.statusCode).json({message:err.message});
    }
    res.status(500).json({message : "Internal server error"});
}