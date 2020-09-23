function solution(genres, plays) {
  var answer = [];

  const sumObj = genres.reduce((acc, g, idx) => {
    if (acc[g] === undefined) {
      acc[g] = {
        totalPlays: plays[idx],
        idxList: [{
          val: plays[idx],
          idx,
        }],
      };
    }
    else {
      acc[g].totalPlays += plays[idx];
      acc[g].idxList.push({
        val: plays[idx],
        idx,
      });
    }
    return acc;
  }, {});

  // 장르 재생 횟수순으로 정렬
  const sortedGenreList = Object.keys(sumObj).sort((a, b) => sumObj[b].totalPlays - sumObj[a].totalPlays);

  sortedGenreList.forEach(g => {
    const sortedIdxList = sumObj[g].idxList.sort((a, b) => {
      let res = b.val - a.val;
      if (res === 0) {
        res = a.idx - b.idx;
      }
      return res;
    }).map(v => parseInt(v.idx));
    answer.push(...sortedIdxList.slice(0, 2));
  });
  return answer;
}

console.assert(solution(['classic', 'pop', 'classic', 'classic', 'pop'], [500, 600, 150, 800, 2500]) == [4, 1, 3, 0]);
