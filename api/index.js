import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

dotenv.config();
const app = express();
app.use(express.json());

mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log("MongoDB connect!")
    })
    .catch((err) => {
        console.log(err)
    });



app.listen(3000, () => {
    console.log("port 3000에서 서버가 작동 중");
})

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

// 에러
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "서버 에러 발생! 관리자에게 문의하세요!";
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
})