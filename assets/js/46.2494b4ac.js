(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{582:function(t,s,a){"use strict";a.r(s);var n=a(31),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_17-h-index-정렬-프로그래머스-java-array-list"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_17-h-index-정렬-프로그래머스-java-array-list"}},[t._v("#")]),t._v(" 17. H-Index_정렬 | 프로그래머스 (JAVA) | Array | List")]),t._v(" "),a("h2",{attrs:{id:"🔒-문제"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🔒-문제"}},[t._v("#")]),t._v(" 🔒 "),a("a",{attrs:{href:"https://programmers.co.kr/learn/courses/30/lessons/42747",target:"_blank",rel:"noopener noreferrer"}},[t._v("문제"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("H-Index는 과학자의 생산성과 영향력을 나타내는 지표입니다. 어느 과학자의 H-Index를 나타내는 값인 h를 구하려고 합니다. "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/H-index",target:"_blank",rel:"noopener noreferrer"}},[t._v("위키백과"),a("OutboundLink")],1),t._v("에 따르면, H-Index는 다음과 같이 구합니다.")]),t._v(" "),a("p",[t._v("어떤 과학자가 발표한 논문 n편 중, "),a("strong",[t._v("h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되었다면 h의 최댓값이 이 과학자의 H-Index입니다.")])]),t._v(" "),a("p",[t._v("어떤 과학자가 발표한 논문의 인용 횟수를 담은 배열 citations가 매개변수로 주어질 때, 이 과학자의 H-Index를 return 하도록 solution 함수를 작성해주세요.")]),t._v(" "),a("h3",{attrs:{id:"📢-제한사항"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#📢-제한사항"}},[t._v("#")]),t._v(" "),a("strong",[t._v("📢 제한사항")])]),t._v(" "),a("ul",[a("li",[t._v("과학자가 발표한 논문의 수는 1편 이상 1,000편 이하입니다.")]),t._v(" "),a("li",[t._v("논문별 인용 횟수는 0회 이상 10,000회 이하입니다.")])]),t._v(" "),a("h3",{attrs:{id:"📢-입출력-예"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#📢-입출력-예"}},[t._v("#")]),t._v(" "),a("strong",[t._v("📢 입출력 예")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("citations")]),t._v(" "),a("th",[t._v("return")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("[3, 0, 6, 1, 5]")]),t._v(" "),a("td",[t._v("3")])])])]),t._v(" "),a("h3",{attrs:{id:"📢-입출력-예-설명"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#📢-입출력-예-설명"}},[t._v("#")]),t._v(" "),a("strong",[t._v("📢 입출력 예 설명")])]),t._v(" "),a("p",[t._v("이 과학자가 발표한 논문의 수는 5편이고, 그중 3편의 논문은 3회 이상 인용되었습니다. 그리고 나머지 2편의 논문은 3회 이하 인용되었기 때문에 이 과학자의 H-Index는 3입니다.")]),t._v(" "),a("h2",{attrs:{id:"🔑-풀이"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🔑-풀이"}},[t._v("#")]),t._v(" 🔑 풀이")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Arrays")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("solution")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" citations"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Arrays")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("citations"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" answer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("citations"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("citations"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" citations"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 논문인용횟수 >= 비교횟수이상 인용한 논문갯수")]),t._v("\n                answer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" citations"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 이후의 값은 무조건 answer보다 작으므로 break")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        \n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" answer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);