# 📅 오늘 공부한 내용 정리 (Card UI & Tooltip)

오늘 학습한 HTML/CSS 마크업과 스타일링 내용을 정리한 저장소입니다. 웹 퍼블리싱의 기본이 되는 **카드형 레이아웃**과 CSS의 `hover`, `display` 속성을 활용한 **인터랙션(툴팁, 드롭다운 메뉴)** 기능의 구조를 학습했습니다.

---

## 🛠️ 주요 학습 내용 및 메커니즘

### 1. 추천 제품 카드 UI (`card-wrap`)
* **레이아웃 구조:** `max-width: 1440px`로 최대 해상도를 제한하고, `margin: 50px auto`를 통해 화면 중앙에 배치했습니다.
* **Flexbox 활용:** `ul`에 `display: flex`와 `justify-content: space-between`, `gap: 25px`를 주어 4개의 카드 아이템이 일정한 간격으로 나란히 정렬되도록 구축했습니다.
* **이미지 애니메이션:** `a` 태그 영역 밖으로 이미지가 빠져나가지 않도록 `overflow: hidden`을 설정하고, 마우스를 올렸을 때(`:hover`) 이미지가 자연스럽게 확대되도록 `transform: scale(1.2)`와 `transition: 0.3s` 효과를 적용했습니다.
* **텍스트 스타일링:** `text-transform: uppercase`를 통해 브랜드명을 영문 대문자로 변환하고, `letter-spacing: 1px`로 자간을 조절하여 가독성을 높였습니다.

### 2. display 속성을 활용한 인터랙션 효과
자바스크립트 없이 CSS의 `:hover` 선택자와 `display` 속성 제어만으로 마우스 반응형 UI를 구현했습니다.

* **마우스 오버 툴팁 (`.box`):** 평소에는 `.tooltip`을 `display: none`으로 숨겨두었다가, 부모 요소에 마우스를 올리면 `display: block`으로 변경되어 나타나도록 제어했습니다.
* **언어 선택 드롭다운 메뉴 (`.lang`):** `list-style: none`으로 불필요한 불릿을 제거한 `ul` 메뉴를 평소에는 숨겨두고, 사용자가 `.lang` 영역에 마우스를 올렸을 때 하위 메뉴 리스트가 하단으로 펼쳐지도록 구현했습니다.

### 3. Reset CSS 반영
* 브라우저 기본 내장 스타일로 인한 레이아웃 왜곡을 방지하기 위해 모든 주요 태그의 `margin`과 `padding`을 `0`으로 초기화했습니다.
* `li` 태그의 `list-style-type: none`, `a` 태그의 `text-decoration: none` 및 `color: inherit`를 설정하여 일관된 텍스트 디자인을 유지했습니다.
* 스크린 리더에는 읽히지만 화면에는 보이지 않도록 구조화한 `.blind` 클래스를 통해 웹 접근성을 고려한 마크업을 반영했습니다.

---

## 📂 파일 구조 및 포함된 소스

* **HTML 파일**
  * 카드 UI 메인 마크업 구조
  * 툴팁 및 언어선택 드롭다운 마크업 구조
* **CSS 파일**
  * `reset.css` : 브라우저 기본 스타일 초기화 및 `.blind` 공통 클래스 정의
  * `cardul.css` : 카드 레이아웃 스타일, Pretendard 웹 폰트 세팅, hover 애니메이션, 툴팁/드롭다운 display 제어 스타일