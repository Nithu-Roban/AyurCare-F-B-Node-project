const mongoose=require('mongoose');

//admin schema
const adminSchema= new mongoose.Schema({
    empId:{type:String, required:true,unique:true},
    name:{type:String, required:true},
    desig:{type:String, required:true},
    phone:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}
});

//model from schema
const Admin=mongoose.model('Admin',adminSchema)

module.exports=Admin;