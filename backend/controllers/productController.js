const productController = require("express").Router()
const Product = require("../models/contents")
const {verifyToken, verifyTokenAdmin} = require('../middlewares/verifyToken')
const multer = require('multer');


// 파일 저장 경로 및 파일명 설정
// multer 설정 (이미지 업로드를 위한 설정)
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // 파일 저장 경로
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname); // 파일명 설정
    }
  });
  
  const upload = multer({ storage });

// 기본 이미지 경로
const DEFAULT_IMAGE = "../uploads/1727174979641-about-img.png";

// get all
productController.get('/', verifyToken, async(req,res) => {
    try {
        //req.query = {category: 'pizza'}
        const products = await Product.find(req.query)
        return res.status(200).json(products)
    } catch (error) {
        console.error(error)
    }
})


// get all posts by category
productController.get('/', verifyToken, async (req, res) => {
  try {
    const category = req.query.category; // URL 쿼리에서 category 추출
    let products;

    if (category) {
      products = await Product.find({ category }); // 카테고리에 맞는 게시글만 찾음
    } else {
      products = await Product.find(); // 모든 게시글을 가져옴
    }

    return res.status(200).json(products);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Failed to fetch posts.' });
  }
});



// get one
productController.get('/find/:id', verifyToken, async(req,res) => {
     try {
        const productId = req.params.id
        const product = await Product.findById(productId)
        if(!product){
            return res.status(500).json({msg: "No product with such i"})
        }
        return res.status(200).json(product)

     } catch (error) { 
        console.error(error)
     }
})

// create product (image + text data)
productController.post('/', [verifyTokenAdmin, upload.single('image')], async (req, res) => {
    try {
        const imgFilename = req.file ? req.file.filename : DEFAULT_IMAGE;

      const newProduct = new Product({
        title: req.body.title,
        desc: req.body.desc,
        category: req.body.category,
        img: imgFilename // 이미지가 없으면 기본 이미지 사용
      });
  
      await newProduct.save();
      return res.status(201).json(newProduct);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Failed to create post.' });
    }
  });
  
  module.exports = productController;