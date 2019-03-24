const Transaction = require('../models/transaction')
const token = require('../helpers/token')

class TransactionController{
    static create(req,res){
        const {productId, quantity, Price, status} = req.body
        let data ={
            owner: '',
            productId,
            quantity,
            totalPrice:quantity * Price,
            status,
        }
        token.verify(req.headers.token)
        .then(check=>{
            if (!check) {
                throw Error ({
                    status:401,
                    message:'forbidden authorized'
                })
            } else {
                data.owner = check
                return Transaction.create(data)  
            }
        })
        .then(data=>{
            res.status(201).json(data)
        })
        .catch(err=>{
            res.status(500).json(err.Error)
        })

    }
    
    static read(req,res){
        token.verify(req.headers.token)
        .then(check=>{
            if (!check) {
                throw Error({
                    status:401,
                    message:'invalid Authorized'
                })
            } else {
               return Transaction.findOne(check)
            }
        })
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            res.status(500).json(err.Error)
        })
    }
    
    static update(req,res){
        const {id, productId, quantity, Price, status} = req.body
        Transaction.findById(id)
        .then(data=>{
            if (productId) {
                data.productId = productId
            }
            if (quantity) {
                data.quantity = quantity
            }
            if (Price) {
                data.totalPrice = quantity * Price
            }
            if (status) {
                data.status = status
            }
            return data.save()
        })
        .then(data=>{
            res.status(203).json(data)
        })
        .catch(err=>{
            res.status(500).json(err.Error)
        })
    }
    
}
module.exports = TransactionController