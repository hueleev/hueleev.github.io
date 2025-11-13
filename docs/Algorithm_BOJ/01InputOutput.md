---
title: 01. 백준 입출력 문제 정리 | JAVA | BOJ
date: 2022-05-27
meta:
  - name: description
    content: 백준 입출력 BOJ JAVA
  - name: keywords
    content: 백준 입출력 BOJ JAVA
---

# 01. 백준 입출력 문제 정리 | JAVA | BOJ

🤠 간단한 입출력 문제 모음으로 [알고리즘 문제풀이(PS) 시작하기](https://plzrun.tistory.com/entry/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4PS-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0) 글에서 뽑아준 문제들로만 정리해봤다.

:::tip

* `sc.next()`는 개행문제를 포함하지 않으며, 공백이 존재하는 경우 공백 이전의 문자열만 인식한다.

* `sc.nextLine()`은 개행문제를 포함하여 인식하기 때문에, 개행문자가 인식되면 종료되며 한줄을 기준으로 인식한다.

즉, `sc.nextLine()`이전에 `sc.next()`를 사용하고, Enter를 입력하였을 경우,

`sc.next()`가 개행문제를 인식하지 않고 넘어가게 되어, `sc.nextLine()`이 개행문자를 인식하게 된다.

```java
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String next = sc.next();
        String nextLine = sc.nextLine();
        System.out.println("-----------------------------------");
        System.out.println("next >>> [" + next + "]");
        System.out.println("nextLine >>> [" + nextLine + "]");
        System.out.println("-----------------close-------------");
        sc.close();
    }
}
```

```java
Hello World // 입력 후, Enter
-----------------------------------
next >>> [Hello] // next() -> 공백 전 문자열만 인식
nextLine >>>  [ World] // nextLine() -> 이전에 인식한 문자 + Enter인식
-----------------close-------------
```

더하여

* `sc.hasNext()`는 토큰이 있는지 확인하고 boolean을 리턴하며 공백은 무시한다.

* `sc.hasNextLine()`은 행이 있는지 확인하고 boolean을 리턴하며, 줄바뀜이 있으면 true를 리턴한다.
:::



## [2557. Hello World](http://boj.kr/2557)

<h3>🔒 문제</h3>

`Hello World!`를 출력하시오.

<h3>📢 입력</h3>

* 없음

<h3>📢 출력</h3>

* `Hello Wolrd!`를 출력하시오.

<h3>📢 입출력 예</h3>

| 예제 입력 1 | 예제 출력 1 |
| --- | --- |
| | Hello World! |

<h3>🔑 풀이</h3>

```java
public class Main {

	public static void main(String[] args) {
		System.out.print("Hello World!");
  }

}
```

## [1000. A+B](http://boj.kr/1000)

<h3>🔒 문제</h3>

두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

<h3>📢 입력</h3>

* 첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)

<h3>📢 출력</h3>

* 첫째 줄에 A+B를 출력한다.

<h3>📢 입출력 예</h3>

| 예제 입력 1 | 예제 출력 1 |
| --- | --- |
| 1 2 | 3 |

<h3>🔑 풀이</h3>

```java
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        System.out.println(a+b);
    }

}
```


## [2558. A+B - 2](http://boj.kr/2558)

<h3>🔒 문제</h3>

두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

<h3>📢 입력</h3>

* 첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)

<h3>📢 출력</h3>

* 첫째 줄에 A+B를 출력한다.

<h3>📢 입출력 예</h3>

| 예제 입력 1 | 예제 출력 1 |
| --- | --- |
| 1<br>2 | 3 |

<h3>🔑 풀이</h3>

```java
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        System.out.println(a+b);
    }
}
```

## [10950. A+B - 3](http://boj.kr/10950)

<h3>🔒 문제</h3>

두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

<h3>📢 입력</h3>

* 첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)

* 각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)

<h3>📢 출력</h3>

* 각 테스트 케이스마다 A+B를 출력한다.

<h3>📢 입출력 예</h3>

| 예제 입력 1 | 예제 출력 1 |
| --- | --- |
| 5<br>1 1<br>2 3<br>3 4<br>9 8<br>5 2 | 2<br>5<br>7<br>17<br>7 |

<h3>🔑 풀이</h3>

