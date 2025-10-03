import { Sequelize, Model, DataTypes, UUIDV4 } from "sequelize";
import sequelize from "../../config/dbConfig";

interface EventAttributes{
    event_id: string,
    event_title: string,
    event_description: string,
    event_category: string,
    event_start: Date,
    event_end: Date,
    event_venue_address: string,
    event_price: number,
    event_size: number,
}

class Event extends Model<EventAttributes> implements EventAttributes {
    declare event_id: string;
    declare event_title: string;
    declare event_description: string;
    declare event_category: string;
    declare event_start: Date;
    declare event_end: Date;
    declare event_venue_address: string;
    declare event_price: number;
    declare event_size: number;
}

Event.init(
    {
        event_id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: UUIDV4,
            allowNull: false,
        },
        event_title: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        event_description: {
            type: DataTypes.STRING(250),
            allowNull: false
        },
        event_category: {
            type: DataTypes.ENUM("conference" , "workshop" , "concert" , "festival" , "networking"),
            allowNull:false,
        },
        event_start: {    
            type: DataTypes.DATE,
            allowNull: false
        },
        event_end: {
            type: DataTypes.DATE,
            allowNull: false
        },
        event_venue_address: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        event_price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        event_size: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize: sequelize,
        tableName:"events",
        modelName:"Event",
        timestamps:true,
        paranoid:true,
        deletedAt:"deleted_at"
    }
);

export default Event;
