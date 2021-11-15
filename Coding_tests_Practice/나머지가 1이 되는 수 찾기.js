// 첫번째 풀이 (코드 실행 2개 했을 때 성공, 제출 후 채점하기 정확성 테스트에서
// 2, 3, 9, 11 테스트에서 실패. 알고보니 이렇게 길 필요가 없었다..)
// function remainder(n) {
//   let answer;
//   let arr = [];

//   for (let x = 2; x < n; x++) {
//     if (n % x === 1) {
//       // 나머지가 1이 되면, arr에 push
//       arr.push(x);
//       // 배열 오름차순 정렬
//       arr.sort();
//     }
//   }
//   // 오름차순 정렬에서 0번째 요소 answer에 담기
//   answer = arr[0];

//   return answer;
// }

// console.log(remainder(10));
// console.log(remainder(12));

// 최종 풀이

function remainder(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 1) {
      return i;
    }
  }
}

console.log(remainder(10));
console.log(remainder(12));