```java
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int size = sc.nextInt(); // 갯수
        Integer[] answer = new Integer[size];
        for (int i=0; i<size; i++) {
            int a = sc.nextInt();
            int b = sc.nextInt();
            answer[i] = a+b;
        }
        sc.close();

        for (Integer integer : answer) {
            System.out.println(integer);
        }
    }
}
```

## [10951. A+B - 4](http://boj.kr/10951)

<h3>🔒 문제</h3>

두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

<h3>📢 입력</h3>

* 첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)

* 각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)

<h3>📢 출력</h3>

* 각 테스트 케이스마다 A+B를 출력한다.

<h3>📢 입출력 예</h3>

| 예제 입력 1 | 예제 출력 1 |
| --- | --- |
| 1 1<br>2 3<br>3 4<br>9 8<br>5 2 | 2<br>5<br>7<br>17<br>7 |

<h3>🔑 풀이</h3>

```java
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        while(sc.hasNext()) {
            int a = sc.nextInt(); 
            int b = sc.nextInt(); 
            System.out.println(a+b);
        }

        sc.close();
    }
}
```

## [10952. A+B - 5](http://boj.kr/10952)

<h3>🔒 문제</h3>

두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

<h3>📢 입력</h3>

* 첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)

* 각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)

* 입력의 마지막에는 0 두 개가 들어온다.

<h3>📢 출력</h3>

* 각 테스트 케이스마다 A+B를 출력한다.

<h3>📢 입출력 예</h3>

| 예제 입력 1 | 예제 출력 1 |
| --- | --- |
| 1 1<br>2 3<br>3 4<br>9 8<br>5 2<br>0 0 | 2<br>5<br>7<br>17<br>7 |

<h3>🔑 풀이</h3>

```java
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        while(true) {
            int a = sc.nextInt(); 
            int b = sc.nextInt();
            if (a==0 && b==0) {
                break;
            }
            System.out.println(a+b);
        }

        sc.close();
    }
}
```
## [10953. A+B - 6](http://boj.kr/10953)

<h3>🔒 문제</h3>

두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

<h3>📢 입력</h3>

* 첫째 줄에 테스트 케이스의 개수 T가 주어진다.

* 각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. A와 B는 콤마(,)로 구분되어 있다. (0 < A, B < 10)

<h3>📢 출력</h3>

* 각 테스트 케이스마다 A+B를 출력한다.

<h3>📢 입출력 예</h3>

| 예제 입력 1 | 예제 출력 1 |
| --- | --- |
| 5<br>1,1<br>2,3<br>3,4<br>9,8<br>5,2 | 2<br>5<br>7<br>17<br>7 |

<h3>🔑 풀이</h3>

```java
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int size = sc.nextInt();

        for (int i=0; i<size; i++) {
            String[] input = sc.next().split(",");
            System.out.println(Integer.parseInt(input[0])+Integer.parseInt(input[1]));
        }
        sc.close();
    }
}
```
## [11021. A+B - 7](http://boj.kr/11021)

<h3>🔒 문제</h3>

두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

<h3>📢 입력</h3>

* 첫째 줄에 테스트 케이스의 개수 T가 주어진다.

* 각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)

<h3>📢 출력</h3>

* 각 테스트 케이스마다 "Case #x: "를 출력한 다음, A+B를 출력한다. 테스트 케이스 번호는 1부터 시작한다.

<h3>📢 입출력 예</h3>

| 예제 입력 1 | 예제 출력 1 |
| --- | --- |
| 5<br>1,1<br>2,3<br>3,4<br>9,8<br>5,2 | Case #1: 2<br>Case #2: 5<br>Case #3: 7<br>Case #4: 17<br>Case #5: 7 |

<h3>🔑 풀이</h3>

```java
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int size = sc.nextInt();

        for (int i=0; i<size; i++) {
            int a = sc.nextInt();
            int b = sc.nextInt();
            System.out.println("Case #" + (i+1) + ": " + (a+b));
        }
        sc.close();
    }
}
```

## [11022. A+B - 8](http://boj.kr/11022)

<h3>🔒 문제</h3>

두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

<h3>📢 입력</h3>

* 첫째 줄에 테스트 케이스의 개수 T가 주어진다.

* 각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)

<h3>📢 출력</h3>

