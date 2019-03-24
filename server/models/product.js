const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    owner: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    product:{
        type:String,
        require:true
    },
    description:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        require:true
    },
    category:{
        type:Array,
    },
    tag:{
      type:Array  
    },
    price:{
        type:Number,
        require:true
    },
    stock:{
        type:Number,
        require:true
    }
})

let Product = mongoose.model('Products',productSchema)

module.exports = Product