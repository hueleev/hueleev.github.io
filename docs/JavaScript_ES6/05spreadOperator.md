---
title: 05. spread operator, 펼침연산자
date: 2021-10-27
meta:
  - name: description
    content: javascript ES6 spread opreator
  - name: keywords
    content: javascript ES6 
---

# 05. spread operator, 펼침연산자

🤨 **`React` 개발할 때, 많이 썼던 거 같은 펼침연산자에 대해 알아보자**

## ✨ ... array

```jsx
let pre = ["apple", "orange", 100];
let newData = [...pre]; // 펼쳐서 나열한다 생각하면 된다.
console.log(newData);
console.log(pre === newData); 
```

### 🔎 console

---

값은 동일하나, 참조가 동일한 것은 아니다.

```basic
["apple", "orange", 100] // 값은 동일
false // 참조 동일 X
```

## ✨ 활용 - 배열 합치기

```jsx
let pre = [100, 200, "hello", null];
let newData = [0, 1, 2, 3, ...pre, 4];
console.log(newData);
```

### 🔎 console

---

```basic
[0, 1, 2, 3, 100, 200, "hello", null, 4]
```

## ✨ 활용 - 배열 인자 전달

```jsx
function sum(a,b,c) {
  console.log("this > " + this.name);
  return a+b+c;
}

let pre = [100, 200, 300];

// apply, 첫번째 인자의 경우, 함수의 실행문맥의 this를 특정하게 지정하는 매개변수
console.log("apply", sum.apply({name: 'zoe'}, pre));
console.log("spread", sum(...pre)); // 값이 펼쳐지므로..
```

### 🔎 console

---

```basic
"this > zoe"
"apply"
600
"this > JS Bin Output "
"spread"
600
```

### Reference

---

[https://www.inflearn.com/course/es6-강좌-자바스크립트/dashboard](https://www.inflearn.com/course/es6-%EA%B0%95%EC%A2%8C-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8/dashboard)

[https://jsbin.com/](https://jsbin.com/)