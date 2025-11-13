---
title: 03. vuepress style 적용하기
date: 2021-11-11
meta:
  - name: description
    content: vuepress style을 적용해보자
  - name: keywords
    content: vuepress 개발블로그 style palette
---

# 03. vuepress style 적용하기

😇 vuepress 의 뻔한 레이아웃을 수정하기 위해..

📌 **package.json 에 아래 script를  추가해주자.**

```bash
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "docs:dev": "vuepress dev docs",
	  "docs:build": "vuepress build docs",
    "docs:eject": "vuepress eject" // 추가된 script
  },
```

```bash
npm run doc:eject
```

위 명령어 실행 시, `.vuepress/theme` 과 생성된 것을 확인할 수 있을 것이다 !

이 내용을 기반으로 `style` 을 수정해주면 된다.

## index.styl


**`.vuepress/theme/styles/index.styl` 파일을 생성해준다.**

```css
.content {
  font-size 30px
}
```

## palette.styl

**`.vuepress/theme/styles/palette.styl` 파일을 생성해준다.**

```bash
// colors
$accentColor = #bb4dff // 강조 색상 변경
$textColor = #2c3e50
$borderColor = #eaecef
$codeBgColor = #282c34
$arrowBgColor = #ccc
$badgeTipColor = #42b983
$badgeWarningColor = darken(#ffe564, 35%)
$badgeErrorColor = #DA5961

// layout
$navbarHeight = 3.6rem
$sidebarWidth = 20rem
$contentWidth = 740px
$homePageWidth = 960px

// responsive breakpoints
$MQNarrow = 959px
$MQMobile = 719px
$MQMobileNarrow = 419px
```
## plugin-back-to-top

📌 **추가 시, 어느 정도 글이 내려가면 오른 쪽 하단에 상단으로 올라가는 버튼이 생성된다.**

```bash
npm install -D @vuepress/plugin-back-to-top
```

<br/>

📌 **사용**

```jsx
// .vuepress/config.js
module.export = {
  plugins: ["@vuepress/back-to-top"]
};
```

## last-updated

📌 **추가 시, 게시글의 맨 끝에 마지막 수정일이 기재된다.**

```bash
npm install -D @vuepress/plugin-last-updated
```

<br/>

📌 **사용**

```jsx
// .vuepress/config.js
module.export = {
plugins: [
    ["@vuepress/back-to-top"],
    ["@vuepress/last-updated"],
  ]
}
```

### Reference

---

[https://vuepress.vuejs.org/theme/](https://vuepress.vuejs.org/theme/)

[https://vuepress.vuejs.org/theme/writing-a-theme.html#directory-structure](https://vuepress.vuejs.org/theme/writing-a-theme.html#directory-structure)

[https://kyounghwan01.github.io/blog/Vue/vuepress/vuepress-plugin/#plugin-back-to-top](https://kyounghwan01.github.io/blog/Vue/vuepress/vuepress-plugin/#plugin-back-to-top)
