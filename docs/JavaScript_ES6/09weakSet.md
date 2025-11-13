---
title: 09. WeakSet | Set과의 차이점
date: 2021-10-27
meta:
  - name: description
    content: javascript ES6 WeakSet
  - name: keywords
    content: javascript ES6 
---

# 09. WeakSet | Set과의 차이점

🤗 **처음보는 WeakSet의 특징을 알아보자 !**

## ✨ 참조를 가지고 있는 객체만 저장 가능

```jsx
let arr = [1,2,3,4];
let ws = new WeakSet();

ws.add(arr);
console.log(ws);

ws.add(function(){});
console.log(ws);

ws.add(111); // 참조 X
console.log(ws);
```

### 🔎 console

---

```basic
[object WeakSet] { ... }
[object WeakSet] { ... }
"error"
"TypeError: Invalid value used in weak set
    at WeakSet.add (<anonymous>)
    at beyaxiyore.js:11:4
    at https://static.jsbin.com/js/prod/runner-4.1.8.min.js:1:13924
    at https://static.jsbin.com/js/prod/runner-4.1.8.min.js:1:10866"
```

## ✨ 굳이 WeakSet을 쓰는 이유는?

**굳이 `WeakSet`을 사용하는 이유는 참조하는 객체가 null이 되거나 필요가 없어지면, WeakSet 또한 가비지 컬렉션 대상이 되기 때문이다 !**

```jsx
let arr = [1,2,3,4];
let arr2 = [5,6,7,8];
let obj = {arr,arr2};
let ws = new WeakSet();

ws.add(arr);
ws.add(arr2);
ws.add(obj);

console.log(ws);
```

### 🔎 console

---

```basic
 WeakSet {(4) [5,6,7,8], (4) [1,2,3,4], Object {arr: Array(4), arr2: Array(4)}}
```

<br/>

**이제 참조 객체에 null을 입력해주고, has로 확인해주면 정말 유효한지 확인할 수 있다.**

```jsx
let arr = [1,2,3,4];
let arr2 = [5,6,7,8];
let obj = {arr,arr2};
let ws = new WeakSet();

ws.add(arr);
ws.add(arr2);
ws.add(obj);

arr = null;

console.log(ws);
console.log(ws.has(arr), ws.has(arr2));
```

### 🔎 console

---

```basic
WeakSet {(4) [5,6,7,8], (4) [1,2,3,4], Object {arr: Array(4), arr2: Array(4)}}
false true // 실제로는 유효하지 않은 걸 확인할 수 있다.
```

<br/>

::: tip
1. `weakset` 은 열거가 불가능 하다.
2. `Memory Leak` 으로부터 자유롭다.
:::

### Reference

---

[https://www.inflearn.com/course/es6-강좌-자바스크립트/dashboard](https://www.inflearn.com/course/es6-%EA%B0%95%EC%A2%8C-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8/dashboard)

[https://jsbin.com/](https://jsbin.com/)