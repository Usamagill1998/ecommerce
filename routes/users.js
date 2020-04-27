const express = require('express');
const router = express.Router()
const {sayhi} =require('../controllers/user')

const{signup,signin} = require("../controllers/user")
const {userSignupValidator} = require('../validator/index')


router.post('/signin',signin);

router.post('/signup',userSignupValidator,signup);
router.get('/',sayhi)
   



module.exports=router;