* 각 테스트 케이스마다 "Case #x: A + B = C" 형식으로 출력한다. x는 테스트 케이스 번호이고 1부터 시작하며, C는 A+B이다.

<h3>📢 입출력 예</h3>

| 예제 입력 1 | 예제 출력 1 |
| --- | --- |
| 5<br>1,1<br>2,3<br>3,4<br>9,8<br>5,2 | Case #1: 1 + 1 = 2<br>Case #2: 2 + 3 = 5<br>Case #3: 3 + 4 = 7<br>Case #4: 9 + 8 = 17<br>Case #5: 5 + 2 = 7 |

<h3>🔑 풀이</h3>

```java
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int size = sc.nextInt();

        for (int i=0; i<size; i++) {
            int a = sc.nextInt();
            int b = sc.nextInt();
            System.out.println("Case #" + (i+1) + ": " + a + " + " + b + " = " +  (a+b));
        }
        sc.close();
    }
}
```


## [11718. 그대로 출력하기](http://boj.kr/11718)

<h3>🔒 문제</h3>

입력 받은 대로 출력하는 프로그램을 작성하시오.

<h3>📢 입력</h3>

* 입력이 주어진다. 입력은 최대 100줄로 이루어져 있고, 알파벳 소문자, 대문자, 공백, 숫자로만 이루어져 있다. 각 줄은 100글자를 넘지 않으며, 빈 줄은 주어지지 않는다. 또, 각 줄은 공백으로 시작하지 않고, 공백으로 끝나지 않는다.

<h3>📢 출력</h3>

* 입력받은 그대로 출력한다.

<h3>📢 입출력 예</h3>

| 예제 입력 1 | 예제 출력 1 |
| --- | --- |
| Hello<br>Baekjoon<br>Online Judge | Hello<br>Baekjoon<br>Online Judge |


<h3>🔑 풀이</h3>

```java
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        while (sc.hasNextLine()) {
            System.out.println(sc.nextLine());
        }
        sc.close();
    }
}
```

## [11719. 그대로 출력하기 - 2](http://boj.kr/11719)

<h3>🔒 문제</h3>

입력 받은 대로 출력하는 프로그램을 작성하시오.

<h3>📢 입력</h3>

* 입력이 주어진다. 입력은 최대 100줄로 이루어져 있고, 알파벳 소문자, 대문자, 공백, 숫자로만 이루어져 있다. 각 줄은 100글자를 넘지 않으며, 빈 줄이 주어질 수도 있고, 각 줄의 앞 뒤에 공백이 있을 수도 있다.

<h3>📢 출력</h3>

* 입력받은 그대로 출력한다.

<h3>📢 입출력 예</h3>

| 예제 입력 1 | 예제 출력 1 |
| --- | --- |
| &nbsp;&nbsp;&nbsp;&nbsp;Hello<br><br>Baekjoon&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;Online Judge | &nbsp;&nbsp;&nbsp;&nbsp;Hello<br><br>Baekjoon&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;Online Judge |

    
<h3>🔑 풀이</h3>

```java
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        while (sc.hasNextLine()) {
            System.out.println(sc.nextLine());
        }
        sc.close();
    }
}
```

## [11720. 숫자의 합](http://boj.kr/11720)

<h3>🔒 문제</h3>

N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오.

<h3>📢 입력</h3>

* 첫째 줄에 숫자의 개수 N (1 ≤ N ≤ 100)이 주어진다. 둘째 줄에 숫자 N개가 공백없이 주어진다.

<h3>📢 출력</h3>

* 입력으로 주어진 숫자 N개의 합을 출력한다.

<h3>📢 입출력 예</h3>

| 예제 입력 1 | 예제 출력 1 |
| --- | --- |
| 1<br>1 | 1 |

| 예제 입력 2 | 예제 출력 2 |
| --- | --- |
| 5<br>54321 | 15 |

| 예제 입력 3 | 예제 출력 3 |
| --- | --- |
| 25<br>7000000000000000000000000 | 7 |

| 예제 입력 4 | 예제 출력 4 |
| --- | --- |
| 11<br>10987654321 | 46 |

<h3>🔑 풀이</h3>

