# 잦은 가비지 수집 관측


페이지가 일시 중지하는 상황이 자주 발생하면 가비지 수집 문제일 수 있다.

잦은 가비지 수집을 관측하려면 Chrome 작업 관리자 또는 타임라인 메모리 기록을 사용하면 된다. 
작업 관리자의 경우, Memory 또는 Javascript Memory 값이 너무 자주 오르내리는 경우 가비 수집이 잦다는 의미. 
타임라인 기록에서 JS 힙 또는 노드 카운트 그래프가 자주 오르내리는 경우, 가비지 수집이 잦다는 의미입니다.

문제가 무엇인지 파악했으면 할당 타임라인 기록을 사용하여 메모리가 어디에 할당되는지, 어느 함수가 할당을 초래하는지 알아낼 수 있다.

- [garbage-1](./html/garbage-1.html) 
  - [See Live](https://thegicode.github.io/performance/html/garbage-1.html)
- [garbage-2](./html/garbage-2.html) 
  - [See Live](https://thegicode.github.io/performance/html/garbage-2.html)


출처: https://12bme.tistory.com/349?category=785013 
