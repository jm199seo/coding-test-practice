function solution(numbers) {
  var answer = 0;
  let sol = [];

  const isPrime = (n) => {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) { return false; }
    }
    return n > 1;
  }
  // find permutation (recursion?)
  const perm = (nums) => {
    let permArr = [];

    if (nums.length < 2) {
      return nums;
    }
    for (let i = 0; i < nums.length; i++) {
      let n1 = nums[i];
      // nums[i]를 제외한 모든 수
      let n2 = nums.slice(0, i) + nums.slice(i + 1, nums.length);

      let pArr = perm(n2);
      for (let j = 0; j < pArr.length; j++) {
        let p = pArr[j];
        permArr.push(n1 + '' + p);
        permArr.push(n1);
        permArr.push(p);
      }
    }
    return permArr;
  };

  sol = perm(numbers);
  sol = [...new Set([...sol])];
  answer = sol.filter(v => !v.startsWith('0')).filter(v => isPrime(v));
  return answer.length;
}

// console.assert(solution('17') === 3);
// console.assert(solution('123') === 5);
console.assert(solution('333') === 5);
// console.assert(solution('011') === 2);
// console.assert(solution('0070') === 2);