---
title: 07. Destructuring / 구조 분해 할당, ES6 핵심!
date: 2021-10-27
meta:
  - name: description
    content: javascript ES6 Destructuring
  - name: keywords
    content: javascript ES6 
---

#  07. Destructuring / 구조 분해 할당, ES6 핵심!

🥰 **ES6 겉핥기로 쓸 때, 가장 많이 썼던 구조 분해 할당 -** 

## ✨ Destructuring Array

```jsx
let data = ["one", "two", "three"];
let [jisu,,jung] = data;
console.log(jisu, jung);
```

### 🔎 console

---

```basic
"one"
"three"
```

## ✨ Destructuring Object

object 분해를 제일 많이 썼던거 같다. *새로운 이름으로도 할당할 수 있구나 !* 

```jsx
let obj = {
  name: "crong",
  address: "Korea",
  age: 10
}

let {name, age} = obj; // 같은 이름 할당
console.log(name, age);
           
let {name: myName, age: myAge} = obj; // 새로운 이름 할당
console.log(myName, myAge);
```

### 🔎 console

---

```basic
"crong"
10
"crong"
10
```

## ✨ Destructuring JSON 파싱

위에 Array와 Object 분해 방식을 합치면, 이렇게 JSON을 파싱할 수 있다 !

```jsx
let news = [
  {
    "title": "nate",
    "imgurl": "https://thumbnews.nateimg.co.kr/view610///news.nateimg.co.kr/orgImg/mt/2021/07/05/2021070507502630178_1.jpg",
    "newslist": [
      "iphone",
      "samsung"
    ]
  },
  {
    "title": "naver",
    "imgurl": "https://imgnews.pstatic.net/image/029/2021/07/05/0002684907_001_20210705090603005.jpg?type=w647",
    "newslist": [
      "skt",
      "coex"
    ]
  }
]

let [, {title, imgurl}] = news;
console.log(title, imgurl);
```

### 🔎 console

---

```basic
"naver"
"https://imgnews.pstatic.net/image/029/2021/07/05/0002684907_001_20210705090603005.jpg?type=w647"
```

## ✨ Destructuring 활용, Event 객체 전달

click 이벤트 발생 시, `event`를 받아 `target`을 뜯어보았다면, 이제는 event 객체를 구조분해하여 전달할 수 있다.

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
  <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
</body>
</html>
```

```jsx
document.querySelector("div").addEventListener("click",function({type, target}) {
  console.log(type);
  console.log(target.tagName);
  console.log(target.innerText);
})
```

### 🔎 console

---

로렘입숨을 클릭해주면 .. 아래와 같이 `event` 를 분해한 객체를 읽어올 수 있다.

```basic
"click"
"DIV"
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
```

### Reference

---

[https://www.inflearn.com/course/es6-강좌-자바스크립트/dashboard](https://www.inflearn.com/course/es6-%EA%B0%95%EC%A2%8C-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8/dashboard)

[https://jsbin.com/](https://jsbin.com/)