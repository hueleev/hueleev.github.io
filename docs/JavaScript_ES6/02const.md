---
title: 02. const 특성과 immutable array
date: 2021-10-27
meta:
  - name: description
    content: javascript ES6 const immutable array
  - name: keywords
    content: javascript ES6 
---

# 02. const 특성과 immutable array

# Const

--- 

😒 **`const`는 재선언이 안되는 특성을 가지고 있다.**

## ✨ 재선언 불가

```jsx
function home() {
  const homename= 'my house';
  console.log(homename);
  homename= 'your house';
}

home();
```

### 🔎 console

---

```basic
"my house"
"error"
"TypeError: Assignment to constant variable. // 재선언 에러 확인 가능
    at home (vabisawopi.js:4:13)
    at vabisawopi.js:7:1
    at https://static.jsbin.com/js/prod/runner-4.1.8.min.js:1:13924
    at https://static.jsbin.com/js/prod/runner-4.1.8.min.js:1:10866"
```

<br/>

😅 **`const`는 절대 불변인 것은 아니다. 값을 재할당하는 것만 불가능!**

## ✨ 절대불변은 아니다

```jsx
function home() {
  const list = ["apple", "orange", "watermelon"];
  list.push("banana");
  console.log(list);
}

home();
```

### 🔎 console

---

```basic
["apple", "orange", "watermelon", "banana"]
```

# Immutable array

---

🤔 **그렇다면 immutable array는 어떻게 만들까?**

## ✨ immutable array

```jsx
const list = ["apple", "orange", "watermelon"];
list2 = [].concat(list, "banana");

console.log(list, list2);
console.log(list === list2);
```

### 🔎 console

---

```basic
["apple", "orange", "watermelon"]
["apple", "orange", "watermelon", "banana"]
false
```

::: tip

- const를 기본으로 사용한다.
- 변경이 될 수 있는 변수는 let을 사용한다.
- var는 사용하지 않는다.
- const를 사용하더라도 배열과 오브젝트의 값을 변경하는 것은 가능하다.

:::

### Reference

---

[https://www.inflearn.com/course/es6-강좌-자바스크립트/dashboard](https://www.inflearn.com/course/es6-%EA%B0%95%EC%A2%8C-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8/dashboard)

[https://jsbin.com/](https://jsbin.com/)