const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const transactionSchema = new Schema({
    owner: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    productId: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product'
    },
    quantity:{
        type:String,
        required:true
    },
    totalPrice:{
        type:Number,
        require:true
    },
    status:{
        type:String,
        required:[true,'status isnot detected']
    }
})

let Transactions = mongoose.model('Transactions',transactionSchema)

module.exports = Transactions 