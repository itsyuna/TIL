function solution(s) {
  const arr = [];
  // 문자열 크기의 절반 수까지 i개 단위로 압축
  for (let i = 1; i <= Number(s.length / 2); i++) {
    // 0부터 i개의 문자가 첫 번째 압축 문자
    let str = s.substr(0, i);
    let count = 1;
    // j-i부터 i개의 문자와 j부터 i개의 문자가 같으면 cnt 1증가
    // 아니면 str에 그 문자를 숫자와 그대로 붙이기 (1이면 문자만 붙임)
    // 이때 j는 i만큼씩 증가
    for (let j = i; j <= s.length - i; j += i) {
      if (s.substr(j - i, i) === s.substr(j, i)) {
        count++;
        if (s.length - j - i < i) {
          str += count;
        }
      } else {
        if (count !== 1) {
          str += count;
          str += s.substr(j, i);
        } else {
          str += s.substr(j, i);
        }
        count = 1;
      }
    }
    // 남은 문자열은 압축할 수 없기 때문에 그대로 붙여주기
    str += s.substr(s.length - 1 - (s.length % i), s.length % i);
    arr.push(str);
  }
  // 압축을 제일 잘한 경우에 return
  let min = 100000;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < min) {
      min = arr[i].length;
    }
  }
  if (s.length === 1) min = 1;
  // console.log(arr);
  return min;
}
