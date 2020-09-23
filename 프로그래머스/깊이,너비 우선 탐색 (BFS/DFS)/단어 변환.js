function solution(begin, target, words) {
  let visited = {};
  let queue = [];
  queue.push({
    val: begin,
    distance: 0,
  });
  visited[begin] = true;

  while (queue.length > 0) {
    const next = queue.shift();
    const siblings = findConnected(next.val, words);

    for (let i = 0; i < siblings.length; i++) {
      const curr = siblings[i];
      if (visited[curr] !== true) {
        queue.push({
          val: curr,
          distance: next.distance + 1,
        });
        visited[curr] = true;

        if (curr === target) {
          console.log(next.distance + 1);
          return next.distance + 1;
        }
      }
      else {
        continue;
      }
    }
  }
  return 0;
}

function findConnected(w, words) {
  let connectedArr = [];
  for (let i = 0; i < words.length; i++) {
    if (w === words[i]) { continue; }
    if (isDiffOneChar(w, words[i])) { connectedArr.push(words[i]); }
  }
  return connectedArr;
}

function isDiffOneChar(word1, word2) {
  let diffCnt = 0;
  const wordLen = word1.length;
  for (let i = 0; i < wordLen; i++) {
    if (word1[i] !== word2[i]) { diffCnt++; }
    if (diffCnt > 1) { return false; }
  }
  return true;
}

// console.assert(solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']) === 4);
// console.assert(solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log']) === 0);
// console.assert(solution('boy', 'for', ['toy', 'roy', 'for', 'tor', 'hor']) === 3);
// console.assert(solution('hot', 'lot', ['hot', 'dot', 'dog', 'lot', 'log']) === 1);
// console.assert(solution('hit', 'dot', ['dot', 'fds', 'fot', 'hot', 'aaa', 'hip']) === 2);
// console.assert(solution('hit', 'hot', ['dot', 'fds', 'fot', 'hot', 'aaa', 'hip']) === 1);