
# 💡 구현생각

answer 배열을 만들어주고, 인덱스가 0부터 시작하니까 a-1,

또 b-1까지 잘라주기 위해서 b를 해준다.

그리고 잘라준 arr을 오름차순 정렬해서 빈 배열로 만들어줬던 asnwer에 담아준다.

<hr>

🔻 코드

```
function solution(array, commands) {
    
  const answer = [];

  for (let i = 0; i < commands.length; i++) {
    const [a, b, c] = commands[i];
    const arr = array.slice(a - 1, b);
    arr.sort((a, b) => a - b);
    answer.push(arr[c - 1]);
  }
  
  return answer;
}
```


