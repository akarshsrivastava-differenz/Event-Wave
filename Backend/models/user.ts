import { DataTypes, Model , UUIDV4 } from "sequelize";
import sequelize from "../config/dbConfig";

interface UserAttributes {
    user_id: string,
    first_name: string,
    last_name: string,
    email: string,
    hashed_password: string,
    role: string,
    phone_number: string
}

class User extends Model<UserAttributes> implements UserAttributes {
    public user_id!: string;
    public first_name!: string;
    public last_name!:string;
    public email!: string;
    public hashed_password!: string;
    public role!: string;
    public phone_number!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

User.init(
    {
        user_id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: UUIDV4,
            allowNull: false
        },
        first_name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        last_name : {
            type:DataTypes.STRING(50),
            allowNull:false
        },
        email: {
            type: DataTypes.STRING(30),
            allowNull: false,
            unique: true,
            validate:{
                isEmail:true,
            }
        },
        hashed_password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.STRING(9),
            allowNull: false
        },
        phone_number: {
            type: DataTypes.STRING(10),
            allowNull: false,
            unique: true
        }
    },
    {
        sequelize:sequelize,
        tableName:"users",
        modelName:"User",
        timestamps:true
    }
);

export default User;