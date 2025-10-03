import User from "../../models/user/user";
import { Op } from "sequelize";
import jwt, { Jwt } from "jsonwebtoken";
import bcrypt from "bcrypt";
import { CustomErrorHandler } from "../../middleware/error-handler";


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

    static async getUserById(id: string) {
        try {
            if (!id) {
                throw new CustomErrorHandler(400 , "Invalid request : id is missing!");
            }
            const response = await User.findByPk(id);

            return response
        }
        catch (err) {
            throw err;
        }
    }

    static async createUser(userData: User) {
        try {
            
            const isExist = await User.findOne({
                where: {
                    email: userData.email
                }
            });

            if (isExist) {
                throw new CustomErrorHandler(400, "User already exists!");
            }

            const salt: string = await bcrypt.genSalt(10);
            const hashed_password: string = await bcrypt.hash(userData.password, salt);
            userData.password = hashed_password;
            const newUser = await User.create(userData);
            const privateKey: string = process.env.JWT_KEY || "";
            if (!privateKey) {
                throw new CustomErrorHandler(500, "Error with jwt key!");
            }
            const jwtToken = jwt.sign({
                id: newUser.user_id,
                user_role: newUser.role,
                user_email: newUser.email
            }, privateKey, { expiresIn: "20h" });
            const userId = newUser.user_id;
            
            if(!jwtToken){
                throw new CustomErrorHandler(500 , "Error with jwt token!");
            }

            return { jwtToken, userId };
        }
        catch (err) {
            throw err;
        }
    }

    static async loginUser(userEmail : string , userPassword : string){
        try{
            if(!userEmail || !userPassword){
                throw new CustomErrorHandler(400 , "Invalid or missing credentials!");
            }
            const isUserExists = await User.findOne({where : {
                email : userEmail
            }});
            if(!isUserExists){
                throw new CustomErrorHandler(404 , "Invalid credential or user does not exists!");
            }
            const isAuthorized=await bcrypt.compare(userPassword , isUserExists.password);
            if(!isAuthorized){
                throw new CustomErrorHandler(400 , "Invalid credential or user does not exists");
            }
            const jwtPayload={
                user_id:isUserExists.user_id,
                user_role:isUserExists.role,
                user_email:isUserExists.email
            }
            const jwtSecret = process.env.JWT_KEY || "";
            const jwtToken = jwt.sign(jwtPayload , jwtSecret , {expiresIn:"1h"} );
            const userId = isUserExists.user_id;
            
            return {jwtToken , userId};
        }
        catch(err){
            throw err;
        }
    }
}