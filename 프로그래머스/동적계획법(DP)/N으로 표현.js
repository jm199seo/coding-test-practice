function solution(N, number) {
  var answer = 0;

  // const operators = ['+', '-', '*', '/'];

  const dOp = [];
  const dVal = [];

  let nums = [];

  const dp = (v, total, curr) => {
    let res = 0;

    if (dVal[v] !== undefined) {
      nums.push(v);
      return dVal[v];
    }
    // N/N
    dOp[1] = 2;
    dVal[1] = 1;
    // N
    dOp[N] = 1;
    dVal[N] = N;
    // N+N
    dOp[N + N] = 2;
    dVal[N + N] = N + N;
    // N*N
    dOp[N * N] = 2;
    dVal[N * N] = N * N;
    // NN
    dOp[`${N}${N}` * 1] = 2;
    dVal[`${N}${N}` * 1] = `${N}${N}` * 1;

    if (total === 0) {
      return 1;
    }
    else if (total < 0) {
      return 0;
    }
    else if (curr < 0) {
      return 0;
    }
    else if (total < )

      // if (total === number) {
      //   return res;
      // }

      // dVal[v] = res;
      // for (let i = N; i <= number; N++) {
      //   // i의 자릿수 구하기
      //   const len = i.toString().length;
      //   if (len > 1 && len % parseInt('1'*len) === 0) {
      //     res += 2;
      //   }
      // }

      // for (let i = number; i >= N; i--) {
      //   console.log(i, number, N)
      //   console.log(dVal[i])

      //   // dVal[i] = dp(i);

      //   // d[v] = dp(i) - dp(v-i);
      //   // dVal[v + v] = dp(v) + dp(v);
      //   // dVal[v * v] = dp(v) * dp(v);
      // }

      // d[v + v] = dp[v] + dp[v];
      // d[v * v] = dp[v] * dp[v];

      return res;
  };

  answer = dp(number, 0, []);

  return answer > 8 ? -1 : answer;
}

// console.log(solution(5, 12)); // 4
// console.log(solution(2, 11)); // 3
console.log(solution(2, 4)); // 2