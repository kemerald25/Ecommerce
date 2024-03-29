require("dotenv").config();

const express = require('express');
const router = require('./routes/auth-route');
const cors = require('cors')
const app = express();
const connectDb = require('./Utils/db')
const corsOptions = {
    origin: 'https://ecommerce-8hkr.vercel.app',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // enable set cookie
};

app.use(cors(corsOptions))

app.use(express.json())

app.use("/api/auth", router)

const PORT = 5000;

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`server is running at port: ${PORT}`);
    });
})
