
# ๐ก ๊ตฌํ์๊ฐ

answer ๋ฐฐ์ด์ ๋ง๋ค์ด์ฃผ๊ณ , ์ธ๋ฑ์ค๊ฐ 0๋ถํฐ ์์ํ๋๊น a-1,

๋ b-1๊น์ง ์๋ผ์ฃผ๊ธฐ ์ํด์ b๋ฅผ ํด์ค๋ค.

๊ทธ๋ฆฌ๊ณ  ์๋ผ์ค arr์ ์ค๋ฆ์ฐจ์ ์ ๋ ฌํด์ ๋น ๋ฐฐ์ด๋ก ๋ง๋ค์ด์คฌ๋ asnwer์ ๋ด์์ค๋ค.

<hr>

๐ป ์ฝ๋

```
function solution(array, commands) {
    
  const answer = [];

  for (let i = 0; i < commands.length; i++) {
    const [a, b, c] = commands[i];
    const arr = array.slice(a - 1, b);
    arr.sort((a, b) => a - b);
    answer.push(arr[c - 1]);
  }
  
  return answer;
}
```


