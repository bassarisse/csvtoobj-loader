csvtoobj-loader
==========================

[![NPM version](https://badge.fury.io/js/csvtoobj-loader.png)](http://badge.fury.io/js/csvtoobj-loader)

Webpack loader to convert CSV to simple objects. There are already many CSV loaders available, but I needed one that returned a hashed object.


## Installation

```
$ npm install --save-dev csvtoobj-loader
```


## Basic usage

File (lang.csv):
```
key,en,pt
greeding,Hi,Oi
confirm,Confirm,Confirmar
```

|key |en |pt |
|----|---|---|
|greeding|Hi|Oi|
|confirm|Confirm|Confirmar|

Code:
```javascript
require('csvtoobj!./lang.csv')
```

Output:
```javascript
{
    greeding: {
        key: 'greeding',
        en: 'Hi',
        pt: 'Oi'
    },
    confirm: {
        key: 'confirm',
        en: 'Confirm',
        pt: 'Confirmar'
    }
}
```

Code:
```javascript
require('csvtoobj?col=pt!./lang.csv')
```

Output:
```javascript
{
    greeding: 'Oi',
    confirm: 'Confirmar'
}
```


## Options (inline)

Process:
- `key` (default: 'key') - name of the column to use as hash key
- `col` - the name of the desired column to be returned, leave blank to receive the entire object

Parse:
- `delimiter` - the delimiting character, leave blank to auto-detect
- `newline` - the newline sequence, leave blank to auto-detect
- `comment` - character that marks a line as a comment
- `typing` - if true, numeric and boolean data will be converted to their type instead of remaining strings

For more information about the parse options, check out the [documentation of the parser](http://papaparse.com/docs#config)


## License
csvtoobj-loader is free and unencumbered public domain software. For more information, see the accompanying LICENSE file.