import User from "../../models/user/user";
import { Op } from "sequelize";
import jwt , { Jwt } from "jsonwebtoken";
import bcrypt from "bcrypt";
import {CustomErrorHandler} from "../../middleware/error-handler";

export class UserServices {
    static async getAllUsers() {
        try {
            const response = await User.findAll();
            return response
        }
        catch (err) {
            throw err;
        }
    }

    static async getUserById(id: string){
        try {
            if(!id){
                throw new Error("User not found or Invalid user!");
            }
            const response = await User.findByPk(id);
            if(!response){
                throw new Error("User not found or Invalid user!");
            }
            return response
        }
        catch(err){
            throw err;
        }
    }


    static async createUser(userData: User) {
        try {
            const isExist = await User.findAll({
                where : {
                    email : userData.email
                }
            });

            if(isExist){
               throw new CustomErrorHandler(400 , "User already exists!");
            }

            const salt : string = await bcrypt.genSalt(10);
            const hashed_password : string = await bcrypt.hash(userData.password , salt);
            userData.password = hashed_password;
            const newUser : User = await User.create(userData);
            const privateKey : string =  process.env.JWT_KEY || "";
            if(!privateKey){
                throw new CustomErrorHandler(500 , "Error with jwt key!");
            }
            const jwtToken  = jwt.sign({
                id:newUser.user_id ,
                user_role:newUser.role ,
                user_email:newUser.email
            } , privateKey , {expiresIn:"20h"});           
            const userId = newUser.user_id;
            return {jwtToken , userId};
        }
        catch (error: any) {
            throw error;
        }
    }
}