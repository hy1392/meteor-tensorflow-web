# meteor-tensorflow-web
##### 한국기술교육대학교 능력개발교육원 과제
###### (첨단교육훈련장비 및 교육매체 개발) 인공지능 교육을 위한 웹 기반 공용 시뮬레이터 구축


## 개발 환경 구축
### Chocolatey 설치
- cmd창을 관리자 권한으로 실행 후 다음 명령어를 입력
```sh
- @"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
```

### meteor 설치
- cmd창을 관리자 권한으로 실행 후 다음 명령어를 입력(Chocolatey설치 후 cmd창 재시작 필요)
- choco install meteor

### meteor 프로젝트 생성
- 프로젝트를 생성하고 하는 경로로 이동 후 cmd창 실행(Shift+우클릭 -> Open Powershell Window Here) 뒤 다음 명령어 입력. 이 때 프로젝트명은 자신이 생성하고자 하는 프로젝트의 이름
- meteor create <프로젝트명>
- github에서 pull받은 client, public, server 폴더를 <프로젝트명> 프로젝트 안으로 복사 덮어쓰기


### meteor 패키지 설치
- <프로젝트명> 프로젝트 안에서 cmd창 실행 후 아래 명령어를 입력하여 의존 패키지 설치
#### 부트스트랩 4 패키지
- meteor add alexwine:bootstrap-4
#### flow-router 패키지
- meteor add kadira:flow-router
#### blaze-layout 패키지
- meteor add kadira:blaze-layout
#### 계정관리 패키지
- meteor add accounts-password
#### 팝업 패키지
- meteor add themeteorchef:bert
#### 암호화 패키지
- meteor npm install --save bcrypt

### meteor 실행 및 확인
- <프로젝트명> 프로젝트 안에서 cmd창 실행 후 아래 명령어를 입력
- meteor
- 잠시 기다린 뒤 실행이 성공적으로 완료되면 크롬에서 localhost:3000 로 이동하여 결과 확인

## 디렉터리 및 파일 구조
### 디렉터리 구조
| 디렉터리명 | 구성요소 |
| ------ | ------ |
| client | 사용자 환경에서 사용되는 디렉터리( 사용자에게 보여지는 html파일, css파일 및 이를 제공하기 위해 사용되는 js파일 ) |
| public | 사용자 및 서버 환경에서 공통적으로 사용되는 디렉터리( 이미지, 폰트 등 ) |
| server | 서버 환경에서 사용되는 디렉터리 |
