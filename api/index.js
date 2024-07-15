import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

dotenv.config();

mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log("MongoDB connect!")
    })
    .catch((err) => {
        console.log(err)
    });

const app = express();

app.listen(3000, () => {
    console.log("port 3000에서 서버가 작동 중");
})

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);