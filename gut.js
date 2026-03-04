var fs   = require('fs/promises')
var path = require('path')

module.exports = function(projectPath, patterns, callback) {
  var dir = path.resolve(projectPath)

  var promise = fs.readdir(dir, { recursive: true }).then(function(entries) {
    var removals = entries
      .filter(function(entry) {
        return patterns.indexOf(path.basename(entry)) !== -1
      })
      .map(function(entry) {
        return fs.rm(path.join(dir, entry), { recursive: true, force: true })
      })
    return Promise.all(removals)
  })

  if (typeof callback === 'function') {
    promise.then(function() { callback() }).catch(callback)
  }

  return promise
}
