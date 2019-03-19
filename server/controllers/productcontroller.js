const Product = require('../models/product')
const User = require('../models/product')
const token = require('../helpers/token')

class ProductController{
    static create(req,res){
        // console.log(req.body)
        const {name,description,tag,category} = req.body
        Product.create({
                name,
                description,
                tag,
                category
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
        const {id,name,description,tag,category} = req.body
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
                throw new Error({
                    message:'user not found'
                })
            }
        })
        .then(data=>{
            data.user = id
            data.name = name
            data.description = description
            data.price = price
            data.tag = tag
            data.category = category
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