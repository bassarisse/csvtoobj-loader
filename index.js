
var loaderUtils = require('loader-utils')
var Baby = require('babyparse')

module.exports = function(content) {

    var query = loaderUtils.parseQuery(this.query)

    var col = query.col
    var key = query.key || 'key'

    var settings = {
        header: true,
        skipEmptyLines: true,
        delimiter: query.delimiter,
        newline: query.newline,
        comments: query.comment,
        dynamicTyping: query.typing
    }

    var result = Baby.parse(content, settings).data

    var finalObj = result.reduce(function(obj, line) {

        obj[line[key]] = col ? line[col] : line

        return obj
    }, {})

    return 'module.exports = ' + JSON.stringify(finalObj)
}