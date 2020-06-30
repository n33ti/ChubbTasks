var chunk = require('lodash.chunk');
var pull = require('lodash.pull');
var difference = require('lodash.difference');
var take = require('lodash.take');
var filter = require('lodash.filter');
var find = require('lodash.find');
var sum = require('lodash.sum');
var reduce = require('lodash.reduce');
var map = require('lodash.map');
var keys = require('lodash.keys');
var gte = require('lodash.gte');
var values = require('lodash.values');
var camelCase = require('lodash.camelcase');
var union = require('lodash.union');
var endsWith = require('lodash.endswith');

console.log(chunk([1, 2, 3, 4, 5], 2));
array=['b', 'b', 'a', 'a', 'c', 'b','d','a'];
console.log(pull(array, 'a', 'c'))
console.log(difference([3,5], [4,1,3]));
console.log(take([4,7,8,1,2], 3));

var users = [
    { 'Name': 'barney', 'age': 36 },
    { 'Name': 'fred',   'age': 40 }
  ];
  console.log(filter(users, { 'age': 36 }));
  console.log(find(users, { 'age': 11}));

  console.log(sum([4, 2, 8, 6]));
  console.log(reduce([1, 2], function(sum, n) {
    return sum + n;
  }, 0));

  console.log(gte(17,10));
  console.log(keys('hi'))
  console.log(values('hi'));
  console.log(camelCase('--lorem-Hwgug--'));
  console.log(endsWith('abc', 'b', 2))
  console.log(union([2], [1, 2,3]))
