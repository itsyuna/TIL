# * LeetCode λ¬Έμ 

### π‘ κ΅¬ν μκ°

<br>

μ€νμ λμμΈνκ²μ μ½λλ‘ κ΅¬ννλ λ¬Έμ μλλ°,

μ€νλ κ²°κ΅­ λ°°μ΄μ²λΌ μΌμ νκ² λλν μμ΄λ κ΅¬μ‘°μ΄κΈ°λλ¬Έμ,

μ²μμ λΉ λ°°μ΄λ‘ μ€ν κ΅¬μ‘°λ₯Ό μ‘μμ€λ€.

κ·Έλ¦¬κ³  λ°°μ΄μμ μ¬μ©νλ λ©μλλ€λ‘, μ€νμ κ΅¬μ‘°λ₯Ό λμμΈν΄μ€¬λ€.

<hr>

π» μ½λ

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

