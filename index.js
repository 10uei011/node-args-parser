'use strict'

function Parse (argv) {
  //remove the 'node' and script which is called
  argv = argv.slice(2)

  var argName = ''
  var result = {}

  argv.forEach(function (item, index) {
    //check if arg has preceding -
    if (item[0] === '-') {
      //remove the dash
      argName = item.substring(1)
      if (!result[argName]) {
        result[argName] = true
      } else {
        result[argName] = ''
      }
    } else {
      result[argName] = item
    }
  })
  return result
}

module.exports = Parse
