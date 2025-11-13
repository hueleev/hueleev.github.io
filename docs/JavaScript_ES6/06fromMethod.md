---
title: 06. from method
date: 2021-10-27
meta:
  - name: description
    content: javascript ES6 from method
  - name: keywords
    content: javascript ES6 
---

# 06. from method

## ✨ from

```jsx
function addMark() {
  console.log(typeof(arguments));
  
  let newArray = Array.from(arguments); // object의 value를 배열화해준다.
  let newData = newArray.map(function(value) {
    return value + "!";
  })
  
  console.log(newData);
}

addMark(1,2,3,4,5);
```

### 🔎 console

---

```jsx
"object" // arguments 타입
["1!", "2!", "3!", "4!", "5!"] 
```

### Reference

---

[https://www.inflearn.com/course/es6-강좌-자바스크립트/dashboard](https://www.inflearn.com/course/es6-%EA%B0%95%EC%A2%8C-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8/dashboard)

[https://jsbin.com/](https://jsbin.com/)