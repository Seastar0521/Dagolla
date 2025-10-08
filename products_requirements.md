# Dagolla
# 🛒 쇼핑몰 웹사이트

본 프로젝트는 **React**, **FastAPI**, **MongoDB** 를 활용하여 구현한 쇼핑몰 웹사이트입니다.  
상품 목록 페이지를 중심으로, 고객사의 요구사항과 기능 목록을 충족하는 구조로 개발되었습니다.  

---

## 📌 기본 정보
- 프로젝트명: Dagolla
- 프론트엔드: React, TailwindCSS
- 백엔드: Python, FastAPI
- 데이터베이스: MongoDB
- 문서 작성자: 김민재

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
 
