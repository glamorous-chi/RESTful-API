import { connectDb } from "./src/db.config.js";
import express from "express";
import userRouter from "./src/routes/user.js"
import authRouter from "./src/routes/auth.js"

const app = express();
app.use(express.json())

const port = process.env.PORT
const dbUrl = process.env.MONGODB_URL
console.log("Server started");

connectDb(dbUrl)

app.use("/api/auth", authRouter)
app.use("/api", userRouter)

app.listen(port, (req, res) => {
    console.log(`Server listening on port ${port}`);
})