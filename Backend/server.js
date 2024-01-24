require("dotenv").config();

const express = require('express');
const router = require('./routes/auth-route');
const cors = require('cors')
const app = express();
const connectDb = require('./Utils/db')

app.use(cors())

app.use(express.json())

app.use("/api/auth", router)

const PORT = 5000;
const HOST = https://ecommerce-swart-eight.vercel.app/;

connectDb().then(() => {
    app.listen(PORT, HOST, () => {
        console.log(`server is running at port: ${PORT}`);
    });
})
