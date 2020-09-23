function solution(n, times) {
  var answer = 0;

  // 적은 시간대로 sort
  times.sort((a, b) => a - b);

  let startIdx = 1;
  // let endIdx = times.length - 1;
  let endIdx = n * times[times.length - 1];
  answer = endIdx;

  while (startIdx <= endIdx) {
    let middleIdx = Math.floor((startIdx + endIdx) / 2);
    let count = 0;
    times.forEach((t) => {
      count += Math.floor(middleIdx / t);
      if (count >= n) {
        answer = Math.min(middleIdx, answer);
        return;
      }
    });

    if (n > count) {
      startIdx = middleIdx + 1;
    }
    else {
      endIdx = middleIdx - 1;
    }
  }
  return answer;
}

console.log(solution(6, [7, 10])); // 28

// 7 14 21 28 35
// 10 20 30 