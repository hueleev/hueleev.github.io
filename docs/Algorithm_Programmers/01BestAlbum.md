---
title:  01. 베스트앨범_해시 | 프로그래머스 (JAVA) | HASH
meta:
  - name: description
    content: Java algorithm Programmers Hash 알고리즘 프로그래머스 베스트앨범 해시 
  - name: keywords
    content: Java algorithm Programmers Hash 알고리즘 프로그래머스 베스트앨범 해시 
---

# 01. 베스트앨범_해시 | 프로그래머스 (JAVA)

## 🔒 [문제](https://programmers.co.kr/learn/courses/30/lessons/42579)
스트리밍 사이트에서 <u>**장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범을 출시하려 합니다.**</u> 노래는 고유 번호로 구분하며, 노래를 수록하는 기준은 다음과 같습니다.

**📌 속한 노래가 많이 재생된 장르를 먼저 수록합니다.**

**📌 장르 내에서 많이 재생된 노래를 먼저 수록합니다.**

**📌 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.**

노래의 장르를 나타내는 문자열 배열 `genres`와 노래별 재생 횟수를 나타내는 정수 배열 `plays`가 주어질 때, 베스트 앨범에 들어갈 노래의 고유 번호를 순서대로 `return` 하도록 `solution` 함수를 완성하세요.

### 📢 **제한사항**

* **`genres[i]`는 고유번호가 i인 노래의 장르입니다.**

* **`plays[i]`는 고유번호가 i인 노래가 재생된 횟수입니다.**

* **`genres`와 `plays`의 길이는 같으며, 이는 1 이상 10,000 이하입니다.**

* **장르 종류는 100개 미만입니다.**

* **장르에 속한 곡이 하나라면, 하나의 곡만 선택합니다.**

* **모든 장르는 재생된 횟수가 다릅니다.**

### 📢 **입출력 예**

| genres | plays | return |
| --- | --- | --- |
| ["classic", "pop", "classic", "classic", "pop"]	| [500, 600, 150, 800, 2500] | [4, 1, 3, 0] |

### 📢 **입출력 예 설명**

classic 장르는 1,450회 재생되었으며, classic 노래는 다음과 같습니다.

* **고유 번호 3: 800회 재생**

* **고유 번호 0: 500회 재생**

* **고유 번호 2: 150회 재생**

pop 장르는 3,100회 재생되었으며, pop 노래는 다음과 같습니다.

* **고유 번호 4: 2,500회 재생**

* **고유 번호 1: 600회 재생**

따라서 pop 장르의 [4, 1]번 노래를 먼저, classic 장르의 [3, 0]번 노래를 그다음에 수록합니다.

※ 공지 - 2019년 2월 28일 테스트케이스가 추가되었습니다.

## 🔐

문제 자체는 이해하기 어렵지 않았는데, 정~말 오랜만에 알고리즘을 풀다보니까 머리가 돌아가지 않아서

다른 분들의 코드를 조금 참고했다.

다음부턴 `Collections` 도 좀 활용하고.. `stream` `lambda` .. 다양하게 쓰고 싶다 나도..

모던자바인액션 책을 읽어봐야겠다..


## 🔑 풀이

```java
public class Hash_004_BestAlbum  {

    private static String[] genres = {"classic", "pop", "classic", "classic", "pop"};
    private static int[] plays = {500, 600, 150, 800, 2500};

    public static int[] solution() {
        // 장르별 total 재생수 map
        Map<String, Integer> playMap = new HashMap<>();
        for (int i = 0; i < genres.length; i++) {
            String genre = genres[i];
            if (!playMap.containsKey(genre)) {
                int play = plays[i];
                playMap.put(genre, play);
            } else {
                int play = playMap.get(genre) + plays[i];
                playMap.put(genre, play);
            }
        }

        // 재생수 순 정렬
        List<String> keySetList = new ArrayList<>(playMap.keySet());
        keySetList.sort((o1, o2) -> (playMap.get(o2).compareTo(playMap.get(o1))));

        List<Integer> answerList = new ArrayList<>();
        for (String genre : keySetList) {
            Map<Integer, Integer> genreMap = new HashMap<>(); // 장르 index, 재생수 맵
            for (int i=0; i<genres.length; i++) {
                if (genre.equals(genres[i])) {
                    genreMap.put(i, plays[i]);
                }
            }

            // 장르 내 재생수 순 정렬
            List<Integer> idxList = new ArrayList<>(genreMap.keySet());
            idxList.sort((o1, o2) -> (genreMap.get(o2).compareTo(genreMap.get(o1))));
            int limitChk = 0;
            for (Integer idx : idxList) {
                if (limitChk == 2) {
                    break;
                }
                answerList.add(idx);
                limitChk++;
            }
        }

        // list to array
        int[] answer = new int[answerList.size()];
        for (int i=0; i<answerList.size(); i++) {
            answer[i] = answerList.get(i);
        }

        return answer;
    }

}
```