const server = require("../src/server");
const chai = require("chai");
const chaiHttp = require("chai-http");
const TodoModel = require("../src/model/todo.model");

chai.use(chaiHttp);
const expect = chai.expect;


describe.only("Todo App", () => {

    beforeEach(async () => {
        await TodoModel.deleteMany({})
    })

    it("Should fetch all todos from HTTP REST Endpoint - /api/todos", (done) => {
        chai.request(server)
            .get("/api/todos")
            .end((err, res) => {
                expect(res.body).to.be.an("Array")
                expect(res.body).to.have.lengthOf(0)
                done()
            })
    })

    it("Should create new todo for HTTP REST Endpoint POST - /api/todos", (done) => {
        chai.request(server)
        .post("/api/todos")
        .send({label : "shopping", status : false})
        .end((err, res) => {
            if(err) console.log(err)
            expect(res.body).not.to.be.undefined;
            expect(res.body._id).not.to.be.undefined;
            done()
        })
    })

    it("Should fetch the item based upon the ID - /api/todos/:id", (done) => {
        const todo = new TodoModel({label : "insurance", status : true})
        todo.save().then(response => {
            chai.request(server)
                .get("/api/todos/"+response._id)
                .end((err, res) => {
                    if(err) console.log(err);
                    expect(res.body).not.to.be.undefined;
                    expect(res.body._id.toString()).to.equal(response._id.toString())
                    expect(res.body.label).to.be.equal("insurance")
                    done()
                })
        }).catch(console.log)
    })

    // patch
    it("Should update todo based on ID - /api/todos/:id", (done) => {
        const todo = new TodoModel({label : "grocery", status : false})
        todo.save()
            .then(response=>{
                chai.request(server)
                    .patch("/api/todos/"+response._id)
                    .send({status : true})
                    .end((err, res )=>{
                        if(err) console.log(err)
                        expect(res.body).not.to.be.undefined;
                        expect(res.body._id.toString()).not.to.be.undefined;
                        expect(res.body.status).to.be.true;
                        done()
                    })
            })
            .catch(console.log)
    })
 // delete
    it("Should delete item based on ID - /api/todos/:id", (done) => {
        const todo = new TodoModel({label : "insurance", status : true})
        todo.save().then(response => {
            chai.request(server)
                .delete("/api/todos/"+response._id)
                .end((err, res) => {
                    if(err) console.log(err);
                    expect(res.body).not.to.be.undefined;
                    expect(res.body._id.toString()).to.equal(response._id.toString())
                    expect(res.body.label).to.be.equal("insurance")
                    done()
                })
        }).catch(console.log)
    })
})
