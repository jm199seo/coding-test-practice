function solution(n, computers) {
  var answer = 0;

  let visitedFinal = new Array(n).fill(0);

  function search(graph, row) {
    console.log(visitedFinal);
    visitedFinal[row] = 1;
    console.log(visitedFinal);
    // visit other nodes
    for (let i = 0; i < n; i++) {
      if (i === row) { continue; }
      console.log(row, i, graph[row][i]);
      // 탐색되지 않은 row 중에서 1인값
      if (visitedFinal[i] === 0 && graph[row][i] === 1) {
        search(graph, i);
      }
    }
  }

  computers.forEach((_, idx) => {
    // 이미 탐색되었다는것은 어딘가에 연결되어있다는 의미
    if (visitedFinal[idx] === 0) {
      answer++;
      search(computers, idx);
    }
  });

  console.log(answer);

  return answer;
}

// console.assert(solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]) === 2);
// console.assert(solution(3, [[1, 1, 0], [1, 1, 1], [0, 1, 1]]) === 1);
console.assert(solution(4, [[1, 1, 1, 0], [1, 1, 0, 0], [1, 0, 1, 0], [0, 0, 0, 1]]) === 2);
// console.assert(solution(4, [[1, 1, 0, 0], [1, 1, 0, 0], [0, 0, 1, 1], [0, 0, 1, 0]]) === 2);