function solution(numbers, target) {
  var answer = 0;
  let cnt = 0;
  const dfs = (depth, sum) => {
    let currentVal = numbers[depth];

    // exit condition
    if (depth === numbers.length) {
      // console.log(sum);
      if (sum === target) {
        cnt++;
      }
      return;
    }

    dfs(depth + 1, sum + currentVal);
    dfs(depth + 1, sum - currentVal);
  };

  dfs(0, 0);

  answer = cnt;
  return answer;
}

console.assert(solution([1, 2, 3], 6) === 1);
// console.assert(solution([1, 1, 1, 1, 1], 3) === 5);