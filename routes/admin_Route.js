const express=require('express')
const path=require('path')

const admin_Route=express()
const session=require("express-session")

// setting view engine and the admin view
admin_Route.set("view engine",'ejs')
admin_Route.set('views',"./view/admin")

// importing admin, user controllers
const adminController=require('../controllers/adminController')
const userController=require("../controllers/userController")

// admin login and verify
admin_Route.get('/',adminController.loadAdminLogin)
admin_Route.post('/verifyAdminLogin',adminController.loadVerifyAdminLogin)

// admin register and verify
admin_Route.get('/adminRegister',adminController.loadAdminRegister)
admin_Route.post('/Verifyregister',adminController.loadVerifyAdminRegister)
admin_Route.get('/home', userController.loadHome)





// exporting admin_Route
module.exports=admin_Route






