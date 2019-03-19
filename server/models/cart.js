const mongoose = require ('mongoose')
const timestamp = require('mongoose-timestamp')
const Schema = mongoose.Schema

const cartSchema = new Schema({
    user: {
        type:Schema.objectId.user,
        ref:'User'
    },
    cart:{
        type:String,
        require:true
    }
})
cartSchema.plugin(timestamp,  {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  })

let Cart = mongoose.model('Carts',cartSchema)

module.exports = Cart