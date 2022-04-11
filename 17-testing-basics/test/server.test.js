const server = require("../src/server");
const chai = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);
const expect = chai.expect;


describe.only("Todo App", () => {

    it("Should fetch all todos from HTTP REST Endpoint - /api/todos", () => {
        chai.request(server)
            .get("/api/todos")
            .end((err, res) => {
                expect(res.body).to.be.an("Array")
                expect(res.body).to.have.lengthOf(0)
            })
    })
})
