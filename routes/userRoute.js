const express= require('express')
const path= require('path')


const user_Route=express.Router()
const session= require("express-session")
const nodemailer= require("nodemailer")




// controllers


const userController= require('../controllers/userController')






user_Route.get('/register',userController.loadSignup)
user_Route.post('/verifySignup',userController.verifySignup)
user_Route.post('/verifyLogin', userController.verifyLogin)


user_Route.get('/home', userController.loadHome)
user_Route.get('/cart', userController.loadCart)
user_Route.get('/payment', userController.loadPayment)
user_Route.get('/orderPlaced', userController.loadOrderPlaced)

user_Route.get('/',userController.loadLogin)


user_Route.get('/otp',userController.loadOtp)



module.exports= user_Route