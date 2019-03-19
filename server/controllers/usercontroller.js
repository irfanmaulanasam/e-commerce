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
            res.status(500).json({
                error:err.message,
                message:'internal server error'
            })
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
        
    }
    static delete(req,res){

    }
}
module.exports = UserController