```java
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int size = sc.nextInt();
        String number = sc.next();
        String[] answerList = number.split("");

        int answer = 0;
        for (int i=0; i<size; i++) {
            answer += Integer.parseInt(answerList[i]);
        }
        System.out.println(answer);
    }
}
```

## [11721. 열 개씩 끊어 출력하기](http://boj.kr/11721)

<h3>🔒 문제</h3>

알파벳 소문자와 대문자로만 이루어진 길이가 N인 단어가 주어진다.

한 줄에 10글자씩 끊어서 출력하는 프로그램을 작성하시오.

<h3>📢 입력</h3>

* 첫째 줄에 단어가 주어진다. 단어는 알파벳 소문자와 대문자로만 이루어져 있으며, 길이는 100을 넘지 않는다. 길이가 0인 단어는 주어지지 않는다.

<h3>📢 출력</h3>

* 입력으로 주어진 단어를 열 개씩 끊어서 한 줄에 하나씩 출력한다. 단어의 길이가 10의 배수가 아닌 경우에는 마지막 줄에는 10개 미만의 글자만 출력할 수도 있다.

<h3>📢 입출력 예</h3>

| 예제 입력 1 | 예제 출력 1 |
| --- | --- |
| BaekjoonOnlineJudge | BaekjoonOn<br>lineJudge |

| 예제 입력 2 | 예제 출력 2 |
| --- | --- |
| OneTwoThreeFourFiveSixSevenEightNineTen | OneTwoThre<br>eFourFiveS<br>ixSevenEig<br>htNineTen |

<h3>🔑 풀이</h3>

```java
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String test = sc.next();
        int startIdx = 0;
        int endIdx = 10;

        sc.close();

        while (endIdx < test.length()) {
            System.out.println(test.substring(startIdx, endIdx));
            startIdx += 10;
            endIdx += 10;
        }

        System.out.println(test.substring(startIdx));
    }
}
```

## [2741. N 찍기](http://boj.kr/2741)

<h3>🔒 문제</h3>

자연수 N이 주어졌을 때, 1부터 N까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오.

<h3>📢 입력</h3>

* 첫째 줄에 100,000보다 작거나 같은 자연수 N이 주어진다.

<h3>📢 출력</h3>

* 첫째 줄부터 N번째 줄 까지 차례대로 출력한다.

<h3>📢 입출력 예</h3>

| 예제 입력 1 | 예제 출력 1 |
| --- | --- |
| 5 | 1<br>2<br>3<br>4<br>5 |

<h3>🔑 풀이</h3>

```java
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int size = sc.nextInt();
        sc.close();

        for (int i=1; i<=size; i++) {
            System.out.println(i);
        }
    }
}
```

## [2742. 기찍 N](http://boj.kr/2742)

<h3>🔒 문제</h3>

자연수 N이 주어졌을 때, N부터 1까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오.

<h3>📢 입력</h3>

* 첫째 줄에 100,000보다 작거나 같은 자연수 N이 주어진다.

<h3>📢 출력</h3>

* 첫째 줄부터 N번째 줄 까지 차례대로 출력한다.

<h3>📢 입출력 예</h3>

| 예제 입력 1 | 예제 출력 1 |
| --- | --- |
| 5 | 5<br>4<br>3<br>2<br>1 |

<h3>🔑 풀이</h3>

```java
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int size = sc.nextInt();
        sc.close();

        while(size>0) {
            System.out.println(size--);
        }
    }
}
```

## [2739. 구구단](http://boj.kr/2739)

<h3>🔒 문제</h3>

N을 입력받은 뒤, 구구단 N단을 출력하는 프로그램을 작성하시오. 출력 형식에 맞춰서 출력하면 된다.

<h3>📢 입력</h3>

* 첫째 줄에 N이 주어진다. N은 1보다 크거나 같고, 9보다 작거나 같다.

<h3>📢 출력</h3>

* 출력형식과 같게 N\*1부터 N\*9까지 출력한다.

<h3>📢 입출력 예</h3>

| 예제 입력 1 | 예제 출력 1 |
| --- | --- |
| 2 | 2 * 1 = 2<br>2 * 2 = 4<br>2 * 3 = 6<br>2 * 4 = 8<br>2 * 5 = 10<br>2 * 6 = 12<br>2 * 7 = 14<br>2 * 8 = 16<br>2 * 9 = 18 |

