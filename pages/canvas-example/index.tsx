import { useState } from "react";
import { ImageCanvas } from "./components/ImageCanvas";
import { useImages } from "./hooks/useImages";

export default function CanvasExamplePage() {
  const [images] = useImages();
  const [index, setIndex] = useState<number>(0);

  // 마우스 이벤트에 따라 setIndex로 이미지를 선택할 수 있습니다.
  // setIndex(보고싶은 이미지 배열의 index);

  return (
    <div>
      {images[index] == null ? (
        <>로딩중</>
      ) : (
        <ImageCanvas image={images[index]} />
      )}
    </div>
  );
}
