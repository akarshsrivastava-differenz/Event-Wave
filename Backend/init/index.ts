import Event from "../models/event/event";
import sequelize from "../config/dbConfig";
import { eventsData } from "./db";



sequelize.sync({ force: false, alter: false })
    .then(() => {
        console.log("Database and models synchronized successfully!");
    })
    .catch((err) => {
        console.error("Has error while connecting to the database : ", err);
    })

const insertData = async () => {
    const result = await Event.bulkCreate(eventsData);
}

try{
    insertData();
    console.log("Data insertion successfull");
}
catch(err){
    console.log("Data insertion failed!");
}

