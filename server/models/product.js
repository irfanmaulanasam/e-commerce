const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    user: {
        type:Schema.objectId.User,
        ref:'User'
    },
    name:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    }
})

let Product = mongoose.model('Products',productSchema)

module.exports = Product