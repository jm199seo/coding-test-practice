function solution(array, commands) {
    var answer = [];
    const commandLength = commands.length;
    for (let i = 0; i < commandLength; i++) {
        const [start, end, idx] = commands[i];
        if (start === end) {
            answer.push(array[start - 1]);
            continue;
        }
        const sortedArr = array.slice(start - 1, end).sort((a, b) => a - b);
        answer.push(sortedArr[idx - 1]);
    }
    return answer;
}

console.assert(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]) === [5, 6, 3]);