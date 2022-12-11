import { useEffect, useState } from "react";
import { fetchImages } from "../apis/fetchImages";

export function useImages() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    (async () => {
      const images = await fetchImages();

      setImages(images);
    })();
  }, []);

  return [images] as const;
}
