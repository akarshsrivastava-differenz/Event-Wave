import userData from "../models/user";
import { IUser } from "../models/user";
export class UserServices{
    static getAllUsers = () : IUser[]=>{
        return userData; 
    }

    static getUserById = (id:String): IUser | undefined => {
        const user = userData.find((u)=>u.id === id);
        return user ;
    }
}