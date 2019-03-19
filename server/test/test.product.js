const { chai, chaihttp, should, app, clearDB, mongoose } = require('../helpers/databasetest');
mongoose.set('useFindAndModify', false);

chai.use(chaihttp)
before(function (done) { clearDB(done) });
after(function (done) { clearDB(done) });

describe('product',function(){
    it('should add a SINGLE product on /product/add POST',function (done) {
        chai.request(app)
            .post(`/product/add`)
            .send({
                product:'kolor ijo',
                description:'celana superhero marvel hulk',
                tag:'pakaian'
            })
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

    it('should list ALL products on /product/list GET',function(done){
        chai.request(app)
            .get(`/product/list`)
            .send()
            .end((err,res)=>{
                should.not.exist(err)
                // err.should.be.null
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

    it('should list Spesific product on /product/list/12345 GET',function (done) {
        chai.request(app)
            .get(`/product/search`,{
                body:'celana'
            })
            .send()
            .end((err,res)=>{
                should.not.exist(err)
                // err.should.be.null
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
                should.not.exist(err)
                // err.should.be.null
                res.should.has.status(201)
                res.should.be.a('Object')
                res.body.hasOwnProperty(`product`)
                res.body.hasOwnProperty(`description`)
                res.body.hasOwnProperty(`tag`)
                done()
            })
    });
});