import express,{Express, Request , Response} from "express";
import userRoutes from "./routes/userRoutes";

const app:Express = express();
const PORT : number = 8000;

app.use("/users" , userRoutes);

app.get("/" , (req:Request , res:Response)=>{
    res.send("Hello World!");
})

app.listen(PORT , ()=>{
    console.log(`Server is running on port : ${PORT}`);
})
