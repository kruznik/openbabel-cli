# openbabel-cli

API for [Open Babel](http://openbabel.org/) using the command line interface.

## Methods

### Promise .convert(input, options)

Converts from representation to another one.
The following options are supported:

- `inputFormat`: The input format. See the Babel documentation (default: `smiles`)
- `outputFormat`: The output format. See the Babel documentation (default: `can`)
- `options`: Additional command line options

Example:

    openbabel.convert('IC(C=C1OC)=C(OC)C=C1CC(C)N').then(function (canonical) {
      console.log('canonical smiles representation: ' + canoncial)
    })
