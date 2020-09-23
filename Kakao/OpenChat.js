/**
 * 카카오톡 2019 코딩테스트 기출 문제
 * https://programmers.co.kr/learn/courses/30/lessons/42888
 * 20.08.31 - Jaemin Seo
 * */

/* 
  Using split instead of regex increased performance?
  Remember to store output of 'split' array length to variables 
*/
function solution(record) {
  const uidList = record.filter(r => r.startsWith('Enter') || r.startsWith('Change')).reduce((acc, current) => {
    // const res = /(Enter|Change) (uid\d+) (\w+)/g.exec(current);
    // const [_, type, uid, name] = res;
    const [type, uid, name] = current.split(' ');
    acc[uid] = name;
    return acc;
  }, {});
  // console.log(uidList);

  const answer = [];

  const recordLen = record.length;
  for (let i = 0; i < recordLen; i++) {
    const r = record[i];
    const splitRes = r.split(' ');
    if (r.startsWith('Leave')) {
      // const res = /Leave (uid\d+)/g.exec(r);
      // const [_, uid] = res;
      const [_, uid] = splitRes;
      answer.push(`${uidList[uid]}님이 나갔습니다.`);
      continue;
    }
    // const res = /(Enter|Change) (uid\d+) (\w+)/g.exec(r);
    // // console.log(res);
    // const [_, type, uid] = res;
    const [type, uid] = splitRes;

    if (type === 'Enter') {
      answer.push(`${uidList[uid]}님이 들어왔습니다.`);
    }
    else if (type === 'Change') {
      continue;
    }
    else {
      answer.push(`${uidList[uid]}님이 나갔습니다.`);
    }
  }
  return answer;
}

// const sol = solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]);
const sol = solution(["Enter uid12341512 Someone", "Enter uid4567 Prodo", "Leave uid12341512", "Enter uid12341512 NewName", "Change uid4567 Ryyyyy", "Enter uid124312 Hi", "Change uid124312 Hi2", "Leave uid124312", "Change uid4567 Prodo2"]);
// console.log(sol);
