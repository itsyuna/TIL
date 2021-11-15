function solution(numbers) {
  const answer = [];

  // 짝수일때 -> 끝자리 0 / 홀수일때 -> 끝자리 1
  // 짝수일때는 그 바로 다음 홀수가 비교대상 가장 작은 수
  // 바로 answer 배열에 +1해서 push
  numbers.forEach(elem => {
    // 끝자리가 0일때
    if (elem.length - 1 === 0) {
      answer.push(elem + 1);
    // 끝자리가 1일때
    } else {
      const binaryNum = '0' + elem.toString(2);
      const temp = [binaryNum];
      for (let i = 0; i <= temp.length; i++) {
        if (temp[i] === 0) {
          temp[i] = 1;
          temp[i + 1] = 0;
          const tempToNum = parseInt(temp, 2);
          answer.push(tempToNum);
        }
      }
    }
  });
  return answer;
}

console.log(solution([2, 7]));
