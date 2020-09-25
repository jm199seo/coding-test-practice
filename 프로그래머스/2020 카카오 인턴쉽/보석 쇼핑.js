// https://programmers.co.kr/learn/courses/30/lessons/67258
function solution(gems) {
  var answer = [];
  const uniqueGems = [...new Set(gems)];

  let start = 1;
  let end = 0;
  // let goodInterval = [0, gems.length - 1];
  let goodIntervals = [];
  let minInterval = gems.length;

  const gemMap = new Map();

  gems = [0, ...gems];
  // while (start <= end) {
  for (let i = 1; i < gems.length; i++) {
    end = i;
    if (end === gems.length) {
      break;
    }
    if (gemMap.has(gems[i])) { gemMap.set(gems[i], gemMap.get(gems[i]) + 1); }
    else { gemMap.set(gems[i], 1); }

    if (gemMap.size === uniqueGems.length) {
      while (gemMap.get(gems[start]) > 1) {
        gemMap.set(gems[start], gemMap.get(gems[start]) - 1);
        start += 1;
      }
      goodIntervals.push([start, end]);
    }
  }

  // const current = [... new Set(gems.slice(start, end + 1))];
  // if (current.length < uniqueGems.length) {
  //   end++;
  // }
  // else {
  //   if (end - start + 1 === uniqueGems.length) {
  //     return [start + 1, end + 1];
  //   }
  //   if (end - start < minInterval) {
  //     minInterval = end - start;
  //     // goodInterval = [start, end];
  //     goodIntervals.push([start, end]);
  //   }
  //   // else if (end - start === minInterval) {
  //   //   if (start < goodInterval[0]) {
  //   //     goodInterval = [start, end];
  //   //   }
  //   // }
  //   start++;
  // }
  goodIntervals.sort((a, b) => {
    const sum1 = a[1] - a[0];
    const sum2 = b[1] - b[0];
    if (sum1 === sum2) {
      return a[0] - b[0];
    }
    return sum1 - sum2;
  });
  // answer = goodInterval.map(k => k + 1);
  answer = goodIntervals[0];
  return answer;
}


// console.log(solution(['AA', 'A', 'B', 'B', 'C', 'AA'])); // [1, 5]
// console.log(solution(["PAS", "PAS", "EM", "RUB", "EM", "PAS"])); // [2, 4]
console.log(solution(["DIA", "EM", "EM", "RUB", "DIA"])); // [3, 5]
// console.log(solution(["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"])); // [3, 7]
// console.log(solution(["AA", "AB", "AC", "AA", "AC"])); // [1, 3]
// const sampleArr = Array(90000).fill('XYZ');
// console.log(solution([...sampleArr, 'AA']));

// console.log(solution(["XYZ", "XYZ", "XYZ"])); // [1, 1]
// console.log(solution(["ZZZ", "YYY", "NNNN", "YYY", "BBB"])); // [1, 5]
