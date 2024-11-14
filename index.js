import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import DB from "./database.js";
import { userRouter } from "./routes/authentication.js";
import { ProductRoute } from "./routes/productRoute.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

DB();

app.use(userRouter);
app.use(ProductRoute);

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(process.env.PORT, () => console.log("Server Running on PORT", process.env.PORT));