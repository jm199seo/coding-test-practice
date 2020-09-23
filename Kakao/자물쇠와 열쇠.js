function solution(key, lock) {
  var answer = true;

  // console.log(key);
  // console.log(rotate180(key));
  // const rotated = rotate90(key);
  // console.log(rotated);
  // console.log(rotateMinus90(rotated));
  // console.log(rotateMinus90(key));


  // outer bounds
  // (-keyGraph.length+1) -> (lockGraph.length + keyGraph.length-1)
  const dfs = (keyGraph, lockGraph, x, y) => {
    // 바깥 범위까지 벗어날 경우 중지
    if (x < (-keyGraph.length + 1) || y < (-keyGraph.length + 1)) {
      return;
    }
    else if (x > (lockGraph.length + keyGraph.length - 1) || y > (lockGraph.length + keyGraph.length - 1)) {
      return;
    }





    // dfs(rotate90(keyGraph), lockGraph, 0, 0);
    // dfs(rotate180(keyGraph), lockGraph, 0, 0);
    // dfs(rotate270(keyGraph), lockGraph, 0, 0);

  };

  dfs(key, lock, 0, 0);

  return answer;
}

function isMatchingKey(key, lock, x, y) {

}

function flipMatrix(m) {
  return m[0].map((col, idx) => {
    return m.map(r => r[idx]);
  });
};

function rotate90(m) {
  return flipMatrix(m.reverse());
}

function rotate180(m) {
  return rotate90(rotate90(m));
}

function rotate270(m) {
  return rotate90(rotate90(rotate90(m)));
}




console.log(solution([[0, 0, 0], [1, 0, 0], [0, 1, 1]], [[1, 1, 1], [1, 1, 0], [1, 0, 1]])); // true