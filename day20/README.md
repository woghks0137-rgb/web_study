# 🏛️ Web Publisher & Front-end UI Clone Coding

HTML5와 CSS3의 실무 레이아웃 테크닉을 익히기 위해 진행한 **'한국의집(PC 메인)'** 및 **'롯데호텔(브랜드 프로모션)'** 웹 퍼블리싱 프로젝트입니다.  
시각적인 오차 없는 UI 구현과 구조적이고 깔끔한 마크업 및 가상 요소를 활용한 세밀한 정렬에 집중하여 제작했습니다.

---

## 🛠️ Tech Stack
<p>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white"/>
  <img src="https://img.shields.io/badge/Swiper_JS-6332F6?style=flat-square&logo=swiper&logoColor=white"/>
</p>

---

## 📂 프로젝트 구성 및 주요 기능

### 1. 한국의집 (Korea House) - 메인 헤더 & 슬라이더
> **디자이너의 시안을 정교한 absolute position과 flex 레이아웃으로 구현한 PC 메인 페이지입니다.**

* **배치 기법 (`position: absolute`)**: 헤더 내부의 로고, 검색창, SNS 아이콘, 언어 선택창을 `position: absolute`와 `transform` 조합을 통해 세로 정렬(Center) 기준으로 한 치의 오차 없이 배치했습니다.
* **사용자 경험 (UX) 요소**: 언어 선택(`lang-area`) 레이어에 CSS `:hover` 가상 클래스를 적용하여 부드러운 드롭다운 메뉴를 구현했으며, SNS 아이콘 호버 시 자연스럽게 위로 튕기는 마우스 오버 이벤트를 CSS `transition`으로 녹여냈습니다.
* **Swiper.js 라이브러리 연동**: 반응형 이미지 슬라이더인 Swiper 12 버전을 연동하여 메인 비주얼 배너의 네비게이션 제어 기능을 탑재했습니다.

### 2. 롯데호텔 (Lotte Hotel) - 브랜드 프로모션 탭
> **Flexbox 레이아웃 구조와 가상 요소를 활용해 세련되고 정렬된 정보성 UI를 구현했습니다.**

* **Flexbox 레이아웃 패턴**: 상단 탭 메뉴 버튼들과 하단 콘텐츠 영역(`display: flex`, `justify-content: space-between`)을 유연하게 분할하여 웹 표준에 맞는 배치 구조를 설계했습니다.
* **이미지 필터 애니메이션 효과**: 썸네일 이미지에 CSS `filter: grayscale()` 속성을 부여해 평소에는 흑백으로 보이다가, 마우스를 올리면(`:hover`) 본래의 색상과 선명도를 되찾는 감각적인 마우스 오버 효과를 연출했습니다.
* **가상 요소(`::before`) 활용 세로선 구현**: 정의 목록(`dl`, `dt`, `dd`) 구조에서 데이터 간 시각적 구분을 주기 위해 가상 요소를 활용해 완벽한 수직 구분선(|)을 세우고 정밀하게 정렬했습니다.

---

## 💡 주요 문제 해결 및 배운 점 (Troubleshooting)

### 1. 가상 요소(`::before`) 크기 무시 현상 해결
* **문제 상황**: `dd::before`를 사용하여 텍스트 앞에 세로 구분선을 만드려고 `width`와 `height`를 지정했으나, 화면에 아무것도 출력되지 않는 현상이 발생했습니다.
* **원인 분석**: `::before` 가상 요소는 기본 속성이 `inline`이기 때문에 가로/세로 크기를 가질 수 없음을 인지했습니다.
* **해결 방법**: `display: inline-block;` 속성을 주어 텍스트와 나란히 배치되면서도 고유의 상자 크기(`width`, `height`)를 가질 수 있도록 수정하여 해결했습니다.

### 2. 텍스트 세로 정렬 및 줄간격 통제
* **문제 상황**: 요소 내부에 글씨가 한 줄로 들어갈 때 폰트 고유의 여백 때문에 상자 안에서 위아래 정렬이 미세하게 어긋나는 현상이 있었습니다.
* **해결 방법**: `line-height` 속성을 해당 박스의 `height`와 일치시키거나 비율 단위(`1.5`)를 적극적으로 활용해 타이포그래피 가독성을 높이고 정중앙 정렬을 제어했습니다.

---

## 🏗️ 코드 아키텍처 구조
* `reset.css`를 통한 브라우저 기본 스타일 초기화 후 공통 스타일 관리
* 웹 표준 시각 장애인을 위한 숨김 텍스트 구조 구축 (`.blind` 처리)
* 가독성을 높인 클래스 네이밍 규칙 적용 (`.inner`, `.search-area`, `.tab-contents`)