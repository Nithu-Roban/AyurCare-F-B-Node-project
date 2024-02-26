const mongoose= require('mongoose');

//schema

const typeSchema = new mongoose.Schema({
    typeId: {type:String, required:true, unique:true},
    category: {type:String, required:true}
});

//create a model from the schema

const Type= mongoose.model('Type',typeSchema);

module.exports= Type;