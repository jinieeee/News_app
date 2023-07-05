# News App

React axios async/await를 활용한 News app


## 개발로그

#### 2023-07-05
- 카테고리 클릭 시에 비동기 데이터 조회 기능 구현
- 카테고리를 useState 방식에서 리액트 라우터 방식으로 변경
    - state에서 관리하던 카테고리를 /:category와 같이 url로 전달
- usePromise hook 커스텀하여 상태 관리
    - async 통신 시에 loading, response, error 상태를 관리하는 usePromise hook 생성
    - 의존 배열을 param으로 받아서 상태 변경 감지하도록  
#### 2023-07-03
- API로 실제 데이터 연동
- 카테고리 UI 추가  
#### 2023-07-02
- create react app
- npm install axios & styled-component
- news app api key 발급
- .env 생성 및 api key 숨기기
- vs code 확장 설치 : Auto import, Reactjs code snippets