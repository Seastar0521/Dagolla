# ShoppingMall
# 🛒 쇼핑몰 웹사이트 (Shopping)

본 프로젝트는 **React(프론트엔드)**, **FastAPI(백엔드)**, **MongoDB(데이터베이스)** 를 활용하여 구현한 쇼핑몰 웹사이트입니다.  
상품 목록 페이지를 중심으로, 고객사의 요구사항과 기능 목록을 충족하는 구조로 개발되었습니다.  

---

## 📌 기본 정보
- 프로젝트명: Shopping
- 프론트엔드: React, TailwindCSS
- 백엔드: FastAPI
- 데이터베이스: MongoDB
- 문서 작성자: (작성자 이름 기입)

---

## ✅ 고객사 요구사항 분석 체크리스트
- [x] 모바일 UI 지원  
- [x] 상품 사진 표시  
- [x] 장바구니에 담긴 상품 개수 실시간 업데이트  
- [x] 배포 URL 제공  

---

## 🛠 기능 목록 체크리스트
- [x] 이미지가 포함된 상품 카드  
- [x] 2개의 컬럼으로 구성된 상품 목록 레이아웃  
- [x] 상품 카드에서 ‘담기’ 버튼과 담김 상태 변화  
- [x] 담기 버튼 클릭 후, 헤더에 담긴 상품 개수 변화  

---

## 🗂 시스템 구조
```plaintext
Frontend (React)  --->  Backend API (FastAPI)  --->  Database (MongoDB)


shopping/
 ├── frontend/                # React 프론트엔드
 │    ├── public/             # 정적 파일
 │    ├── src/                # 리액트 소스코드
 │    │    ├── components/    # 공용 컴포넌트
 │    │    ├── pages/         # 페이지 단위 컴포넌트
 │    │    ├── hooks/         # 커스텀 훅
 │    │    └── App.js
 │    └── package.json
 │
 ├── backend/                 # FastAPI 백엔드
 │    ├── main.py             # FastAPI 엔트리포인트
 │    ├── routers/            # API 라우터
 │    ├── models/             # MongoDB 모델 정의
 │    ├── services/           # 서비스 로직
 │    └── requirements.txt    # Python 의존성
 │
 ├── docs/                    # 프로젝트 문서
 │    └── requirements_checklist.md
 │
 ├── .gitignore
 └── README.md
 
