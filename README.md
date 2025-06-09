# Rails Template

이 프로젝트는 Rails 8의 최신 기능들을 포함한 Rails 템플릿입니다. 새로운 Rails 프로젝트를 시작할 때 기본 설정을 빠르게 적용하기 위해 만들어졌습니다.

## 특징

### Modern Rails 8 Stack

- **Rails 8.0.2** 최신 버전
- **Hotwire** (Turbo + Stimulus) SPA-like 경험
- **Tailwind CSS** 유틸리티 중심 스타일링
- **Import Maps** Node.js 없는 JavaScript 모듈 관리
- **Propshaft** 모던 애셋 파이프라인

### Solid Stack (Database-backed)

- **Solid Cache** - 데이터베이스 기반 캐싱 (Redis 불필요)
- **Solid Queue** - 데이터베이스 기반 백그라운드 작업 (Sidekiq 불필요)
- **Solid Cable** - 데이터베이스 기반 Action Cable (Redis 불필요)

### 한국어 설정

- **기본 로케일**: 한국어 (`ko`)
- **타임존**: 서울 (Asia/Seoul)
- **다국어 지원** 준비됨

### 배포 준비

- **Kamal** 컨테이너 배포
- **Docker** 지원
- **Thruster** 프로덕션 HTTP 가속

## 사용법

### 1. 템플릿 복제

```bash
git clone https://github.com/joungsik/rails-template.git your-project-name
cd your-project-name
```

### 2. 프로젝트 이름 변경

```bash
bundle install
rails g rename:app_name YourNewAppName
```

### 3. 프로젝트 DB 연결 정보 작성

```bash
echo "POSTGRES_USER=postgres" > .env
echo "POSTGRES_PASSWORD=" >> .env
echo "POSTGRES_HOST=localhost" >> .env
echo "POSTGRES_PORT=5432" >> .env
```

### 4. 개발 서버 실행

```bash
bin/dev
```

## 개발 명령어

```bash
# 개발 서버 (Rails + Tailwind CSS 감시)
bin/dev

# 암호화 설정
EDITOR=vi rails credentials:edit

# 데이터베이스 설정
bin/rails db:create
bin/rails db:migrate

# 테스트 실행
bin/rails test

# 배포 (Kamal)
kamal deploy
```

## CI/CD 및 테스트

### 로컬 CI 환경 설정

이 프로젝트는 [Act](https://github.com/nektos/act)와 pre-commit을 사용하여 로컬에서 GitHub Actions CI를 실행할 수 있습니다.

#### 최초 설정

```bash
# CI 환경 자동 설정 (pre-commit, act 설치)
bin/setup-ci
```

#### CI 테스트 실행

```bash
# 수동 CI 실행 (모든 job: scan_ruby, scan_js, lint, test)
bin/run-ci-tests

# 커밋 시 자동 실행 (pre-commit 훅으로 설정됨)
git add .
git commit -m "commit message"  # 자동으로 CI 실행
```

#### 스크린샷 생성 테스트

```bash
# 의도적으로 실패하는 시스템 테스트 생성
bin/force-test-failure

# CI 실행하여 스크린샷 생성
bin/run-ci-tests

# 결과 확인
ls tmp/screenshots/

# 테스트 정리
rm test/system/screenshot_test.rb
```

### CI 결과 파일

모든 CI 실행 결과는 `tmp/screenshots/` 디렉토리에 저장됩니다:

- `ci_run_YYYYMMDD_HHMMSS.log` - 전체 실행 로그
- `ci_summary_YYYYMMDD_HHMMSS.md` - 실행 결과 요약
- `{job}_YYYYMMDD_HHMMSS.log` - 개별 job 로그
- `*.png` - 시스템 테스트 실패 시 스크린샷

### CI Jobs

- **scan_ruby**: Brakeman 보안 스캔
- **scan_js**: Import map 보안 스캔  
- **lint**: RuboCop 코드 스타일 검사
- **test**: Rails 테스트 + 시스템 테스트

## 시스템 요구사항

- Ruby 3.4.1
- Rails 8.0+
- PostgreSQL
- Docker (CI 실행용)
- Act (로컬 CI용)
