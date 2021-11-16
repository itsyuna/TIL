function combinationAdd(numbers) {
  const sum = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      sum.push(numbers[i] + numbers[j]);
    }
  }
  // 중복제거를 위해서 Set() 사용
  const set = [...new Set(sum)];
  // 오름차순 정렬 
  return set.sort((a, b) => a - b);
}

console.log(combinationAdd([2, 1, 3, 4, 1]));
