// Generate test cases for word break problem
/**
// Run this in root folder in "node"
const benchmark = require('./benchmark')
const testCase = require('./leetcode/139.word-break_testcase').default
const optimal = require('./leetcode/139.word-break').default
const old = require('./xxx').default // <------ provide your solution
benchmark.compare(
  benchmark.do(optimal, testCase()), // add arguments, if required
  benchmark.do(old, testCase())
)
*/
exports.default = function(strLength = 10000, dictItems = 10000, dictLength = 10) {
  let str = (new Array(dictLength)).fill('a');
  var dictionary = [str.join()];
  for (let i = 1; i < dictItems; i += 1) {
    let index = dictLength - 1;
    while(str[index] === 'z') {
      str[index] = 'a';
      index -= 1;
    }
    str[index] = String.fromCharCode(str[index].charCodeAt() + 1);
    dictionary.push(str.join());
  }

  return [
    'a'.repeat(strLength),
    dictionary,
  ]
}