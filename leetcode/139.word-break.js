/*
 * @lc app=leetcode id=139 lang=javascript
 *
 * [139] Word Break
 */
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

// https://leetcode.com/problems/word-break/

// L - the maximum length of the dictionary word
// D - count of words in the dictionary
// n - length of string to break
// O (L (D + n))
var wordBreak = function(s, wordDict) {
  // O (D * L)
  const tree = createTree(wordDict);
  
  const result = new Array(s.length + 1); // O(n)
  
  result[0] = true;
  
  // O( n * L )
  for (let i = 0; i < s.length; i += 1) {
      if (result[i]) {
          let node = tree;
          let cur = i;
          // L
          while (cur < s.length && node[s[cur]]) {
              node = node[s[cur]];
              if (node.result) {
                result[cur + 1] = true;
              }
              cur += 1;
          }
      }
  }
  return result[s.length] === true;
};

// O (D * L)
function createTree(dict) {
  const tree = {};
  
  dict.forEach(word => {
      let node = tree;
      for (let i = 0; i < word.length; i += 1) {
          const letter = word[i];
          node[letter] = node[letter] || {};
          node = node[letter];
      }
      node.result = true;
  });
  
  return tree;
}

exports.default = wordBreak;

