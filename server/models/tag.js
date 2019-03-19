const mongoose = require ('mongoose')
const timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema

const tagtSchema = new Schema({
    product: {
        type:Schema.objectId.Product,
        ref:'Product'
    },
    tag:{
        type:String,
        require:true
    }
})
tagtSchema.plugin(timestamps,  {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });

let Tag = mongoose.model('Tags',tagtSchema)

module.exports = Tag