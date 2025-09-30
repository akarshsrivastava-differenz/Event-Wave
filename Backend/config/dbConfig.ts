import { Sequelize } from "sequelize";


const sequelize = new Sequelize(
    process.env.DB_NAME || "event-wave",
    process.env.DB_USER || "root",
    process.env.DB_PASSWORD || "",
    {
        host:process.env.DB_HOST || "localhost",
        dialect:"mysql"
    }
)


sequelize.authenticate()
.then(()=>{
    console.log("Database communication has been established successfully");
})
.catch((err)=>{
    console.error("Unable to connect to database! : ",err);
});


export default sequelize;