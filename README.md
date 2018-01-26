# meteor-tensorflow-web
##### 한국기술교육대학교 능력개발교육원 과제
###### (첨단교육훈련장비 및 교육매체 개발) 인공지능 교육을 위한 웹 기반 공용 시뮬레이터 구축


## 개발 환경 구축
### Chocolatey 설치
- cmd창을 관리자 권한으로 실행 후 다음 명령어를 입력
```sh
@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
```

### meteor 설치
- cmd창을 관리자 권한으로 실행 후 다음 명령어를 입력(Chocolatey설치 후 cmd창 재시작 필요)
```sh
choco install meteor
```

### meteor 프로젝트 생성
- 프로젝트를 생성하고 하는 경로로 이동 후 cmd창 실행(Shift+우클릭 -> Open Powershell Window Here) 뒤 다음 명령어 입력. 이 때 프로젝트명은 자신이 생성하고자 하는 프로젝트의 이름
```sh
meteor create <프로젝트명>
```
- github에서 pull받은 client, public, server 폴더를 <프로젝트명> 프로젝트 안으로 복사 덮어쓰기


### meteor 패키지 설치
- <프로젝트명> 프로젝트 안에서 cmd창 실행 후 아래 명령어를 입력하여 의존 패키지 설치
#### 부트스트랩 4 패키지
```sh
meteor add alexwine:bootstrap-4
```
#### flow-router 패키지
```sh
meteor add kadira:flow-router
```
#### blaze-layout 패키지
```sh
meteor add kadira:blaze-layout
```
#### 계정관리 패키지
```sh
meteor add accounts-password
```
#### 팝업 패키지
```sh
meteor add themeteorchef:bert
```
#### 암호화 패키지
```sh
meteor npm install --save bcrypt
```

### meteor 실행 및 확인
- <프로젝트명> 프로젝트 안에서 cmd창 실행 후 아래 명령어를 입력
```sh
meteor
```
- 잠시 기다린 뒤 실행이 성공적으로 완료되면 크롬에서 localhost:3000 로 이동하여 결과 확인

## 디렉터리 및 파일 구조
### 전체 디렉터리 구조
| 디렉터리 | 구성요소 |
| ------ | ------ |
| client | 사용자 환경에서 사용되는 디렉터리(사용자에게 보여지는 html파일, css파일 및 이를 제공하기 위해 사용되는 js파일) |
| public | 사용자 및 서버 환경에서 공통적으로 사용되는 디렉터리(이미지, 폰트 등) |
| server | 서버 환경에서 사용되는 디렉터리 |

### 상세 디렉터리 구조
| client | 구성요소 |
| ------ | ------ |
| components | 사용자에게 보여지는 html template 파일의 디렉터리 |
| lib | 사용자에게 제공되는 js 파일 디렉터리(이벤트 처리, 로그인, 라우팅 등) |
| styles | 사용자에게 제공되는 html template파일의 스타일 파일 디렉터리 |

| public | 구성요소 |
| ------ | ------ |
| images | 프로젝트 내에서 사용되는 이미지 파일들의 디렉터리 |
| resources | 프로젝트 내에서 사용되는 리소스들의 디렉터리(폰트) |

| server | 구성요소 |
| ------ | ------ |

### 상세 디렉터리 구조
| client - components | 구성요소 |
| ------ | ------ |
| account | 사용자 계정 관련 페이지(로그인, 회원가입, 아이디 찾기, 비밀번호 찾기) |
| learningPage | 학습 관련 페이지(강좌 리스트, 학습하기) |
| myPage | 내 정보 관련 페이지(학습현황, 강좌 관리, 개인정보 수정, 비밀번호 수정, 내 강좌) |
| sampleCodePage | 코드 관련 페이지(코드테스트 페이지) |
| 기타 파일 | blaze-layout 기본 구조 파일 및 index 페이지 파일 |

### 파일별 페이지 구성 내용
| client - components - account | 구성요소 |
| ------ | ------ |
| findId.html | 아이디 찾기 페이지 |
| findPW.html | 비밀번호 찾기 페이지 |
| login.html | 로그인 페이지 |
| register.html | 회원가입 페이지 |

| client - components - learningPage | 구성요소 |
| ------ | ------ |
| classList.html | 강좌 리스트 페이지 |
| learning.html | 학습진행 페이지 |

| client - components - myPage | 구성요소 |
| ------ | ------ |
| learningStatus.html | 학습현황 페이지 |
| modifyMyInfo.html | 개인정보수정 페이지 |
| modifyPW.html | 비밀번호변경 페이지 |

| client - components - sampleCodePage | 구성요소 |
| ------ | ------ |
| codeTest.html | 코드 테스트 페이지 |

| client - components - 기타 파일 | 구성요소 |
| ------ | ------ |
| applicationLayout.html | blaze-layout의 root 페이지(모든 html template는 이 파일 안에 배치된다.) |
| mainContent.html | index 페이지 |
| mainFooter.html | 페이지 공통 footer 페이지 |
| mainTopBar.html | 페이지 공통 navigation bar 페이지 |

| lib | 구성요소 |
| ------ | ------ |
| account.js | 로그인 및 회원가입 기능 js파일 |
| routes.js | 페이지 네비게이션 기능 js파일 |
