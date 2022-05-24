const express = require('express')
const router = express.Router();
const{home_call,about_call,addproduct_call, insertUser, showUsers, upload, viewProduct_by_id,
     deleteProduct_by_id, updateProduct, updateProduct_byID, loginpage, signuppage, registerUser,
     verifyUser} = require('../controller/userController')

router.get('/',home_call)
router.get('/login',loginpage)
router.get('/adduser',addproduct_call)
router.get('/index',home_call)
router.get('/showusers',showUsers)
router.post('/add',upload, insertUser);
router.post('/register', registerUser);
router.post('/verify', verifyUser);
router.get('/viewuser/:id', viewProduct_by_id)
router.get('/delete/:id', deleteProduct_by_id)
router.get('/update/:id', updateProduct)
router.post('/update/:id', upload,updateProduct_byID)
module.exports  = router