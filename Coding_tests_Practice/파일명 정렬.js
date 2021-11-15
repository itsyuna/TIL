function solution(files) {
  // 숫자가 아닌것을 1개 이상 찾고, 숫자인 것을 1개 이상 5개 이하로 찾기
  // -> 정규 표현식 사용하기
  const pattern = /(\D+)(\d{1,5})/;
  return files.sort((a, b) => {
    // Head, Number를 각각 변수로 지정
    let [aHead, aNumber] = a.match(pattern).slice(1, 3);
    let [bHead, bNumber] = b.match(pattern).slice(1, 3);
    //  -> Head 소문자로 바꿔주기
    aHead = aHead.toLowerCase();
    bHead = bHead.toLowerCase();
    if (aHead === bHead && aNumber === bNumber) return 0;
    if (aHead === bHead) return aNumber - bNumber;
    if (aHead > bHead) return 1;
    return -1;
  });
}
