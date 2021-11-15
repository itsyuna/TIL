function solution(str1, str2) {
  let count = 0;
  // 1. str1, str2 모두 대문자로 변경
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();

  // 2. 특수문자 제외한, 영어 대문자만 추출
  // 3. 추출한 문자열을 배열에 담고, 2글자씩 잘라서 추출
  // 4. 2글자씩 자른 문자열을 배열에 저장

  const arr1 = [];
  const arr2 = [];

  for (let i = 0; i < str1.length - 1; i++) {
    const temp = str1.slice(i, i + 2);
    if (temp.search(/[^A-Z]/g) >= 0) {
      continue;
    }
    arr1.push(temp);
  }

  for (let i = 0; i < str2.length - 1; i++) {
    const temp = str2.slice(i, i + 2);
    if (temp.search(/[^A-Z]/g) >= 0) {
      continue;
    }
    arr2.push(temp);
  }

  // 5. 교집합 구하기 -> 비교해서 같으면 count++
  for (let i = 0; i < arr1.length; i++) {
    const temp = arr1[i];

    for (let j = 0; j < arr2.length; j++) {
      if (temp === arr2[j]) {
        count++;
        arr2[j] = '.';
        break;
      }
    }
  }
  // 6. 합집합 구하기 (arr1 + arr2 - 교집합 수)
  const union = arr1.length + arr2.length - count;

  return union === count ? 65536 : Math.floor((count / union) * 65536);
}
