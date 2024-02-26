const mongoose = require('mongoose');

//schema

const orderSchema = new mongoose.Schema({
    orderId: {type:String, required:true, unique:true},
    cartId: {type:mongoose.Schema.Types.ObjectId,ref: 'Cart', required:true},       //Foreign key constraint from cart
    typeId: {type:mongoose.Schema.Types.ObjectId,ref: 'Cart', required:true},       //Foreign key constraint from cart
    productId: {type:mongoose.Schema.Types.ObjectId,ref: 'Cart', required:true},    //Foreign key constraint from cart
    qty: {type:Number},
    price: {type:Number},
    subtotal: {type:Number},
    payment: {type: String},
    status:{type: String}
});

//model

const Order= mongoose.model('Order',orderSchema);

module.exports=Order;