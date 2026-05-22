# 🧪 Le Labo Brand Page Clone Coding

> **Flex 레이아웃 정복을 위한 르라보(Le Labo) 웹시안 클론 코딩 프로젝트**
> 
> 그동안 헷갈렸던 CSS 레이아웃 구조와 `display: flex;`의 핵심 메커니즘을 완벽하게 이해하고 실전에 적용하기 위해 진행한 연습 프로젝트입니다.

---

## 🛠️ Tech Stack & Development Environment
* **Language:** HTML5, CSS3
* **Editor:** Visual Studio Code
* **Methodology:** Flexbox Layout, Responsive Reset CSS

---

## 💡 Flexbox 핵심 학습 내용 (My Learning Points)

이번 프로젝트를 진행하며 `display: flex;`를 사용할 때 가장 많이 실수하는 포인트들과 해결책을 제대로 마스터했습니다.

### 1. 상단 헤더 (로고 & 메뉴 양끝 정렬)
* **문제 상황:** 로고(`<h1>`)와 메뉴 리스트(`<ul>`)가 하나의 박스 안에서 세로로 떨어지거나 배치가 꼬임.
* **해결 방법:** 부모 박스(`.categori`)에 `display: flex;`와 `justify-content: space-between;`을 주어 로고는 좌측 끝, 메뉴는 우측 끝으로 칼정렬 시키고, `<ul>` 안의 글자들도 부모 flex를 통해 가로 일렬로 나열 완료!

### 2. 중간 소개 영역 (이미지 & 글 상자 수평 배치)
* **문제 상황:** 원본 이미지 크기가 너무 거대해서 오른쪽 글씨들을 사정없이 밀어내고 레이아웃이 무너짐.
* **해결 방법:** * 글 덩어리들을 하나의 상자(`.text-box03`)로 묶어 그룹화.
  * 부모인 `.middle-container`에 `display: flex;`를 주고 이미지 태그에 정확한 너비(`width: 400px;`)를 지정하여 이미지와 글씨가 깨짐 없이 황금 비율로 수평 배치되도록 제어.

---

## 🔍 주요 CSS 코드 다시 보기

### 🗂️ 레이아웃의 치트키: `.middle-container` Flexbox
```css
.middle-container {
    background: lightgray;
    display: flex;             /* 수평 나열 활성화 */
    justify-content: space-between; /* 양 끝 정렬 */
    align-items: center;        /* 수직 가운데 정렬 */
    padding: 100px 200px;
}

.middle-container img {
    width: 400px;              /* 거대했던 이미지 크기 제한 */
}