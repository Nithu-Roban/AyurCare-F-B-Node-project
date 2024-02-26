const express=require('express')
const path=require('path')

const admin_Route=express()
const session=require("express-session")

// admin_Route.set('view engine', 'ejs');
// admin_Route.set('views', path.join(__dirname, 'view', 'admin'));

admin_Route.set("view engine",'ejs')
admin_Route.set('views',"./view/admin")

const adminController=require('../controllers/adminController')
const userController=require("../controllers/userController")
admin_Route.get('/adminRegister',adminController.loadAdminRegister)
admin_Route.post('/Verifyregister',adminController.loadVerifyAdminRegister)
admin_Route.get('/home', userController.loadHome)
admin_Route.get('/',adminController.loadAdminLogin)
// admin_Route.post('/verifyAdminLogin',adminController.loadVerifyAdminLogin)
admin_Route.post('/verifyAdminLogin',adminController.loadVerifyAdminLogin)
module.exports=admin_Route






