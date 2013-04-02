var path  = require('path')
var fse   = require('fs-extra')
var find  = require('findit').find

module.exports = function(projectPath, patterns, callback){

  var dir     = path.resolve(projectPath)
  var finder  = find(dir)

  finder.on('path', function (p) {
    if(patterns.indexOf(path.basename(p)) !== -1){
      fse.remove(p)
    }
  })
  
  finder.once('end', function (file) {
    callback()
  })
  
  finder.once('error', function (err) {
    callback(err)
  })
  
}