<h3>🔑 풀이</h3>

```java
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        sc.close();

        for (int i=1; i<=9; i++) {
            System.out.println(a + " * " + i + " = " + (a*i));
        }
    }
}
```

## [1924. 2007년](http://boj.kr/1924)

<h3>🔒 문제</h3>

오늘은 2007년 1월 1일 월요일이다. 그렇다면 2007년 x월 y일은 무슨 요일일까? 이를 알아내는 프로그램을 작성하시오.

<h3>📢 입력</h3>

* 첫째 줄에 빈 칸을 사이에 두고 x(1 ≤ x ≤ 12)와 y(1 ≤ y ≤ 31)이 주어진다. 참고로 2007년에는 1, 3, 5, 7, 8, 10, 12월은 31일까지, 4, 6, 9, 11월은 30일까지, 2월은 28일까지 있다.

<h3>📢 출력</h3>

* 첫째 줄에 x월 y일이 무슨 요일인지에 따라 SUN, MON, TUE, WED, THU, FRI, SAT중 하나를 출력한다.

<h3>📢 입출력 예</h3>

| 예제 입력 1 | 예제 출력 1 |
| --- | --- |
| 1 1 | MON |

| 예제 입력 2 | 예제 출력 2 |
| --- | --- |
| 3 14 | WED |

| 예제 입력 3 | 예제 출력 3 |
| --- | --- |
| 9 2 | SUN |

| 예제 입력 4 | 예제 출력 4 |
| --- | --- |
| 12 25 | TUE |

<h3>🔑 풀이</h3>

```java
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        // 달/월 입력받기
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        sc.close();

        int[] month = {0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
        String[] day = {"SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"};

        // 입력한 달 전까지의 일 수 더하기
        int totalDay = 0;
        for (int i=0; i<a; i++) {
            totalDay += month[i];
        }

        // 입력한 일 수 더하기
        totalDay += b;

        System.out.println(day[totalDay%7]);
    }
}
```

## [8393. 합](http://boj.kr/8393)

<h3>🔒 문제</h3>

n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.

<h3>📢 입력</h3>

* 첫째 줄에 n (1 ≤ n ≤ 10,000)이 주어진다.

<h3>📢 출력</h3>

* 1부터 n까지 합을 출력한다.

<h3>📢 입출력 예</h3>

| 예제 입력 1 | 예제 출력 1 |
| --- | --- |
| 3 | 6 |

<h3>🔑 풀이</h3>

```java
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        sc.close();

        int total =0;

        for (int i=1; i<=a; i++) {
            total += i;
        }

        System.out.println(total);
    }
}
```

## [10818. 최소, 최대](http://boj.kr/10818)

<h3>🔒 문제</h3>

N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.

<h3>📢 입력</h3>

* 첫째 줄에 정수의 개수 N (1 ≤ N ≤ 1,000,000)이 주어진다. 둘째 줄에는 N개의 정수를 공백으로 구분해서 주어진다. 모든 정수는 -1,000,000보다 크거나 같고, 1,000,000보다 작거나 같은 정수이다.

<h3>📢 출력</h3>

* 첫째 줄에 주어진 정수 N개의 최솟값과 최댓값을 공백으로 구분해 출력한다.

<h3>📢 입출력 예</h3>

| 예제 입력 1 | 예제 출력 1 |
| --- | --- |
| 5<br>20 10 35 30 7 | 7 35 |

<h3>🔑 풀이</h3>

```java
import java.util.Arrays;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        // 입력 갯수 정하고, 입력 받기
        Scanner sc = new Scanner(System.in);
        int size = sc.nextInt();

        int[] input = new int[size];
        for (int i=0; i<size; i++) {
            input[i] = sc.nextInt();
        }

        sc.close();

        // 정렬 및 출력
        Arrays.sort(input);
        System.out.println(input[0] + " " + input[size-1]);
    }
}
```

## [2438. 별 찍기 - 1](http://boj.kr/2438)

<h3>🔒 문제</h3>

첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제

<h3>📢 입력</h3>

* 첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.

<h3>📢 출력</h3>

* 첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다.

<h3>📢 입출력 예</h3>

