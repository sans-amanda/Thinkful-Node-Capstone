const chai = require("chai");
const chaiHttp = require("chai-http");

const { app } = require("../server") //import from server.js
const expect = chai.expect;
chai.use(chaiHttp);
const res =

//add test to verify when hit root URL, get 200 status code and html
describe("localhost", function() {
    it("should return 200 status & HTML file", function(done) {
      chai.request("http://localhost:8080")
        .get("/")
        .then(function(res) {
            expect(res).to.have.status(200);
            expect(res).to.be.html;
        });
        done();
    });
  });