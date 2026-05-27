# 힐링데이 리조트 (하루송) 메인 랜딩 페이지

바쁜 일상 속 지친 몸과 마음을 위한 프리미엄 힐링 라이프 프로그램 리조트 '하루송'의 메인 랜딩 페이지입니다. 기본 마크업 구조와 CSS의 레이아웃 배치 기법을 학습하기 위해 제작되었습니다.

---

## 🛠️ 개발 환경 및 사용 기술
* **HTML5**: 구조적 마크업 및 시맨틱 태그 활용 (`<header>`, `<section>`, `<nav>`, `<footer>`)
* **CSS3**: Flexbox 기반 레이아웃 배치, `position` 속성을 활용한 컴포넌트 설계
* **Font**: Pretendard Variable (본문), 카페24 고운밤 (타이틀)

---

## 📌 주요 레이아웃 및 기능 특징

### 1. Header (상단 영역)
* `position: absolute; width: 100%;` 속성을 활용하여 메인 비주얼 배경 이미지 위에 투명하게 얹어지는 내비게이션 바를 구현했습니다.
* `display: flex;`와 `justify-content: space-between;`을 사용하여 좌측 로고와 우측 GNB 메뉴의 균형 잡힌 정렬을 맞췄습니다.

### 2. Main Visual (메인 비주얼 영역)
* `height: 860px;` 고정 높이와 `background-size: cover;`를 결합해 화면에 꽉 차는 메인 배경 이미지를 배치했습니다.
* 내부 텍스트 요소를 가로·세로 정중앙에 정렬하기 위해 `display: flex;`, `justify-content: center;`, `align-items: center;` 구조를 적용했습니다.

### 3. About Area (소개 섹션)
* 차분하고 따뜻한 톤의 배경색(`#ede3d7`)을 지정하여 리조트의 '쉼'이라는 무드를 강조했습니다.
* 전체 가로 폭을 이미지 영역(`width: 52%;`)과 텍스트 영역(`width: 48%;`)으로 분할하고, 이미지 크기가 깨지거나 찌그러지지 않도록 `object-fit: cover;` 처리를 적용했습니다.

### 4. Program Area (프로그램 소개 섹션)
* 3개의 주요 힐링 프로그램을 가로 배열로 배치하기 위해 리스트(`ul.program-list`)에 `display: flex;`와 `gap: 25px;` 여백을 부여했습니다.
* 타이틀, 이용 시간, 본문 텍스트, 해시태그, 버튼 영역을 마크업으로 세분화하여 가독성을 높였습니다.

---

## 📂 파일 구조
```text
├── index.html          # 메인 레이아웃 마크업 파일
└── css/
    ├── healing.css     # 메인 스타일시트 (Flex, 레이아웃 등)
    ├── reset.css       # 브라우저 기본 여백 초기화 파일
    └── fonts.css       # 웹 폰트 링크 파일