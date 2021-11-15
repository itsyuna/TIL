function checkNumber(arr) {
  const answer = [];

  for (let i = 0; i <= arr.length; i++) {
    // 연속되는수가 같지 않으면 answer 배열에 저장
    if (arr[i] !== i + 1) {
      answer.push(arr[i]);
    }
  }

  return answer;
}

console.log(checkNumber([1, 1, 3, 3, 0, 1, 1]));
