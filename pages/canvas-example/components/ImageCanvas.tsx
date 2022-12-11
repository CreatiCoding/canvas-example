import { useEffect, useRef } from "react";
import { PicsumImage } from "../../../models/PicsumImage";

interface ImageCanvasProps {
  image?: PicsumImage;
}

const CANVAS_WIDTH = 640;
const CANVAS_HEIGHT = 480;
const IMAGE_WIDTH = 640;
const IMAGE_HEIGHT = 480;

export function ImageCanvas({ image }: ImageCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const el = canvasRef?.current;

  useEffect(() => {
    if (el == null) {
      return;
    }
    const context = el.getContext("2d");

    if (context == null) {
      return;
    }

    if (image == null || image.download_url == null) {
      return;
    }

    // 이미지 엘리먼트 가상 객체 생성
    const img = new Image();

    // src로 이미지 주소 추가
    img.src = image.download_url;

    // 이미지가 로드되었을 때, canvas에 그려주기
    img.onload = () => {
      // context.drawImage(이미지 객체, X 위치, Y 위치, 이미지 너비, 이미지 높이);
      context.drawImage(img, 0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);
    };
  }, [el, image]);

  return <canvas ref={canvasRef} width={CANVAS_WIDTH} height={CANVAS_HEIGHT} />;
}
