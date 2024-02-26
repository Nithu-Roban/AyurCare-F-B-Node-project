const mongoose = require('mongoose');

//schema

const orderSchema = new mongoose.Schema({
    orderId: {type:String, required:true, unique:true},
    cartId: {type:mongoose.Schema.Types.ObjectId,ref: 'Cart', required:true},
    typeId: {type:mongoose.Schema.Types.ObjectId,ref: 'Cart', required:true},
    productId: {type:mongoose.Schema.Types.ObjectId,ref: 'Cart', required:true},
    qty: {type:Number},
    price: {type:Number},
    subtotal: {type:Number},
    payment: {type: String},
    status:{type: String}
});

//model

const Order= mongoose.model('Order',orderSchema);

module.exports=Order;