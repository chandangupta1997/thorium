const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//router.post("/createUser", UserController.createUser  )

//router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )

router.get("/getBooksData", BookController.getBooksData) // book controler ek lag si file hai jha aage ke fx define hai 

router.get("/getBookList",BookController.bookList) // link ke baad function  ko call kiya hai jo book controller mai defined hai aur wha se yha exported bhi hai 

router.post("/getBooksinYear",BookController.getBooksinYear)

router.get("/getXINRBooks",BookController.getXINRBooks)

router.get("/getRandomBooks",BookController.getRandomBooks)

module.exports = router;