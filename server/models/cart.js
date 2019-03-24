const mongoose = require ('mongoose')
const timestamp = require('mongoose-timestamp')
const Schema = mongoose.Schema

const cartSchema = new Schema({
    cartOwner: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        require:[true,'product is invalid']
    },
    quantity:{
        type:Number,
        require:true,
        validate:{
            validator(quantity) {
                return quantity > 0 ;
            },
            message: `quantity cannot be 0 point`
        }
    },
    status:{
        type:Boolean,
        require:[true,'status undefined']
    }
})
cartSchema.plugin(timestamp,  {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  })

let Cart = mongoose.model('Carts',cartSchema)

module.exports = Cart