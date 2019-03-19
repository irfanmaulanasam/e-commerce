const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({

    product:{
        type:String,
        require:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        require:true
    }
})

let Product = mongoose.model('Products',productSchema)

module.exports = Product