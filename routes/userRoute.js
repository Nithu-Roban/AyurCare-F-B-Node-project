const express= require('express')
const path= require('path')


const user_Route=express()
const session= require("express-session")
const nodemailer= require("nodemailer")

// setting view engine and user view
user_Route.set("view engine",'ejs')
user_Route.set('views',"./view/users")


// controllers
const userController= require('../controllers/userController')


// initial page-user login
user_Route.get('/',userController.loadLogin)
user_Route.post('/verifyLogin', userController.verifyLogin)

// user register with otp verification
user_Route.get('/register',userController.loadSignup)
user_Route.post('/verifySignup',userController.verifySignup)
user_Route.get('/otp',userController.loadOtp)


// website routes
user_Route.get('/home', userController.loadHome)
user_Route.get('/cart', userController.loadCart)
user_Route.get('/payment', userController.loadPayment)
user_Route.get('/orderPlaced', userController.loadOrderPlaced)







// exporting user_Route
module.exports= user_Route