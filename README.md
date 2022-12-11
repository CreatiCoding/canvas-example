# canvas-example

## 파일

- apis/fetchImages

  - https://picsum.photos/v2/list 를 호출해서 이미지 리스트를 불러온다.

- hooks/useImages.ts

  - fetchImages 를 써서 images를 받아올 수 있는 커스텀 훅

- modles/PicsumImage

  - picsum에서 받아오는 이미지 데이터의 타입

- pages/canvas-example/index.tsx

  - next.js 페이지 예시 컴포넌트

- pages/canvas-example/components/ImageCanvas.tsx

  - Canvas를 띄워서 image를 로드할 수 있는 ImageCanvas 컴포넌트
