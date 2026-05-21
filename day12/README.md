# 🚌 셔클(Shucle) 서비스 도입 사례 및 솔루션 페이지 구현

현대자동차의 수요응답형 모빌리티 서비스인 **'셔클(Shucle)'**의 웹사이트 화면을 HTML/CSS로 마크업 및 스타일링한 실습 프로젝트입니다. 

총 3가지 형태의 레이아웃(도입 사례 상세 페이지, 3단 카드 뉴스형 솔루션 리스트)을 컴포넌트화하여 구현했습니다.

---

## 🛠️ 적용 기술 및 핵심 레이아웃

### 1. 가상 선택자를 활용한 요소 삽입 (`::before`, `::after`)
* HTML 구조를 복잡하게 만들지 않고 CSS만으로 위치 아이콘, 자동차 아이콘을 배경 이미지로 삽입했습니다.
* 텍스트와 텍스트 사이에 세로 구분선(`|`)을 가상 선택자로 구현하여 결합도를 낮췄습니다.

### 2. 가독성을 위한 중앙 영역 제한 (`width` + `margin: 0 auto`)
* 본문 콘텐츠의 최대 가로 폭을 `1280px` 및 `1180px`로 제한하여 모니터 화면이 커지더라도 본문 내용이 양옆으로 길게 찢어지지 않도록 단속했습니다.
* `margin: 0 auto`를 조합하여 화면 크기와 관계없이 항상 컨텐츠가 화면 정중앙에 위치하도록 구현했습니다.

### 3. Flexbox 레이아웃 디자인 (`display: flex`)
* **3단 세로 카드 배열:** `justify-content: space-between`과 `gap: 30px`을 사용하여 카드들 사이의 간격을 유연하게 제어했습니다.
* **좌우 분할 배정:** `justify-content: space-between`과 `align-items: center`를 통해 왼쪽에는 안내 텍스트 그룹을, 오른쪽에는 일러스트 이미지를 수직 중앙 정렬로 배치했습니다.

---

## 🎨 웹 스타일 가이드 (Style Guide)

* **Font Family:** Pretendard Variable (고정/가변형 프리텐다드 서체 적용)
* **Color Palette:**
  * Main Brand Color (Blue): `#2367EF` / `#1466f0`
  * Typography Color (Black): `#111111` / `#121212` / `rgba(0, 0, 0, 0.85)`
  * Background Color (Gray): `#e5e5e5` / `lightgray`
* **Typography Detail:** * 본문 가독성 확보를 위해 행간(`line-height: 1.5 ~ 1.6`) 및 자간(`letter-spacing`) 옵션 조정

---

## 📂 파일 구성
* `Case 1. 거점 중심 이동 (타입 A 페이지)`
* `수요응답교통 DRT 솔루션 소개 (타입 B 카드 뉴스 페이지)`
* `양주시 옥정신도시 도입사례 (타입 C 좌우 분할 페이지)`