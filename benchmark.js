// Just a simple code to benchmark different algorithms
const NS_PER_SEC = 1e9;

exports.do = function(method, arguments, times = 11) {
  const results = [];

  let answer = null;
  for (let i = 0; i < times; i += 1) {
    const start = process.hrtime();
    answer = method.apply(null, arguments);
    const diff = process.hrtime(start);
    results.push(
      diff[0] * NS_PER_SEC + diff[1]
    );
  }

  results.sort();

  return {
    answer,
    min: results[0],
    max: results[times - 1],
    average: results.reduce((r, n) => r + n, 0) / times,
    median: results[Math.floor(times / 2)],
    total: results.reduce((r, n) => r + n, 0),
  }
};

function times(first, second) {
  if (first < second) {
    return `Faster ${second/first} times, by ${second - first}ns`
  } else {
    return `Slower ${first/second} times, by ${first - second}ns`
  }
}

exports.compare = function(first, second) {
  return {
    answer: first.answer === second.answer ? 'equal' : `not equal (${first.answer} | ${second.answer})`,
    min: times(first.min, second.min),
    max: times(first.max, second.max),
    average: times(first.average, second.average),
    median: times(first.median, second.median),
    total: times(first.total, second.total),
  }
}

