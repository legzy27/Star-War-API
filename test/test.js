/* eslint-disable @typescript-eslint/no-var-requires */
const supertest = require("supertest");
const assert = require('assert');
const app = require("../index");

//test check if app.get() is successful or not
describe("GET /", function() {
  it("it should has status code 200", function(done) {
    supertest(app)
      .get("/")
      .expect(200)
      .end(function(err, res){
        if (err) done(err);
        done();
      });
  });
});

  


describe("GET /", function() {
    it("it should get status code 200 OK", function(done) {
      supertest(app)
        .get("/characters")
        .expect(200)
        .end(function(err, res){
          if (err) done(err);
          done();
        });
    });
  });
  


  describe("GET /", function() {
    it("it should get statuscode 200 OK response from the request", function(done) {
      supertest(app)
        .get("/categories")
        .expect(200)
        .end(function(err, res){
          if (err) done(err);
          done();
        });
    });
  });
  

