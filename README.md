# 🐾 Pet Diary

반려동물의 예방접종, 미용 예약 등 일정을 간편하게 기록하고 관리할 수 있는 캘린더 기반 서비스입니다.  
반려동물의 일상을 함께하는 보호자를 위한 편리한 일정 관리 기능과 위치 기반 서비스(지도)를 제공합니다.

<br/>

## 🛠️ Tech Stack

### Frontend
- React.js, Next.js
- TypeScript
- TailwindCSS, MUI
- Zustand, React Query
- Kakao Maps API

### Backend
- NestJS
- PostgreSQL
- AWS S3 (이미지 저장)
- JWT, OAuth2 (소셜 로그인)

### DevOps & Infra
- Docker, Docker Compose
- AWS EC2, ECR
- Nginx
- GitHub Actions (CI/CD 예정)

<br/>

## ✨ 주요 기능

### 📅 일정 관리
- 반려동물 별로 예방접종, 미용, 산책 등 일정 등록 및 수정
- 월별/주별 캘린더 UI 제공

### 📍 위치 기반 서비스
- Kakao Maps API를 활용한 위치 검색 및 지도 표시
- 클러스터링, 커스텀 마커, 거리 계산 기능 지원

### 🧠 전역 상태 관리
- Zustand를 통한 Provider-less 상태 관리
- 커스텀 메서드를 store에 등록하여 유지보수성 향상
- Toast 메시지 글로벌 상태로 관리

### 🧾 인증
- Kakao 소셜 로그인 연동
- SSR 환경에서의 인증 상태 유지를 위한 HttpOnly 쿠키 설정 및 Middleware 인증 처리

<br/>

## 🗂️ 프로젝트 구조
```
📦 app/
├─ (home)/                # 주요 페이지 경로 (calendar, mypage 등 포함)
│  └─ (auth)/             # 로그인, 계정 관련 페이지
├─ api/                   # Next.js App Router 기반 API 라우트
├─ apis/                  # 외부 API 호출 로직 (예: pet, schedule 관련)
├─ assets/                # 프로젝트 리소스 (이미지, 폰트 등)
├─ components/            # UI 컴포넌트 집합
├─ constants/             # 상수 정의 (타이포 등)
├─ hooks/                 # 커스텀 훅 (React-query 기반 데이터 패칭 등)
├─ libs/                  # 유틸리티 라이브러리 함수
├─ recoil/                # 전역 상태 관리 (Recoil 사용 시점)
├─ types/                 # TypeScript 타입 정의
└─ utils/                 # 공통 유틸 함수 (예: 날짜 포매팅, 거리 계산 등)
```

<br/>

## 🚀 실행 방법

### 1. 클론 및 의존성 설치

```bash
git clone https://github.com/petD-ary/petDiary.git
cd petDiary
pnpm install
```

### 2. 개발 서버 실행
```bash
pnpm dev
```

<br/>

## 📌 기타
- 프로젝트 진행 기간: 2023.10.  2024.10.
- 협업 방식: GitHub Flow + Notion 문서 기반
- 커밋 컨벤션: Conventional Commits
- 배포: AWS EC2 + Docker + Nginx
