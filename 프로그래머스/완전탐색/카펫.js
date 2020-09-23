function solution(brown, yellow) {
  var answer = [];

  // Find all multiplications that result in yellow
  // Ex) 24 = 24*1, 12*2, 8*3, 6*4, ...
  const findMultiplications = (n) => {
    let res = [];
    for (let i = 1; i <= Math.sqrt(n); i++) {
      for (let j = n; j >= Math.sqrt(n); j--) {
        if (i * j === n) {
          res.push([j, i]);
        }
      }
    }
    return res;
  };
  const yellowMultiplications = findMultiplications(yellow);

  const calculateBrownTileNum = ([x, y]) => {
    const totalArea = (x + 2) * (y + 2);
    const yellowArea = x * y;
    return totalArea - yellowArea;
  };

  for (let i = 0; i < yellowMultiplications.length; i++) {
    const pair = yellowMultiplications[i];
    const res = calculateBrownTileNum(pair);
    if (res === brown) {
      answer = [pair[0] + 2, pair[1] + 2];
      break;
    }
  }

  // x >= y
  // answer = answer.sort((a, b) => b - a);
  // console.log(answer);
  return answer;
}

console.assert(solution(10, 2) === [4, 3]);
console.assert(solution(8, 1) === [3, 3]);
console.assert(solution(24, 24) === [8, 6]);

/**
 * function solution(brown, red) {
    var answer = [];
    for (var i = 3; i <= (brown+red)/i; i++) {
        var x = Math.floor((brown+red)/i);
        if( (x-2)*(i-2)=== red) {
            break;
        }
    }

    return [x,i];
  }
 */