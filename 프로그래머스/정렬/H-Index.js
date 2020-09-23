function solution(citations) {
  var answer = 0;
  citations.sort((a, b) => b - a);
  let hIndex = citations[0];

  const checkHIndex = (citationCount, sumCount) => {
    return (citationCount <= sumCount);
  };

  let cnt = 0;
  for (let i = 10000; i >= 0; i--) {
    if (citations[cnt] === i) {
      hIndex = citations[cnt];
      cnt++;
    }
    if (hIndex === citations[cnt]) {
      cnt++;
      continue;
    }
    if (checkHIndex(i, cnt)) {
      if (hIndex === 0) {
        hIndex = 0;
        break;
      }
      hIndex = i;
      break;
    }
  }
  answer = hIndex;
  return answer;
}


// console.assert(solution([3, 0, 6, 1, 5]) === 3);
// console.assert(solution([5, 12, 0, 3, 3, 0, 6, 9, 9, 125, 11, 7]) === 5);
console.assert(solution([0, 0, 0, 0]) === 4);
// console.assert(solution([1234, 98, 97, 2, 7, 12, 31, 4]) === 1);
// console.assert(solution([0, 0, 0, 0, 0, 2, 1]) === 1);
// const arr99 = Array(99).fill(99, 0, 98);
// console.log(arr99)
// console.assert(solution([...arr99, 98]) === 99);

/**
 * function solution(citations) {
     citations = citations.sort(sorting);
     var i = 0;
     while(i + 1 <= citations[i]){
         i++;
     }
     return i;


     function sorting(a, b){
         return b - a;
     }
  }
 */