import dotenv from "dotenv";
dotenv.config();

//User model
import express, { Express, Request, Response } from "express";
import userRouter from "./routes/user/userRoutes";
import { LoggerMiddleware } from "./middleware/logger";
import sequelize from "./config/dbConfig";
import  "./models/user/user";
import "./models/event/event";
import "./config/association";
import cookieParser from "cookie-parser";
import cors from "cors"

const app: Express = express();
const PORT: number = 8000;
const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true,
};
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

sequelize.sync({ force:false , alter:false })
    .then(() => {
        console.log("Database and models synchronized successfully!");
    })
    .catch((err) => {
        console.error("Has error while connecting to the database : ", err);
    })

app.use(express.json());

app.use(LoggerMiddleware.logger); //Logger Middleware function to log server request information

//Router for user functionalities/API
app.use("/users", userRouter);

//Root of application
app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
})

app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`);
})
