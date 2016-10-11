/* global describe, it */

'use strict'

var assert = require('assert')
var openbabel = require('..')

describe('openbabel-cli', function () {
  it('should be an object', function () {
    assert.equal(typeof openbabel, 'object')
  })

  describe('.convert', function () {
    it('should be a function', function () {
      assert.equal(typeof openbabel.convert, 'function')
    })

    it('should convert smiles to canonical smiles', function () {
      return openbabel.convert('IC(C=C1OC)=C(OC)C=C1CC(C)N').then(function (output) {
        assert.equal(output, 'COc1cc(I)c(cc1CC(N)C)OC')
      })
    })

    it('should use the inputFormat option', function () {
      return openbabel.convert('InChI=1S/C11H16INO2/c1-7(13)4-8-5-11(15-3)9(12)6-10(8)14-2/h5-7H,4,13H2,1-3H3', {inputFormat: 'inchi'}).then(function (output) {
        assert.equal(output, 'COc1cc(I)c(cc1CC(N)C)OC')
      })
    })

    it('should use the outputFormat option', function () {
      return openbabel.convert('COc1cc(I)c(cc1CC(N)C)OC', {outputFormat: 'inchi'}).then(function (output) {
        assert.equal(output, 'InChI=1S/C11H16INO2/c1-7(13)4-8-5-11(15-3)9(12)6-10(8)14-2/h5-7H,4,13H2,1-3H3')
      })
    })

    it('should use additional options', function () {
      return openbabel.convert('c1c(CC(N)C)c(OC)cc(c1OC)I', {outputFormat: 'smiles', options: '-xc'}).then(function (output) {
        assert.equal(output, 'COc1cc(I)c(cc1CC(N)C)OC')
      })
    })
  })
})
