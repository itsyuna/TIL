#velog 기록 옮겨오기

# 문제

대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 
'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

<br/>

🔴제한사항

문자열 s의 길이 : 50 이하의 자연수

문자열 s는 알파벳으로만 이루어져 있습니다.

<hr>

<br/>

🔻 내 풀이 방법

```
function solution(s){
    var answer = true;
   
    // 1. 대소문자 구별하지 않기 위해 모두 대문자로 변경
    var str = s.toUpperCase();
    
    // 2. p와 y count 설정.
    var countP = 0;
    var countY = 0;
    
    // 3. 반복문으로 해당 값이 존재하면 count 증감.
    for (let i = 0; i < s.length; i++) {
        if (str[i] == "P") {
            countP++;
        } else if (str[i] == "Y") {
            countY++;
        }
    };
    
    // p와 y 개수 비교해서 같으면 true 반환.
    if (countP == countY) {
        return answer;
    } else {
        return false;
    }
}
```
