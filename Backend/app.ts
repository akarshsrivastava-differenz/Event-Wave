import express,{Express, Request , Response} from "express";
import userRoutes from "./routes/userRoutes";
import { LoggerMiddleware } from "./middleware/logger";

const app:Express = express();
const PORT : number = 8000;

app.use(express.json());

app.use(LoggerMiddleware.logger); //Logger Middleware function to log server request information

//Router for user functionalities/API
app.use("/users" , userRoutes); 

//Root of application
app.get("/" , (req:Request , res:Response)=>{
    res.send("Hello World!");
})

app.listen(PORT , ()=>{
    console.log(`Server is running on port : ${PORT}`);
})
