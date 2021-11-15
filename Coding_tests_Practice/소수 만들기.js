function solution(nums) {
  let answer = 0;

  // 1. 3자리 숫자 만들기
  const leng = nums.length;
  for (let i = 0; i < leng; i++) {
    for (let j = i + 1; j < leng; j++) {
      for (let k = j + 1; k < leng; k++) {
        const number = nums[i] + nums[j] + nums[k];
        if (checkDecimal(number)) answer++;
      }
    }
  }

  // 2. 소수 체크하기 -> 2부터 number까지 하나씩 비교해주기
  function checkDecimal(number) {
    if (number < 2) return true;
    for (let i = 2; i < number; i++) {
      if (number % i === 0) return false;
    }
    return true;
  }

  return answer;
}
