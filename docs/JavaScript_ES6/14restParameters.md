---
title: 14. Rest parameters (가변 파라미터), 파라미터 갯수로부터 자유롭고 싶을때
date: 2021-10-27
meta:
  - name: description
    content: javascript ES6 Rest parameters 
  - name: keywords
    content: javascript ES6 
---

# 14. Rest parameters (가변 파라미터), 파라미터 갯수로부터 자유롭고 싶을때

😌 **파라미터 갯수를 정하지 않고, 배열로 받고 싶을때.. 이걸 사용하면 되겠다!**

## ✨ Rest parameters

`every` 는 전체 타입을 확인할 때 사용하면 유용하다!

```jsx
function checkNum(...argArray) {  
  console.log(toString.call(argArray));
  console.log(argArray);
  
  const result = argArray.every((v) => typeof v === "number"); // 모든 값 type 확인
  console.log(result);
}

const result = checkNum(10,2,3,4,5,"55");
```

### 🔎 console

---

```basic
"[object Array]"
[10, 2, 3, 4, 5, "55"]
false
```

### Reference

---

[https://www.inflearn.com/course/es6-강좌-자바스크립트/dashboard](https://www.inflearn.com/course/es6-%EA%B0%95%EC%A2%8C-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8/dashboard)

[https://jsbin.com/](https://jsbin.com/)