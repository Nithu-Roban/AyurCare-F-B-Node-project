const mongoose= require('mongoose');

//schema

const productSchema = new mongoose.Schema({
    productId: {type: String, required: true, unique:true},
    productName: {type: String, required: true},
    typeId: {type:mongoose.Schema.Types.ObjectId,ref: 'Type', required:true},       //FK contraint from type
    stock: {type:Number, default:0},
    price:{type:Number, default:0},
    desc:{type:String},
    img:[{type:String}]
});

//model creation

const Product= mongoose.model('Product',productSchema);

module.exports=Product;



    