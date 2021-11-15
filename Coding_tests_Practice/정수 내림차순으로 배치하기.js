function descendingOrder(n) {
  const answer = n
    .toString()
    .split('')
    .sort((a, b) => b - a)
    .join('');
  return 1 * answer;
  // arr.sort((a, b) => b - a);
}

// descendingOrder(118372);
console.log(descendingOrder(118372));
