function solution(info, query) {
  // 문제 풀이 실패
  const answer = [];
  const infoMap = {};

  function comb(array, score, start) {
    const key = array.join('');
    const value = infoMap[key];

    if (value) {
      infoMap[key].push(score);
    } else {
      infoMap[key] = [score];
    }

    for (let i = start; i < array.length; i++) {
      const temp = [...array];
      temp[i] = '-';
      comb(temp, score, i + 1);
    }
  }
}
