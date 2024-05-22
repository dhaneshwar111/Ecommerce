import express from "express"
import dotenv from "dotenv"
import morgan from "morgan"
import connectDB from "./config/db.js"
import authRoute from "./routes/authRoute.js"
import categoryRoute from "./routes/categoryRoute.js"
import productRoute from "./routes/productRoute.js"
import cors from "cors"


dotenv.config();
connectDB();


const app = express();

// middlewares
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))


// routes
app.use("/api/v1/auth",authRoute)
app.use("/api/v1/category",categoryRoute)
app.use("/api/v1/product",productRoute)


app.get("/",(req,res)=>{
    res.send({
        msg:"welcome to e-commerce app"
    })
})

// PORT
 
const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})