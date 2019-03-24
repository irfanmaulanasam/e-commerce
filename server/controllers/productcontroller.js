const Product = require('../models/product')
const User = require('../models/product')
const token = require('../helpers/token')

class ProductController{
    static create(req,res){
        const {name,description,imageUrl,tag,category,price,stock} = req.body
        Product.create({
                name,
                description,
                tag,
                imageUrl,
                category,
                price,
                stock
            })
        .then(data=>{
            res.status(201).json(data)
        })
        .catch(err=>{
            res.status(500).json(err.Error)
        })
    }

    static read(req,res){
        Product.find()
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            res.status(500).json(err.Error)
        })
    }

    static findOne(req,res){
        Product.findOne({where:req.body})
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            res.status(500).json(err.Error)
        })
    }

    static update(req,res){
        const {name,description,tag,category} = req.body
        token.verify(req.header.token)
        .then(id=>{
            return User.findOne({
                where:{user:id}
            })
        })
        .then(data=>{
            if (data) {
                return Product.findById(id)
            } else {
                throw Error({
                    message:'user not found'
                })
            }
        })
        .then(data=>{
            if(name){
                data.name = name
            }
            if (description) {
                data.description = description
            }
            if (price) {
                data.price = price
            }
            if(tag){
                data.tag = tag
            }
            if (category) {
                data.category = category
            }
            return data.save()
        })
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            res.status(500).json(err.Error)
        })
    }
    
    static delete(req,res){
        token.verify(req.header.token)
        then(id=>{
            User.findByIdAndDelete(id)
        })
        .then(data=>{
            res.status(410).json(data)
        })
        .catch(err=>{
            res.status(500).json(err.Error)
        })
    }
}
module.exports = ProductController