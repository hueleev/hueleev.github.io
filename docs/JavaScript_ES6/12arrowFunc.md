---
title: 12. Arrow function 활용 (bind 주의)
date: 2021-10-27
meta:
  - name: description
    content: javascript ES6 Arrow function bind
  - name: keywords
    content: javascript ES6 
---

# 12. Arrow function 활용 (bind 주의)

😬 **이제는 모두가 Arrow function을 사용해야한다 생각.. + bind 주의!**

## ✨ Arrow - setTimeout 활용

```jsx
setTimeout(function() {
  console.log('setTimeout')
}, 500)

setTimeout(() => {
  console.log('setTimeout => arrow')
}, 1000)
```

### 🔎 console

---

```basic
"setTimeout"
"setTimeout => arrow"
```

## ✨ Arrow - map 활용

`map` 활용 시, 중괄호가 없으면 바로 `return` 가능! 혹은 소괄호를 입력하면 바로 return!

```jsx
let newArr = [1,2,3,4,5].map(function(value) {
  return value * 2;
});
console.log("arrow newArr", newArr);

let newArrArrow = [1,2,3,4,5].map((v) => v * 2); // 중괄호가 없는 경우, 바로 return 하게 돼있다!
console.log("arrow newArrArrow", newArrArrow);
```

### 🔎 console

---

```basic
"arrow newArr"
[2, 4, 6, 8, 10]
"arrow newArrArrow"
[2, 4, 6, 8, 10]
```

## ✨ 콜백함수와 Arrow

`this` 가 가리키는 `context`는 실행 타이밍에 가리키는 것이다. (event 큐에 있다가..)

**콜백 타이밍에 arrow는 context를 유지하고 있다.**

```jsx
const myObj = {
  runTimeout() {
    setTimeout(function() {
      console.log(this === window);
      this.printData();
    }, 200) // 함수 뒤에 .bind(this) 사용 시, 바로 bind가능
  },
  printData() {
    console.log("hi codesquad")
  }
}

const myObjArr = {
  runTimeout() {
    setTimeout(()=> {
      console.log(this === window);
      this.printData();
    }, 200)
  },
  printData() {
    console.log("hi codesquad")
  }
}

myObj.runTimeout();
myObjArr.runTimeout();
```

### 🔎 console

---

```basic
true // 콜백 후, window가 binding 된다.
"error"
"TypeError: this.printData is not a function
    at beyaxiyore.js:5:12"
false // 콜백 후에도, 기존 binding이 유지된다.
"hi codesquad"
```

### Reference

---

[https://www.inflearn.com/course/es6-강좌-자바스크립트/dashboard](https://www.inflearn.com/course/es6-%EA%B0%95%EC%A2%8C-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8/dashboard)

[https://jsbin.com/](https://jsbin.com/)