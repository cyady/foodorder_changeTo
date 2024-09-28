const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const mongoose = require("mongoose")
const authController = require('./controllers/authController')
const productController = require('./controllers/productController')
const uploadController = require('./controllers/uploadController')
const newsletterController = require('./controllers/newsletterController');
const app = express()
const port = process.env.PORT || 5000;

// DB 연결
async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('DB is successfully connected')

    } catch (error) {
        console.error('DB connection error:', error)
    }
}

connectDB()

// Middleware 설정
app.use(cors({
  origin: "http://localhost:3000", // 클라이언트 도메인
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/uploads', express.static('uploads')) // 정적 파일 경로 설정

// 라우터 설정
app.use('/auth', authController)
app.use('/product', productController)
app.use('/upload', uploadController)
app.use('/newsletter', newsletterController);

// 서버 시작
app.listen(port, () => console.log('Server has been started successfully!'))
