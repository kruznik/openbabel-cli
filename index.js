var Promise = require('bluebird')
var exec = Promise.promisify(require('child_process').exec)

function convert (input, options) {
  options = options || {}
  options.inputFormat = options.inputFormat || 'smiles'
  options.outputFormat = options.outputFormat || 'can'
  options.options = options.options || ''

  var command = 'obabel -i' + options.inputFormat  + ' -:"'+ input.join('" -:"') + '" -o' + options.outputFormat + ' ' + options.options

  return exec(command).then(function (output) {
    return output.trim()
  })
}

module.exports = {
  convert: convert
}
