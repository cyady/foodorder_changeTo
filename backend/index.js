const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const mongoose = require("mongoose")
const authController = require('./controllers/authController')
const productController = require('./controllers/productController')
const uploadController = require('./controllers/uploadController')
const app = express()


// connect our db

//mongoose.connect(process.env.MONGO_URL, () => console.log('DB is successfully connected')) <- 몽구스 버전 6부터는 콜백을 지원하지 않고 async/await을 사용해야함

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('DB is successfully connected')

      } catch (error) {
        console.error('DB connection error:', error)
    }
}

connectDB()

// routes & middleware
// those two middlewares make req.body accessible, otherwise it would be undefined!!
app.use(cors()) // server is on port 5000, client is on port 3000, we are going to get a cors ERROR, bot cors() removes cors error
app.use(express.json())
app.use(express.urlencoded({exteded: true}))
app.use('/auth', authController)
app.use('/product', productController)
app.use('/upload', uploadController)

//start our server
app.listen(process.env.PORT, () => console.log('Server has been started successfully!'))





