# WhereCamFrom
## <SW 개요>
감시 카메라의 영상은 범죄 및 사고 사건 조사의 주요 증거 자료로 자주 사용됩니다. 단, 동영상 파일은 원본이어야만 의미가 있습니다.
또한 최근 딥페이크 영상은 가짜뉴스로 만들어져 사회적으로 큰 혼란을 야기하기도 합니다.
‘WhereCamFrom’은 동영상 파일이 감시 카메라(스마트폰, 블랙박스, CCTV 등)로 녹화된 원본인지 아니면 
동영상 편집 도구(Sony Vegas, Windows Movie Maker 등)에 의해 편집되었는지 여부를 빠르고 쉽게 확인하여 블록체인에 저장해줌으로써 영상의 무결성을 검증할 수 있습니다.    
## <SW 구조>
![architecture](https://user-images.githubusercontent.com/59862783/146729436-b9ccb16c-866e-46f2-b887-3e47ab3febae.PNG)

## <사용방법>

#### 로그인
> ![로그인](https://user-images.githubusercontent.com/59862783/146724252-1a34cf1e-1d01-463a-ae26-392136312afb.PNG)
> * Klaytn Wallet 계정의 private key를 입력하여 로그인한다.

### 1. Analysis 

#### 분석 - 비디오 입력
> ![분석전](https://user-images.githubusercontent.com/59862783/146724898-267f8810-3013-4048-87ca-b499721ba20e.PNG)
> * 편집여부 정보를 분석하고자 하는 영상을 입력한다.

#### 분석 결과 (원본)
> ![분석결과](https://user-images.githubusercontent.com/59862783/146725135-e3012846-896f-4e79-bd4e-832b1a13431b.PNG)
> * 원본 영상의 경우, 영상을 촬영한 기기 정보가 출력된다.

#### 분석 결과 (편집본)
> ![분석결과(수정)](https://user-images.githubusercontent.com/59862783/146725263-03ffc6cd-d184-4646-afd1-ad9de94c64d1.PNG)
> * 편집된 영상의 경우, 영상을 편집하는데 쓰인 도구 정보가 출력된다.

#### 분석 결과 저장
> ![분석 저장](https://user-images.githubusercontent.com/59862783/146725637-16f5e4ce-a81c-49a5-af72-9a5929c0aed3.PNG)
> * 영상을 분석하고 해당 영상이 원본이라는 정보를 블록체인에 저장하여, 후에 같은 영상이라면 재분석할 필요 없이 분석 결과를 열람할 수 있다.

#### 분석 결과 검색
> ![분석검색](https://user-images.githubusercontent.com/59862783/146725745-4501c134-a856-48a2-95d6-fafed7ea12f5.PNG)
> * 블록체인에 저장된 영상 파일 정보와 사용자가 입력한 파일이 같다면 이전의 분석결과를 출력한다. 

### 2. Compare 

#### 비교 - 2개의 비디오 입력
> ![비교](https://user-images.githubusercontent.com/59862783/146725812-5513addb-dbd3-4626-bf24-bb3a73b71f83.PNG)
> * 원본 영상에서 편집된 영상인지 확인하고 싶은 영상과 비교할 원본 영상을 입력한다.

#### 비교 - 2개의 비디오 입력
> ![비교](https://user-images.githubusercontent.com/59862783/146725812-5513addb-dbd3-4626-bf24-bb3a73b71f83.PNG)
> * 원본 영상에서 편집된 영상인지 확인하고 싶은 영상과 비교할 원본 영상을 입력한다.

#### 비교 결과 (원본)
> ![비교결과원본](https://user-images.githubusercontent.com/59862783/146726105-b10b75c0-be5c-407d-a8e8-8ea9180b95a9.PNG)
> * 2개의 영상을 1초마다 프레임의 픽셀 rgb값을 비교하고, 조작된 부분이 없다면 원본이라 인정하고 각각의 영상 분석 정보를 출력한다. 

#### 비교 결과 (편집본)
> ![비교결과](https://user-images.githubusercontent.com/59862783/146726888-fc46a0bf-5b1b-4b1a-9512-f95fd5e7d0da.PNG)
> * 2개의 영상을 1초마다 프레임의 픽셀 rgb값을 비교하고, 조작된 부분이 있다면 그 부분의 프레임과 시간을 출력한다.

#### 비교 결과 저장
> ![비교결과저장](https://user-images.githubusercontent.com/59862783/146727223-c56e4652-8873-49a2-92b5-286bf78b92bb.PNG)
> * 2개의 영상을 비교하고 같은 영상이라는 정보를 블록체인에 저장하여, 후에 같은 영상이라면 재분석할 필요 없이 분석 결과를 열람할 수 있다.

#### 비교 결과 검색
> ![비교검색결과](https://user-images.githubusercontent.com/59862783/146727703-9fb12c6c-5b34-47d0-ba89-a4e3b7f24b64.PNG)
> * 블록체인에 저장된 영상 파일 정보와 사용자가 입력한 파일이 같다면 이전의 분석결과를 출력한다. 


