# gut

Recursively guts files from directory. Zero dependencies.

Requires Node.js >= 18.

## Install

    npm install gut

## Usage

### Callback

    var gut = require('gut')

    gut("path/to/project", [".git", ".gitignore", ".DS_Store"], function(err){

    })

### Promise

    var gut = require('gut')

    await gut("path/to/project", [".git", ".gitignore", ".DS_Store"])
