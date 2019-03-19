process.env.NODE_ENV = 'test';

const chai =require('chai')
const should = chai.should()
const chaihttp = require('chai-http')
const app = require('../app')
 
chai.use(chaihttp)

describe('e-commerce test', function() {        
    describe('product',function(){
        it('should list ALL products on /product/list GET',function(done){
            chai.request(app)
                .get(`/product/list`)
                .send()
                .end((err,res)=>{
                    err.should.be.null
                    res.should.has.status(200);
                    res.should.be.json;
                    res.body.should.be.a('array');
                    res.body[0].hasOwnProperty(`product._id`)
                    res.body[0].hasOwnProperty(`product.name`)
                    res.body[0].hasOwnProperty(`product.price`)
                    res.body[0].hasOwnProperty(`product.description`)
                    res.body[0].hasOwnProperty(`tag`)
                    done();
                })
        })

        it('should add a SINGLE product on /product/add POST',function (done) {
            chai.request(app)
                .post(`/product/add`)
                .send({
                    product:'kolor ijo',
                    description:'celana superhero marvel hulk',
                    tag:'pakaian'
                })
                .end((err,res)=>{
                    err.should.be.null
                    res.should.has.status(201)
                    res.should.be.a('object')
                    res.body.hasOwnProperty(`product`)
                    res.body.hasOwnProperty(`description`)
                    res.body.hasOwnProperty(`tag`)
                    done()
                })
        });
        it('should list Spesific product on /product/list/12345 GET',function (done) {
            chai.request(app)
                .get(`/product/list/12345`)
                .send()
                .end((err,res)=>{
                    err.should.be.null
                    res.should.has.status(201)
                    res.should.be.a('Array')
                    res.body.hasOwnProperty(`product`)
                    res.body.hasOwnProperty(`description`)
                    res.body.hasOwnProperty(`tag`)
                    done()
                })
        });

        it('should update a SINGLE product on /product/update/12345 PUT',function (done) {
            chai.request(app)
                .put(`/product/update/12345`)
                .send({
                    product:'celana monster',
                    description:'celana superhero marvel hulk',
                    tag:'pakaian'
                })
                .end((err,res)=>{
                    err.should.be.null
                    res.should.has.status(201)
                    res.should.be.a('Object')
                    res.body.hasOwnProperty(`product`)
                    res.body.hasOwnProperty(`description`)
                    res.body.hasOwnProperty(`tag`)
                    done()
                })
        });

        it('should delete a SINGLE product on /product/delete/12345 DELETE', function (done) {
            chai.request(app)
                .delete(`/product/delete/12345`)
                .send()
                .end((err,res)=>{
                    err.should.be.null
                    res.should.has.status(201)
                    res.should.be.a('Object')
                    res.body.hasOwnProperty(`product`)
                    res.body.hasOwnProperty(`description`)
                    res.body.hasOwnProperty(`tag`)
                    done()
                })
        });
    });
    // end test product

    // start test product
    describe('user', function() {
        it('should add a single user on /user/signup POST',function (done) {
            chai.request(app)
            .post(`/user/signup`)
            .send({
                name:'anaknya persib',
                username:'kejayaan persib',
                email:'iniemail@nama.nya',
                password:'owhjadibegitu'
            })
            .end((err,res)=>{
                err.should.be.null
                res.should.has.status(201)
                res.should.be.a('Object')
                res.body.hasOwnProperty(`email`)
                res.body.hasOwnProperty(`password`)
                done()
            })
        });
        
        it('should get a token on /user/signin POST',function (done) {
            chai.request(app)
            .post(`/user/signin`)
            .send({
                email:'iniemail@nama.nya',
                password:'owhjadibegitu'
            })
            .end((err,res)=>{
                err.should.be.null
                res.should.has.status(201)
                res.should.be.a('Object')
                res.body.hasOwnProperty(`username`)
                res.body.hasOwnProperty(`token`)
                done()
            })
        });
        // it('should get a token on /user/Gsignin POST');
        it('should update user profile on /user/update/12345 PUT',function (done) {
            chai.request(app)
            .put(`/user/update/12345`)
            .send({
                username:'kita gantinama'
            })
            .end((err,res)=>{
                err.should.be.null
                res.should.has.status(201)
                res.should.be.a('Object')
                res.body.hasOwnProperty(`username`)
                done()
            })
        })
        it('should delete user profile on /user/delete/12345 DELETE',function (done) {
            chai.request(app)
            .delete(`/user/delete/12345`)
            .send()
            .end((err,res)=>{
                err.should.be.null
                res.should.has.status(200)
                res.should.be.a('Object')
                res.body.hasOwnProperty(`username`)
                done()
            })
        })
    });

    // end user CRUD routes

    // start cart test

    describe('cart', function() {
        it('should get an array on /cart GET',function(done) {
            chai.request(app)
            .get(`/cart/`)
            .send({
                token:'kita gantinama'
            })
            .end((err,res)=>{
                err.should.be.null
                res.should.has.status(201)
                res.should.be.a('array')
                res.body[0].hasOwnProperty(`product._id`)
                res.body[0].hasOwnProperty(`product.name`)
                res.body[0].hasOwnProperty(`product.price`)
                res.body[0].hasOwnProperty(`product.quantity`)
                done()
            })
        });

        it('should adding product cart order by customer on /cart/12345 POST',function (done) {
            chai.request(app)
                .post(`/cart/add/12345`)
                .send({
                    product:'kolor ijo',
                    description:'celana superhero marvel hulk',
                    quantity: 1
                })
                .end((err,res)=>{
                    err.should.be.null
                    res.should.has.status(200)
                    res.should.be.a('object')
                    res.body.hasOwnProperty(`product`)
                    res.body.hasOwnProperty(`description`)
                    res.body.hasOwnProperty(`quantity`)
                    done()
                })
        });
        it('should delete product on cart /cart/12345 DELETE',function (done) {
            chai.request(app)
                .post(`/product/delete/12345`)
                .send()
                .end((err,res)=>{
                    err.should.be.null
                    res.should.has.status(201)
                    res.should.be.a('object')
                    res.body.hasOwnProperty(`product`)
                    res.body.hasOwnProperty(`description`)
                    res.body.hasOwnProperty(`tag`)
                    done()
                })
        });
    });

})
// end cart test