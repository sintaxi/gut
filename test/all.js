var path    = require('path')
var should  = require('should')
var fse     = require('fs-extra')
var gut     = require('../')


describe("all", function(){
  
  var sourcePath = path.join(__dirname, "fixtures", "project")
  var outputPath = path.join(__dirname, "fixtures", "output")
    
  before(function(done){
    fse.copy(sourcePath, outputPath, function(){
      done()
    })
  })
  
  it("should exist", function(done){
    should.exist(gut)
    done()
  })
  
  it("should remove files", function(done){
    gut(outputPath, [], function(err){
      done()
    })
  })
  
  after(function(done){
    fse.remove(outputPath, function(){
      done()
    })
  })
  
})