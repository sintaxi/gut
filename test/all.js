var path   = require('path')
var assert = require('assert/strict')
var fs     = require('fs/promises')
var fss    = require('fs')
var gut    = require('../')

describe("all", function(){

  var sourcePath = path.join(__dirname, "fixtures", "project")
  var outputPath = path.join(__dirname, "fixtures", "output")

  before(function(done){
    fs.cp(sourcePath, outputPath, { recursive: true }).then(function(){ done() }).catch(done)
  })

  it("should exist", function(done){
    assert.ok(gut)
    done()
  })

  it("should remove files", function(done){
    gut(outputPath, ["goodbye.txt", "removeme"], function(err){
      if (err) return done(err)
      assert.equal(fss.existsSync(path.join(outputPath, "goodbye.txt")), false)
      assert.equal(fss.existsSync(path.join(outputPath, "foo", "bar", "goodbye.txt")), false)
      assert.equal(fss.existsSync(path.join(outputPath, "foo", "removeme")), false)
      assert.equal(fss.existsSync(path.join(outputPath, "foo", "removeme", "done.txt")), false)
      assert.equal(fss.existsSync(path.join(outputPath, "foo", "bar", "baz.txt")), true)
      done()
    })
  })

  after(function(done){
    fs.rm(outputPath, { recursive: true, force: true }).then(function(){ done() }).catch(done)
  })

})
