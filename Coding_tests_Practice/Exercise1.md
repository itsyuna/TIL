### 💡 구현 방식

<br>

원래는 다른 방식으로 풀려고 하다가, 문제를 다시 보니 더 좋은 방법이 생각났다.

1. 음수는 나간 상태이기때문에, 아예 체크가 되지 않는다는점을 이용하여,

   음수를 제거해주고 양수만 배열에 다시 담아준다. -> filter() 함수 사용

2. 해당 infected 값에 해당되는 인덱스값을 찾고, 그 위치를 기점으로 [왼쪽, infected 값, 오른쪽] 이 범위만 추출해준다. 

3. 그리고 항상 infected 값이 가운데에 위치하고, 왼쪽/오른쪽 위치만 뽑아서 배열에 저장해주면 되니까,
   위치는 배열의 [0]과 [2]를 뽑아준다.
   
4. 만약 해당하는 값의 인덱스가 0이라면, 왼쪽/오른쪽의 값은 존재하지 않기 때문에 빈 배열을 반환해준다.

<hr>

🔻 코드 

```
function infectedCheck(history, infected) {
  const positiveNum = history.filter((elem) => elem > 0);

  const findIndex = positiveNum.indexOf(infected);
  
  const arr = [];
  for (let i = findIndex - 1; i < positiveNum.length - 1 - findIndex; i++) {
    // 1. 해당 인덱스를 기준으로 왼쪽/오른쪽을 구해야 하니까,
    // 시작 인덱스를 해당 인덱스 -1 => 왼쪽. 여기서부터 시작
    // 2. 그리고 이제 오른쪽을 구해야 되는데, 오른쪽값 인덱스까지만 구해야 하니까,
    // 원래 있던 배열에서 -1을 해주고,
    // 3. 거기서 위에서 구했던 findIndex(해당 인덱스) 길이전까지만 순회.
    // 4. 값이 없으면 undefined가 나오기 때문에, 이럴때는 빈 객체 [] return
    // 5. 이제 추출한 인덱스 배열에서 가운데를 제외한 [0], [2] 부분만 추출해주면 끝!

    arr.push(positiveNum[0], positiveNum[2]);
    if (positiveNum[i] === undefined) return [];
    break;
  }

  // 오름차순 정렬
  return arr.sort((a, b) => a - b); 

}

console.log(infectedCheck([3, 2, -3, 1, -1, -2, 4, -4, 1, -1], 2)); // [1, 3]
console.log(infectedCheck([1, -1], 1)); // []
console.log(infectedCheck([3, 1, -1, -3, 4, 1, -1, -4], 1)); // 3, 4
```