| 예제 입력 1 | 예제 출력 1 |
| --- | --- |
| 5 | &#42;<br>&#42;&#42;<br>&#42;&#42;&#42;<br>&#42;&#42;&#42;&#42;<br>&#42;&#42;&#42;&#42;&#42;<br> |

<h3>🔑 풀이</h3>

```java
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int size = sc.nextInt();
        sc.close();

        for (int i=1; i<=size; i++) {
            for (int j=1; j<=i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
```


## [2439. 별 찍기 - 2](http://boj.kr/2439)

<h3>🔒 문제</h3>

첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제

하지만, 오른쪽을 기준으로 정렬한 별(예제 참고)을 출력하시오.

<h3>📢 입력</h3>

* 첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.

<h3>📢 출력</h3>

* 첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다.

<h3>📢 입출력 예</h3>

| 예제 입력 1 | 예제 출력 1 |
| --- | --- |
| 5 | &nbsp;&nbsp;&nbsp;&nbsp;&#42;<br>&nbsp;&nbsp;&nbsp;&#42;&#42;<br>&nbsp;&nbsp;&#42;&#42;&#42;<br>&nbsp;&#42;&#42;&#42;&#42;<br>&#42;&#42;&#42;&#42;&#42; |

<h3>🔑 풀이</h3>

```java
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int size = sc.nextInt();
        sc.close();

        for (int i=1; i<=size; i++) {
            for (int j=1; j<=size-i; j++) {
                System.out.print(" ");
            }
            for (int j=1; j<=i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
```

## [2440. 별 찍기 - 3](http://boj.kr/2440)

<h3>🔒 문제</h3>

첫째 줄에는 별 N개, 둘째 줄에는 별 N-1개, ..., N번째 줄에는 별 1개를 찍는 문제

<h3>📢 입력</h3>

* 첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.

<h3>📢 출력</h3>

* 첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다.

<h3>📢 입출력 예</h3>

| 예제 입력 1 | 예제 출력 1 |
| --- | --- |
| 5 | &#42;&#42;&#42;&#42;&#42;<br>&#42;&#42;&#42;&#42;<br>&#42;&#42;&#42;<br>&#42;&#42;<br>&#42; |

<h3>🔑 풀이</h3>

```java
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int size = sc.nextInt();
        sc.close();
        
        for (int i=size; i>0; i--) {
            for (int j=1; j<=i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
```

## [2441. 별 찍기 - 4](http://boj.kr/2441)

<h3>🔒 문제</h3>

첫째 줄에는 별 N개, 둘째 줄에는 별 N-1개, ..., N번째 줄에는 별 1개를 찍는 문제

하지만, 오른쪽을 기준으로 정렬한 별(예제 참고)을 출력하시오.

<h3>📢 입력</h3>

* 첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.

<h3>📢 출력</h3>

* 첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다.

<h3>📢 입출력 예</h3>

| 예제 입력 1 | 예제 출력 1 |
| --- | --- |
| 5 | &#42;&#42;&#42;&#42;&#42;<br>&nbsp;&#42;&#42;&#42;&#42;<br>&nbsp;&nbsp;&#42;&#42;&#42;<br>&nbsp;&nbsp;&nbsp;&#42;&#42;<br>&nbsp;&nbsp;&nbsp;&nbsp;&#42; |

<h3>🔑 풀이</h3>

```java
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int size = sc.nextInt();
        sc.close();

        for (int i=size; i>0; i--) {
            for (int j=size; j>i; j--) {
                System.out.print(" ");
            }
            for (int j=1; j<=i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
```

## [2442. 별 찍기 - 5](http://boj.kr/2442)

<h3>🔒 문제</h3>

첫째 줄에는 별 1개, 둘째 줄에는 별 3개, ..., N번째 줄에는 별 2×N-1개를 찍는 문제

별은 가운데를 기준으로 대칭이어야 한다.

<h3>📢 입력</h3>

* 첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.

<h3>📢 출력</h3>

* 첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다.

<h3>📢 입출력 예</h3>

| 예제 입력 1 | 예제 출력 1 |
| --- | --- |
| 5 | &nbsp;&nbsp;&nbsp;&nbsp;&#42;<br>&nbsp;&nbsp;&nbsp;&#42;&#42;&#42;<br>&nbsp;&nbsp;&#42;&#42;&#42;&#42;&#42;<br>&nbsp;&#42;&#42;&#42;&#42;&#42;&#42;&#42;<br>&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42; |

