// https://programmers.co.kr/learn/courses/30/lessons/12905
function solution(board) {
  var answer = 0;
  // // Get index of first 1 from each row
  // let rIndex = board.map(b => b.indexOf(1));
  // console.log(rIndex);

  // // Count number of running '1's from each index
  // const countOnes = rIndex.map((start, idx) => {
  //   let count = 0;
  //   for (let i = start; i < boardLen; i++) {
  //     if (board[idx][i] === 1) { count++; }
  //   }
  //   return count;
  // });
  // console.log(countOnes);

  // let visited = board.map(b => Array(b.length).fill(0));
  // console.log(visited);

  let areas = [];
  // Check square area for each index that starts with 1.
  for (let y = 0; y < board.length; y++) {
    // let visited = Array(board[y].length).fill(0);
    let visited = new Set();
    for (let x = 0; x < board[y].length; x++) {
      if (visited.has(x)) {
        continue;
      }
      if (board[y][x] !== 1) {
        continue;
      }
      else {
        let res = checkAdjacent(board, x, y);
        areas.push(res);
        for (let i = 0; i < Math.sqrt(res); i++) {
          visited.add(x + i);
        }
      }
    }
  }
  if (areas.length === 0) return 0;
  answer = Math.max(...areas);
  return answer;
}

function checkAdjacent(board, x, y) {
  if (board[y][x] === 0) {
    return 0;
  }
  let area = 1;
  let flag = true;

  while (flag) {
    const yMax = (y + area >= board.length) ? board.length - 1 : y + area;
    const xMax = (x + area >= board[y].length) ? board[y].length - 1 : x + area;
    if (yMax - y !== xMax - x) {
      flag = false;
      break;
    }
    if (x === xMax && y === yMax) {
      return 1;
    }

    for (let i = y; i <= yMax; i++) {
      for (let j = x; j <= xMax; j++) {
        if (board[i][j] === 0) {
          flag = false;
          break;
        }
      }
      if (!flag) { break; }
    }
    if (flag) {
      area++;
    }
    if (yMax === board.length - 1) { flag = false; }
  }
  return area * area;
}

// console.log(solution([[0, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [0, 0, 1, 0]])); // 9
// console.log(solution([[0, 0, 1, 1], [1, 1, 1, 1]])); // 4
// console.log(solution([[0, 1, 0], [0, 1, 0], [1, 1, 1]])); // 1
// console.log(solution([[1, 1, 1], [1, 0, 1]])); // 1
// console.log(solution([[0, 0, 0, 1]])); // 1
// console.log(solution([[1, 1, 1], [1, 0, 1], [1, 1, 1]])); // 1
// console.log(solution([[1, 1, 1, 1], [1, 1, 1, 1], [0, 0, 1, 1]])); // 4
// console.log(solution([[0, 0], [0, 1]])); // 4
// console.log(solution([[1, 1], [1, 0]])); // 1
console.log(solution([[1, 2, 3, 4], [0, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [0, 0, 1, 0]])); // 1