function solution(orders, course) {
  const combination = function (count, order) {
    const n = order.length;
    for (let comb = 1; comb < 1 << n; comb++) {
      let res = '';
      for (let i = 0; i < n; i++) {
        if (comb & (1 << i)) res += order[i];
      }
      // order마다 가능한 모든 메뉴 조합 구하기
      if (res.length < 2) continue;
      if (count[res] === undefined) count[res] = 0;
      count[res]++;
    }
  };
  const count = {};
  orders.map(order => order.split('').sort()).forEach(order => combination(count, order));
  // order 전체에 대해 위에서 구한 각 조합이 몇 번씩 나오는지 counting
  const cntArray = Object.entries(count).filter(v => v[1] > 1);
  return course
    .reduce((ans, c) => {
      // course 개수 별로 가장 많이 나온 조합들을 리스트로 구하기
      const tmp = cntArray.filter(v => v[0].length === c);
      const maxVal = tmp.reduce((ret, v) => Math.max(ret, v[1]), -1);
      return ans.concat(tmp.filter(v => v[1] === maxVal).map(v => v[0]));
    }, [])
    .sort();
}
