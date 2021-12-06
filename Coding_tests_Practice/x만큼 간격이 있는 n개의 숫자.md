
# 💡 구현 생각

<br>

x만큼 간격이 있는 n개의 숫자를 반환해줘야 하니까

빈 배열을 먼저 만들어주고,

for문을 도는데 x를 시작값으로 놓고, 배열의 길이가 n보다 작을때까지 반복한다.

그리고 증감문은 첫번째 값을 n만큼 반복해서 계속 더해줘야 하니까 

i += arr[0]이라고 둔다.

그리고나서 arr 값을 반환해준다.

<hr>

🔻 코드

```
function solution(x, n) {
  const arr = [];
  for (let i = x; arr.length < n; i += arr[0]) {
    arr.push(i);
  }
  return arr;
}

console.log(solution(2, 5)); // [2,4,6,8,10]
console.log(solution(4, 3)); // [4,8,12]
console.log(solution(-4, 2)); // [-4,-8]

```
