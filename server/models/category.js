const mongoose = require ('mongoose')
const timestamp = require('mongoose-timestamp')
const Schema = mongoose.Schema

const categorySchema = new Schema({
    Product: {
        type:Schema.objectId.product,
        ref:'Product'
    },
    category:{
        type:String,
        require:true
    }
})

categorySchema.plugin(timestamp,  {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  })

let Category = mongoose.model('Categories',categorySchema)

module.exports = Category