<h3>🔑 풀이</h3>

```java
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        sc.close();

        for (int i=1;i<=n;i++) {
            for(int j=i;j<n;j++) {
                System.out.print(" ");
            }
            for (int j=0; j< i*2-1; j++) {
                System.out.print("*");
            }
            System.out.println();
        }

    }
}
```

## [2445. 별 찍기 - 8](http://boj.kr/2445)

<h3>🔒 문제</h3>

예제를 보고 규칙을 유추한 뒤에 별을 찍어 보세요.

<h3>📢 입력</h3>

* 첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.

<h3>📢 출력</h3>

* 첫째 줄부터 2×N-1번째 줄까지 차례대로 별을 출력한다.

<h3>📢 입출력 예</h3>

| 예제 입력 1 | 예제 출력 1 |
| --- | --- |
| 5 | &#42;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#42;<br>&#42;&#42;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#42;&#42;<br>&#42;&#42;&#42;&nbsp;&nbsp;&nbsp;&nbsp;&#42;&#42;&#42;<br>&#42;&#42;&#42;&#42;&nbsp;&nbsp;&#42;&#42;&#42;&#42;<br>&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;<br>&#42;&#42;&#42;&#42;&nbsp;&nbsp;&#42;&#42;&#42;&#42;<br>&#42;&#42;&#42;&nbsp;&nbsp;&nbsp;&nbsp;&#42;&#42;&#42;<br>&#42;&#42;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#42;&#42;<br>&#42;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#42; |

<h3>🔑 풀이</h3>

```java
public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        sc.close();

        for (int i=1;i<=n;i++) {
            for (int j=1; j<=i; j++) {
                System.out.print("*");
            }
            for (int j=1; j<=n-i; j++) {
                System.out.print("  ");
            }
            for (int j=1; j<=i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }

        for (int i=1; i<=n-1; i++) {
            for (int j=1; j<=n-i; j++) {
                System.out.print("*");
            }
            for (int j=1; j<=i; j++) {
                System.out.print("  ");
            }
            for (int j=1; j<=n-i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }

}
```

## [2522. 별 찍기 - 12](http://boj.kr/2522)

<h3>🔒 문제</h3>

예제를 보고 규칙을 유추한 뒤에 별을 찍어 보세요.

<h3>📢 입력</h3>

* 첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.

<h3>📢 출력</h3>

* 첫째 줄부터 2×N-1번째 줄까지 차례대로 별을 출력한다.

<h3>📢 입출력 예</h3>

| 예제 입력 1 | 예제 출력 1 |
| --- | --- |
| 5 | &nbsp;&nbsp;&#42;<br>&nbsp;&#42;&#42;<br>&#42;&#42;&#42;<br>&nbsp;&#42;&#42;<br>&nbsp;&nbsp;&#42; |

<h3>🔑 풀이</h3>

```java
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        sc.close();

        for (int i=1; i<=n; i++) {
            for (int j=1; j<=n-i; j++) {
                System.out.print(" ");
            }
            for (int j=1; j<=i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }

        for (int i=1; i<=n-1; i++) {
            for (int j=1; j<=i; j++) {
                System.out.print(" ");
            }
            for (int j=1; j<=n-i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
    
}
```

## [2446. 별 찍기 - 9](http://boj.kr/2446)

<h3>🔒 문제</h3>

예제를 보고 규칙을 유추한 뒤에 별을 찍어 보세요.

<h3>📢 입력</h3>

* 첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.

<h3>📢 출력</h3>

* 첫째 줄부터 2×N-1번째 줄까지 차례대로 별을 출력한다.

<h3>📢 입출력 예</h3>

| 예제 입력 1 | 예제 출력 1 |
| --- | --- |
| 5 | &#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;<br>&nbsp;&#42;&#42;&#42;&#42;&#42;&#42;&#42;<br>&nbsp;&nbsp;&#42;&#42;&#42;&#42;&#42;<br>&nbsp;&nbsp;&nbsp;&#42;&#42;&#42;<br>&nbsp;&nbsp;&nbsp;&nbsp;&#42;<br>&nbsp;&nbsp;&nbsp;&#42;&#42;&#42;<br>&nbsp;&nbsp;&#42;&#42;&#42;&#42;&#42;<br>&nbsp;&#42;&#42;&#42;&#42;&#42;&#42;&#42;<br>&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42; |

