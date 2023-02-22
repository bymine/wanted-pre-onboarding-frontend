# 원티드 프리온보딩 프론트엔드 - 선발 과제

## :books: 목차

1. [요구 사항](#요구-사항)
2. [작동 화면](#작동-화면)
3. [실행 방법](#실행-방법)
4. [진행 기간](#진행-기간)
5. [폴더 구조](#폴더-구조)

## :clipboard: 요구 사항

### 1. 로그인 / 회원가입

- Assignment 1

  - [x] 회원가입과 로그인 페이지에 이메일과 비밀번호의 유효성 검사기능을 구현해주세요
  - [x] 입력된 이메일과 비밀번호가 유효성 검사를 통과하지 못한다면 button에 disabled 속성을 부여해주세요

- Assignment 2

  - [x] 회원가입 페이지에서 버튼을 클릭 시 회원가입을 진행하고 회원가입이 정상적으로 완료되었을 시 /signin 경로로 이동해주세요

- Assignment 3

  - [x] 로그인 페이지에서 버튼을 클릭 시, 로그인을 진행하고 로그인이 정상적으로 완료되었을 시 /todo 경로로 이동해주세요

- Assignment 4

  - [x] 로그인 여부에 따른 리다이렉트 처리를 구현해주세요

### 2. TODO LIST

- Assignment 5

  - [x] /todo경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 해주세요
  - [x] 목록에서는 TODO의 내용과 완료 여부가 표시되어야 합니다.
  - [x] TODO의 완료 여부는 <input type="checkbox" />를 통해 표현해주세요
  - [x] TODO는 <li> tag를 이용해 감싸주세요

- Assignment 6

  - [x] 리스트 페이지에 새로운 TODO를 입력할 수 있는 input과 추가 button을 만들어주세요
  - [x] 추가 button을 클릭하면 입력 input의 내용이 새로운 TODO로 추가되도록 해주세요

- Assignment 7

  - [x] TODO의 체크박스를 통해 완료 여부를 수정할 수 있도록 해주세요

- Assignment 8

  - [x] TODO 우측에 수정버튼과 삭제 버튼을 만들어주세요

- Assignment 9

  - [x] 투두 리스트의 삭제 기능을 구현해주세요

- Assignment 10

  - [x] 투두 리스트의 수정 기능을 구현해주세요

## :movie_camera: 작동 화면

- 로그인 화면과 회원가입 화면

  ![wnated-pre-onboarding1](https://user-images.githubusercontent.com/71866185/218249208-1575862b-cdb9-4a27-b1c0-279fe02723d8.gif)

- 이메일과 비밀번호 유효성을 확인
  ![wnated-pre-onboarding2](https://user-images.githubusercontent.com/71866185/218249246-c49f0f33-a80d-4323-930b-ad424110dc6b.gif)

- 투두 리스트 화면
  ![wnated-pre-onboarding3](https://user-images.githubusercontent.com/71866185/218249318-f26a4bd9-3560-41e2-b4bf-556b5d0654a7.gif)

## 실행 방법

- 클라이언트 실행

  git clone 한 후, /(루트) 경로에서 아래 명령어를 실행합니다.

  ```
  cd client
  npm start
  //http://localhost:3000
  ```

- :computer: 서버 실행

  [백엔드 코드](https://github.com/walking-sunset/selection-task)

  git clone 한 후, /(루트) 경로에서 아래 명령어를 실행합니다.

  ```
  cd server
  port를 5000으로 변경
  npm start
  ```

## :date: 진행 기간

2023.2.3 ~ 2023.2.11

## :open_file_folder: 폴더 구조

```
📦src
 ┣ 📂apis
 ┃ ┣ 📂auth
 ┃ ┃ ┗ 📜auth.js
 ┃ ┗ 📂todo
 ┃ ┃ ┗ 📜todo.js
 ┣ 📂components
 ┃ ┣ 📂FormField
 ┃ ┃ ┣ 📜formField.css
 ┃ ┃ ┗ 📜FormField.jsx
 ┃ ┣ 📂TodoField
 ┃ ┃ ┣ 📜todoField.css
 ┃ ┃ ┗ 📜TodoField.jsx
 ┃ ┗ 📜index.js
 ┣ 📂hoc
 ┃ ┗ 📜withAuth.jsx
 ┣ 📂pages
 ┃ ┣ 📂Loading
 ┃ ┃ ┣ 📜loading.css
 ┃ ┃ ┗ 📜Loading.jsx
 ┃ ┣ 📂SignIn
 ┃ ┃ ┣ 📜signIn.css
 ┃ ┃ ┗ 📜SignIn.jsx
 ┃ ┣ 📂SignUp
 ┃ ┃ ┣ 📜signUp.css
 ┃ ┃ ┗ 📜SignUp.jsx
 ┃ ┣ 📂Todo
 ┃ ┃ ┣ 📜todo.css
 ┃ ┃ ┗ 📜Todo.jsx
 ┃ ┗ 📜index.js
 ┣ 📜App.css
 ┣ 📜App.js
 ┣ 📜index.css
 ┗ 📜index.js
```

| 폴더           | 용도                                                                   |
| -------------- | ---------------------------------------------------------------------- |
| **apis**       | REST API통신을 위한 Axios코드가 위치하는 폴더입니다.                   |
| **components** | 재사용 가능한 컴포넌트들이 위치하는 폴더입니다.                        |
| **hoc**        | 컴포넌트 로직을 재사용하기 위한 고차 컴포넌트들이 위치하는 폴더입니다. |
| **pages**      | 라우팅을 적용할 때 페이지 컴포넌트들이 위치하는 폴더입니다.            |
