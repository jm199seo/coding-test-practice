function solution(p) {
  var answer = '';
  // num paren (not pair)
  // const bNum = p.length / 2;
  // console.log(bNum);

  if (isCorrectParen(p)) { return p; }

  const toCorrectParen = (w) => {
    if (w.length === 0) { return ''; }

    // separate to u, v
    const [u, v] = toBalancedParen(w);
    console.log(u, v);

    if (isCorrectParen(u)) {
      const res = toCorrectParen(v);
      return u + res;
    }
    else {
      const res = toCorrectParen(v);
      let str = `(${res})`;

      // console.log(u);
      const removeFirstLastU = u.slice(1, u.length - 1);
      // console.log(removeFirstLastU);
      str += invertParen(removeFirstLastU);
      return str;
    }
  };

  answer = toCorrectParen(p);

  return answer;
}

function invertParen(b) {
  b = b.split('');
  return b.map(v => {
    if (v === '(') { return ')'; }
    else { return '('; }
  }).join('');
}

function toBalancedParen(b) {
  let nRight = 0;
  let nLeft = 0;
  // 0: u, 1: v
  for (let i = 0; i < b.length; i++) {
    const current = b[i];
    if (current === ')') {
      nRight++;
    }
    else {
      nLeft++;
    }
    if (nRight === nLeft) {
      return [b.slice(0, i + 1), b.slice(i + 1)];
    }
  }
  return [b, ''];
}

function isCorrectParen(b) {
  b = b.split('');
  if (b.length === 0) { return false; }
  let stack = [];
  for (let i = 0; i < b.length; i++) {
    const c = b[i];
    if (c === '(') {
      stack.push(')');
    }
    else {
      if (stack.pop() !== ')') {
        return false;
      }
    }
  }
  return !(stack.length > 0);
}

// console.log(solution("(()())()")); // "(()())()"
// console.log(solution(")(")); // "()"
// console.log(solution("()))((()")); // "()(())()"