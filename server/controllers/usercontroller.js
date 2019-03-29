const User = require('../models/user')
const password = require('../helpers/password')
const token = require('../helpers/token')
require('dotenv').config()
const specialkey = process.env.kopilopi

class UserController{

    static create(req,res){
        console.log('masuk sini')
        console.log(req.params,'<<<<<')
        let newUser = req.body
        let dataSuccess = {}

            if (req.params.specialkey === specialkey) {
                newUser.Admin = true
            } else {
                newUser.Admin = false
            }
        User.create(newUser)
        .then(data=>{
            dataSuccess = {
                username:data.username,
                name:data.name,
                address:data.address,
                isAdmin:data.Admin,
                token:null
            }
            return token.create(data.id)
        })
        .then(data=>{
            dataSuccess.token = data
            res.status(201).json(dataSuccess)
        })
        .catch(err=>{
            console.log(err)
            if(err.Error === 'invalid address'){
                res.status(404).json({
                    message:'page not found'
                })
            } else if(err.code === 11000){
                res.status(400).json({
                    message:'email/username already exist'
                })
            } else if(err.message){
                let message = err.message.split(':').slice(1)
                res.status(400).json({
                    message: message
                })
            } else if (err.message === 'Path `password` (`985021`) is shorter than the minimum allowed length (8).'){
                res.status(400).json(err.message)
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
        console.log(req.body,'data dari client')
        let id = null
        let dataSuccess = {}
        User.findOne({$or:[
            {email:req.body.email},
            {username:req.body.email}    
        ]})
        .then(data=>{
            console.log(data,'data dari database')
            if (!data) {
                console.log('masuk sini dia')
                throw new Error ('username/password is invalid')
            } else if(data.Admin){
                console.log('ini kesini')
                dataSuccess.isAdmin = data.Admin
                id = data.id
                return password.compare(req.body.password,data.password)
            } else {
                return password.compare(req.body.password, data.password)
            }
        })
        .then(check=>{
            console.log(check,'hasil cek pas')
            if (check) {
                return token.create(id)
            } else {
                throw ({
                    message: 'username/password is invalid'
                })
            }
        })
        .then(data=>{
            console.log(data)
            dataSuccess.token = data
            res.status(200).json(dataSuccess)
        })
        .catch(err=>{
            if(err.message === 'username/password is invalid'){
                console.log(err)
                res.status(404).json(err.message)
            } else {
                res.status(500).json(err)
            }
        })
    }

    static update(req,res){
        const {name,username,password,address} = req.body
        token.verify(req.headers.token)
        .then(id=>{
            return User.findById(id)
        })
        .then(user=>{
            if (user) {
                if (name) {
                    user.name = name
                }
                if(username){
                    user.username = username
                }
                if (password) {
                    user.password = password
                }
                if (address) {
                    user.address = address
                }
                return user.save()
            } else {
                throw Error({
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