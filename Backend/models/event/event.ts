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
    event_quantity: number,
}

class Event extends Model<EventAttributes> implements EventAttributes {
    public event_id!: string;
    public event_title!: string;
    public event_description!: string;
    public event_category!: string;
    public event_start!: Date;
    public event_end!: Date;
    public event_venue_address!: string;
    public event_price!: number;
    public event_quantity!: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Event.init(
    {
        event_id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: UUIDV4,
            allowNull: false
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
            type: DataTypes.STRING(20)
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
        event_quantity: {
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
