# storybook
storybook 디자인시스템


-----


# 설치
## Storybook은 고유 커맨드를 가지고 있어 라이브러리를 설치하는 것만으로는 프로젝트에 적용되지 않는다.   
```
$ yarn global add @storybook/cli
```

## 설치가 되었나 버전을 확인  
```
$ getstorybook -V
```

## 설치 실행
```
$ getstorybook init
```
현재 설치된 라이브러리(리액트, 뷰, 스벨트 등)을 환경을 확인하여 설치  
라이브러리 종속 없이 `순수 HTML 환경에 설치하려면 수동선택 질문에서 'y' 입력`  
```
Do you want to manually choose a Storybook project type to install? (y/N)
```

## 스토리북 실행
```
$ yarn storybook
```
http://localhost:6006/  
