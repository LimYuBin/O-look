# 프로젝트 개요
유저의 나이, 성별, 키, 몸무게, 선호스타일, 선호컬러, 선호브랜드, 선호가격대를 바탕으로 패션 아이템을 추천해주는 서비스입니다.

## <문제상황>
많은 패션 아이템 속에서 취향과 신체조건에 맞는 아이템을 찾아 구매하기까지 많은 시간이 소요됩니다.   
또는 유행하는 옷을 입고싶은데 인기 아이템이 무엇인지 모르는 경우가 있습니다.

## <가정>
1. 내 취향에 맞고 나에게 어울리지만 내가 지금까지 안 입었던 옷을 구매하고 싶은 경우
2. 내가 과거에 구매했던 옷과 비슷한 옷을 구매하고 싶은 경우

--------------
# 프로젝트 구조
## <데이터셋 구축>
온라인 패션 플랫폼 데이터 사용
* 데이터셋 구축 과정  
    - 시작 
    - 데이터 파이프라인 설계 
    - 통합 
    - 데이터 저장 방법
    - DB 설계 
* EDA 
    - EDA 
* ERD  
![ERD](./img/ERD.PNG)


## <사용 알고리즘>
1. Collaborative Filtering 
    - 내 취향에 맞고 나에게 어울리지만 내가 지금까지 안 입었던 옷을 구매하고 싶은 경우에 적합합니다.
    - 유저 사이의 유사성을 바탕으로 나와 비슷한 유저들이 상호작용한 아이템을 추천합니다.

2. Content Based  
    - 내가 과거에 진짜 고심해서 골라 구매했던 옷과 비슷한 옷을 구매하고 싶은 경우에 적합합니다.
    - 아이템 사이의 유사성을 바탕으로 제품 정보 사이의 유사도가 높은 제품을 추천합니다.

3. Hybird
    - Collaborative Filtering + Content Based

4. 추천 정확도를 높이기 위해 사용한 방법
    - 분류분석 
    - NLP 

5. 알고리즘 평가 방법
    - recall@5, recall@10
    - 관련 문서 

6. 추천시스템 관련 조사 & 스터디  
    - CF 조사 
    - CB, Hybrid 조사
    - 추천시스템 코드 스터디 

## <웹 개발>
UI 설계  

프로토타입  



----------
# 개발 스택 및 프레임워크
![Stack](./img/Stack.png)

------------
# 웹페이지 링크
http://project-olook.herokuapp.com/





