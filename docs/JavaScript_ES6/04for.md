---
title: 04. for문의 종류 (javaScript)
date: 2021-10-27
meta:
  - name: description
    content: javascript ES6 for
  - name: keywords
    content: javascript ES6 
---

# 04. for문의 종류 (javaScript)

🙄 **다양한 for문에 대해서 알아보자.**

## ✨ 일반 for문

```jsx
let data = [1, 2, undefined, null, ""];
for(var i=0; i<data.length; i++) {
  console.log(data[i]);
}
```

### 🔎 console

---

```basic
1
2
undefined
null
""
```

## ✨ for Each문

```jsx
let data = [1, 2, undefined, null, ""];
data.forEach(function(value) {
  console.log(value);
})
```

### 🔎 console

---

```basic
1
2
undefined
null
""
```

## ✨ for In문

```jsx
let data = [1, 2, undefined, null, ""];
for (let idx in data) {
  console.log(data[idx]);
}
```

### 🔎 console

---

```basic
1
2
undefined
null
""
```

::: warning

for In문의 경우, 다음과 같은 상황이 발생할 수 있다.

```jsx
let data = [1, 2, undefined, null, ""];
Array.prototype.getIndex = function(){}; // 권장하는 타입은 아님.

for (let idx in data) {
  console.log(data[idx]);
}
```

### 🔎 console

---

```basic
1
2
undefined
null
""
function(){}
```

**그래서 하단에 나오는 for of 문을 권장함**

:::

## ✨ for of문

```jsx
let data = [1, 2, undefined, null, ""];
Array.prototype.getIndex = function(){}; // 권장하는 타입은 아님.

for (let value of data) {
  console.log(value);
}

```

### 🔎 console

---

```basic
1
2
undefined
null
""
```

## ✨ tip, String 분해

> 스트링을 아래와 같이 분해할 수 있다!

```jsx
let str = "hello world!";

for (let value of str) {
  console.log(value);
}
```

### 🔎 console

---

```basic
"h"
"e"
"l"
"l"
"o"
" "
"w"
"o"
"r"
"l"
"d"
"!"
```

### Reference

---

[https://www.inflearn.com/course/es6-강좌-자바스크립트/dashboard](https://www.inflearn.com/course/es6-%EA%B0%95%EC%A2%8C-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8/dashboard)

[https://jsbin.com/](https://jsbin.com/)