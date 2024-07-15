import express from 'express';

const app = express();

app.listen(3000, () => {
    console.log("port 3000에서 서버가 작동 중");
})