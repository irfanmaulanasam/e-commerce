const User = require('../models/user')
const password = require('../helpers/password')
const token = require('../helpers/token')
class UserController{

    static create(req,res){
        User.create(req.body)
        .then(data=>{
            res.status(201).json(data)
        })
        .catch(err=>{
            console.log(err)
            if(err.code === 11000){
                res.status(400).json({
                    message:'email/username already exist'
                })
            } else {
                console.log(`masuk sini sekarang`)
                res.status(500).json({
                    error:err.message,
                    message:'internal server error'
                })
            }
        })
    }

    static signin(req,res){
        let id = null
        User.findOne({$or:[
            {email:req.body.email},
            {username:req.body.email}    
        ]})
        .then(data=>{
            if (!data) {
                throw new Error({
                    message:'username/password is invalid'
                })
            } else {
                id = data.id
                password.compare(req.body.password,data.password)
            }
        })
        .then(check=>{
            if (check) {
                return token.create(id)
            } else {
                throw new Error ({
                    message: 'username/password is invalid'
                })
            }
        })
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    }

    static update(req,res){
        token.verify(req.header.token)
        .then(id=>{
            return User.findOne(id)
        })
        .then(user=>{
            if (user) {
                user.name = req.body.name
                user.username = req.body.username
                user.password = req.body.password
                return user.save()
            } else {
                throw new Error({
                    message:'user not found'
                })
            }
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
module.exports = UserController