import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";
import authRouter from "./routes/authRoutes.js"
import userRouter from "./routes/userRoutes.js";

const app = express();
app.use(express.json());
const port = process.env.PORT || 4000;

connectDB();

const allowedOrigin = ["http://localhost:5173", "https://mern-authentication-frontend-tau.vercel.app"]

app.use(cookieParser());
app.use(cors({origin:allowedOrigin, credentials : true}));

//API endpoints
app.get("/", (req, res) => {
    res.send("Response getting");
})

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

// app.listen(port, () => {
//     console.log(`Server started on PORT : ${port}`);
// })


export default app;