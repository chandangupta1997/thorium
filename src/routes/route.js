const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const MidwareController =require("../controllers/auth")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", userController.getUserData)

router.put("/users/:userId",MidwareController.midwareTokenAuthentication, userController.updateUser)
router.put("/users/:userId",MidwareController.midwareTokenAuthentication, userController.deleteUser)




//- Write a PUT api /users/<userId> to update user details.
// Pass the userId as path param in the url and update the attributes received in the request body. Check that request must contain x-auth-token header. 
//If absent, return a suitable error.
module.exports = router;

