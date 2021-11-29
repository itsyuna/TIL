### 💡 구현 생각

처음에 문제만 읽었을때는 뭔가 복잡해보였는데, 규칙을 알고나니까 그렇게 어렵지 않은 문제였다.

우선 숫자를 0부터 시작해서 차례대로 말해야하는데, 범위가 정확히 0부터 몇까지라고 정해져있는건 아니기때문에,

for문이 아니라 while문으로 돌려준다.

근데 while문으로 돌려줄때도, 튜브가 말할 숫자 갯수가 미리 정해져있으니까 

(멤버수 * 미리 구할 숫자의 갯수)만큼까지만 while문을 돌아주면 된다.

그리고나서, count를 0으로 셋팅해놓고 count가 미리 구할 숫자의 갯수만큼 같아지면 그대로 for문을 종료해주고,

그게 아니라면, i % m을 한게 p - 1과 같을때 answer에 그 값을 넣어주고 count를 올려준다.

<hr>

🔻 코드

```

// n : 진수
// t : 미리 구할 숫자의 갯수
// m : 게임에 참가하는 인원
// p : 튜브의 순서

function solution(n, t, m, p) {
  let start = 0;
  let strList = '';
  while (strList.length < t * m) {
    strList += start.toString(n);
    start++;
  }
  let count = 0;
  let answer = '';
  for (let i = 0; i < strList.length; i++) {
    if (count === t) {
      break;
    } else if (i % m === p - 1) {
      answer += strList[i].toUpperCase();
      count++;
    }
  }
  return answer;
}

console.log(solution(2, 4, 2, 1)); // "0111"
console.log(solution(16, 16, 2, 1)); // "02468ACE11111111"
console.log(solution(16, 16, 2, 2)); // "13579BDF01234567"
```
