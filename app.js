console.log("imports");

var mapreduce = require('mapred')(1);

console.log("start");
/**
 * map(key, value) -> list(key, value)
 * @param key
 * @param value
 */
var map = function (key, value) {
    var list = [], aux = {};
    var vowels = 'aeiou'.split('');
    vowels.forEach(function (v) {
        console.log(v)
        // w is word
        // seek for vowels
        var tmp = value.split(v);
        if(tmp == 0){
            aux[v] = (aux[v] || 0)
        }else{
            aux[v] = (aux[v] || 0) + tmp.length - 1;
        }
    });
    for (var k in aux) {
        list.push([k, aux[k]]);
    }
    return list;
};
/**
 * reduce(key, list(value)) --> list(value)
 * @param key
 * @param values
 */
var reduce = function (key, values) {
    var sum = 0;
    values.forEach(function (e) {
        sum += e;
    });
    return sum;
};
var information = [
    ['frase primera', 'primer trozo de informacion para procesado primer trozo'],
    ['segunda frase', 'segundo trozo de informacion trozo de'],
    ['último cacho', 'otro trozo para ser procesado otro otro otro trozo']
];

// result is deprecated (map reduce function doc)
var count = mapreduce(information, map, reduce, result);

function result(d){
    console.log(d);
}

