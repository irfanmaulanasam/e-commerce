const { chai, chaihttp, expect, should, app, clearDB, mongoose } = require('../helpers/databasetest');
mongoose.set('useFindAndModify', false);

chai.use(chaihttp)
before(function (done) { clearDB(done) });
after(function (done) { clearDB(done) });

describe('cart', function() {
    it('should get an array on /cart GET',function(done) {
        chai.request(app)
        .get(`/cart/`)
        .send({
            token:'kita gantinama'
        })
        .end((err,res)=>{
            should.not.exist(err)
            // err.should.be.null
            res.should.has.status(201)
            res.should.be.a('array')
            res.body[0].hasOwnProperty(`product._id`)
            res.body[0].hasOwnProperty(`product.name`)
            res.body[0].hasOwnProperty(`product.price`)
            res.body[0].hasOwnProperty(`product.quantity`)
            done()
        })
    });

    it.only('should adding product cart order by customer on /cart/12345 POST',function (done) {
        chai.request(app)
            .post(`/cart/add/12345`)
            .send({
                product:'kolor ijo',
                description:'celana superhero marvel hulk',
                quantity: 1
            })
            .end((err,res)=>{
                should.not.exist(err)
                // err.should.be.null
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
                should.not.exist(err)
                // err.should.be.null
                res.should.has.status(201)
                res.should.be.a('object')
                res.body.hasOwnProperty(`product`)
                res.body.hasOwnProperty(`description`)
                res.body.hasOwnProperty(`tag`)
                done()
            })
    });
});