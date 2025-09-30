import dotenv from "dotenv";
dotenv.config();

//User model
import express, { Express, Request, Response } from "express";
import userRoutes from "./routes/user/userRoutes";
import { LoggerMiddleware } from "./middleware/logger";
import sequelize from "./config/dbConfig";
import  "./models/user";
import "./models/event";
import "./config/association";

const app: Express = express();
const PORT: number = 8000;


sequelize.sync({ force:false })
    .then(() => {
        console.log("Database and models synchronized successfully!");
    })
    .catch((err) => {
        console.error("Has error while connecting to the database : ", err);
    })

app.use(express.json());

app.use(LoggerMiddleware.logger); //Logger Middleware function to log server request information

//Router for user functionalities/API
app.use("/users", userRoutes);

//Root of application
app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
})

app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`);
})
