const express=require('express')
const path=require('path')

const admin_Route=express()
const session=require("express-session")

// const adminController=require("../controllers/adminController")

const Admin = require('../models/adminModel')


const loadAdminRegister= async(req,res)=>{
    try {

        res.render('adminRegister')
        // res.send("Hai")
        
    } catch (error) {
        console.log(error.message)
        
    }
}


const loadVerifyAdminRegister=async(req,res)=>{
    try{
        const{empId,name,desig,phone,email,password}=req.body
        const existingAdmin=await Admin.findOne({empId:empId})
        if(existingAdmin){
            return res.status(400).json({ message: "Admin with this Employee ID already exists." });
        }
        const adminData= new Admin({
            empId:empId,
            name:name,
            desig:desig,
            phone:phone,
            email:email,
            password:password
        })

        const admindata= await adminData.save()
        console.log(admindata)
        res.redirect('/home')
    }
    catch(error){
        console.log(error.message)
    }
}

const loadAdminLogin=async(req,res)=>{
    res.render('adminLogin')
}

const loadVerifyAdminLogin= async(req,res) =>{
    try{
        // const {empId, password}=req.body
        // const existingAdmin=await Admin.findOne({empId:empId, password:password})
        // if(existingAdmin){
            console.log("logged in Successfully")
            res.redirect('/home')
        //     res.render('/home')
        // }
        
    }
    catch(error){
        console.log(error.message)
    }
}
module.exports={
            loadAdminRegister,
            loadVerifyAdminRegister,
            loadAdminLogin,
            loadVerifyAdminLogin  
            }




















