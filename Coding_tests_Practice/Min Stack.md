# * LeetCode 문제

# 💡 구현 생각

스택을 디자인한것을 코드로 구현하는 문제였는데,

스택도 결국 배열처럼 일정하게 나란히 쌓이는 구조이기때문에,

처음에 빈 배열로 스택 구조를 잡아준다.

그리고 배열에서 사용했던 메소드들로, 스택의 구조를 디자인해줬다.

<hr>

🔻 코드

```
let MinStack = function () {
  this.stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return Math.min(...this.stack);
};

Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]
```

