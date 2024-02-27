const mongoose= require('mongoose');


//schema

const cartSchema= new mongoose.Schema({
    cartId: {type: String,required: true, unique: true},
    productId: {type: mongoose.Schema.Types.ObjectId,ref:'Product', required: true},   //Foreign key reference from product  collection
    typeId: {type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },   //Foreign key reference from product  collection
    quantity: {type:Number},
    price: {type:Number},
    total: {type: Number},
    gst: {type:Number},
    subtotal: {type:Number},
    payment: {type:String}
});

//model

const Cart = mongoose.model('Cart', cartSchema);

module.exports= Cart;