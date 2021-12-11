# performance

## 웹성능 예산
### 정량 기반 지표
- 이미지 파일의 최대 크기
- 최대 웹 폰트 파일 개수
- 자바스크립트 파일 크기 합
- 타사 스크립트 개수 합

### 시간 기반 지표
- FCP(First Contentful Paint): 텍스트 또는 이미지와 같이 DOM의 첫 번째 비트를 표시하는 시점
- TTI(Time to Interactive): 페이지가 사용자 입력에 안정적으로 응답하는데 걸리는 시간

### 규칙 기반 지표
- WebPageTest 성능 점수
- Google Lighthouse 성능 점수


## window.performance
[w3.org](https://www.w3.org/TR/navigation-timing/#sec-window.performance-attribute)

### window.performance.navigation.type
| 상수 | 값 | 설명 |
|---|-|-----------|
|TYPE_NAVIGATE|0|링크, 북마크, 폼 전송, URL 브라우저 타이핑 등의 방식으로 페이지 접속|
|TYPE_RELOAD|1|브라우저의 새로 고침 버튼을 통해 페이지 접속|
|TYPE_BACK_FORWARD|2|뒤로가기 버튼을 통해 페이지 접속|
|TYPE_RESERVED|255|그 외의 방법으로 페이지 접속|


