import { threadId } from "worker_threads";
import User from "../../models/user/user";
import { Op } from "sequelize";

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


    static async createUser(userData: User): Promise<User> {
        try {
            const response = await User.create(userData);
            console.log(response);
            return response;
        }
        catch (error: any) {
            throw error;
        }
    }
}