<h3>🔑 풀이</h3>

```java
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        sc.close();


        for (int i=1; i<=n; i++) {
            for (int j=1; j<=i; j++) {
                if (j != 1) {
                    System.out.print(" ");
                }
            }
            for (int j=2*i-1; j<=2*n-1; j++) {
                System.out.print("*");
            }
            System.out.println();
        }

        for (int i=1; i<=n-1; i++) {
            for (int j=1; j<=n-i; j++) {
                if (j != 1) {
                    System.out.print(" ");
                }
            }
            for (int j=1; j<=2*i+1; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
```

## [10991. 별 찍기 - 16](http://boj.kr/10991)

<h3>🔒 문제</h3>

예제를 보고 규칙을 유추한 뒤에 별을 찍어 보세요.

<h3>📢 입력</h3>

* 첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.

<h3>📢 출력</h3>

* 첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다.

<h3>📢 입출력 예</h3>

&nbsp;&#42;

| 예제 입력 1 | 예제 출력 1 |
| --- | --- |
| 1 | &#42; |

| 예제 입력 2 | 예제 출력 2 |
| --- | --- |
| 2 | &nbsp;&#42;<br>&#42;&nbsp;&#42; |

| 예제 입력 3 | 예제 출력 3 |
| --- | --- |
| 3 | &nbsp;&nbsp;&#42;<br>&nbsp;&#42;&nbsp;&#42;<br>&#42;&nbsp;&#42;&nbsp;&#42; |

| 예제 입력 4 | 예제 출력 4 |
| --- | --- |
| 4 | &nbsp;&nbsp;&nbsp;&#42;<br>&nbsp;&nbsp;&#42;&nbsp;&#42;<br>&nbsp;&#42;&nbsp;&#42;&nbsp;&#42;<br>&#42;&nbsp;&#42;&nbsp;&#42;&nbsp;&#42; |

<h3>🔑 풀이</h3>

```java
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        sc.close();

        for (int i=0; i<n; i++) {
            for (int j=i; j<n-1; j++) {
                System.out.print(" ");
            }
            for (int j=0; j<=i; j++) {
                System.out.print("*");
                System.out.print(" ");
            }
            System.out.println();
        }
    }
}
```

## [10992. 별 찍기 - 17](http://boj.kr/10992)

<h3>🔒 문제</h3>

예제를 보고 규칙을 유추한 뒤에 별을 찍어 보세요.

<h3>📢 입력</h3>

* 첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.

<h3>📢 출력</h3>

* 첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다.

<h3>📢 입출력 예</h3>

&nbsp;&#42;

| 예제 입력 1 | 예제 출력 1 |
| --- | --- |
| 1 | &#42; |

| 예제 입력 2 | 예제 출력 2 |
| --- | --- |
| 2 | &nbsp;&#42;<br>&#42;&#42;&#42; |

| 예제 입력 3 | 예제 출력 3 |
| --- | --- |
| 3 | &nbsp;&nbsp;&#42;<br>&nbsp;&#42;&nbsp;&#42;<br>&#42;&#42;&#42;&#42;&#42; |

| 예제 입력 4 | 예제 출력 4 |
| --- | --- |
| 4 | &nbsp;&nbsp;&nbsp;&#42;<br>&nbsp;&nbsp;&#42;&nbsp;&#42;<br>&nbsp;&#42;&nbsp;&nbsp;&nbsp;&#42;<br>&#42;&#42;&#42;&#42;&#42;&#42;&#42; |

<h3>🔑 풀이</h3>

```java
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        sc.close();

        for (int i = 1; i <= n; i++) {
            for (int j = i; j <= n - 1; j++) {
                System.out.print(" ");
            }
            if (i == n) {
                for (int j = 1; j <= 2 * n - 1; j++) {
                    System.out.print("*");
                }
            } else {
                for (int j = 1; j < 2 * i; j++) {
                    if (j == 1 || j == 2 * i - 1) {
                        System.out.print("*");
                    } else {
                        System.out.print(" ");
                    }
                }
            }
            System.out.println();
        }
    }
}
```