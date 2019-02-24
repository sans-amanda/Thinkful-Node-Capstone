const chai = require("chai");
const chaiHttp = require("chai-http");

const {app, runServer, closeServer} = require('../server'); //import from server.js
// declare a variable for expect from chai import
const expect = chai.expect;
chai.use(chaiHttp);

//test to verify GET post
describe("Posts", function() {
  before(function() {
    return runServer();
  });
  after(function() {
    return closeServer();
  });
  it('should list posts on GET', function(done) {
    return chai.request(app)
      .get('/api/post')
      .then(function(res) {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.a("array");
        expect(res.body.length).to.be.above(0);
        res.body.forEach(function(item) {
          expect(item).to.be.a('object');
          expect(item).to.have.all.keys(
            "id", "body");
        });
      done();
      });
  });
});