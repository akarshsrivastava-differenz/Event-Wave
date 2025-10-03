import { DataTypes, Model , UUIDV4 } from "sequelize";
import sequelize from "../../config/dbConfig";

export type UserRole = 'organiser' | 'attendee'; 

interface UserAttributes {
    user_id: string,
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    role: UserRole,
    phone_number: string
}


class User extends Model<UserAttributes> implements UserAttributes {
    declare user_id: string;
    declare first_name: string;
    declare last_name:string;
    declare email: string;
    declare password: string;
    declare role: UserRole;
    declare phone_number: string;
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
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.ENUM("attendee" , "organiser"),
            allowNull: false,
            defaultValue:"attendee"
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
        timestamps:true,
        paranoid:true,
        deletedAt:"deleted_at"
    }
);

export default User;