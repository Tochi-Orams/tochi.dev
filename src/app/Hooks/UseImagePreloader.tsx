import { useEffect } from "react";
import { usePageLoadedContext } from "../Context/PageLoadContext";
import { useLoadProgressContext } from "../Context/LoadProgressContext";
import { StaticImageData } from "next/image";

const useImagePreloader = (imageList: StaticImageData[]) => {
  const { setLoadProgress } = useLoadProgressContext();
  const { pageLoaded, setPageLoaded } = usePageLoadedContext();

  const preloadImage = (src: StaticImageData) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        resolve(img);
      };
      img.onerror = img.onabort = () => {
        reject(src);
      };
      img.src = src.src;
    });
  };

  useEffect(() => {
    async function effect() {
      if (pageLoaded) {
        setLoadProgress(190);
        return;
      }

      const imagesPromiseList: Promise<any>[] = [];
      for (let i = 0; i < imageList.length; i++) {
        if (i % 10 === 0) {
          setLoadProgress(i);
        }
        imagesPromiseList.push(preloadImage(imageList[i]));
      }

      await Promise.all(imagesPromiseList);

      if (pageLoaded) {
        return;
      }

      setPageLoaded(true);
    }

    effect();

    return () => {
      setPageLoaded(true);
    };
  }, [imageList, pageLoaded]);

  return { pageLoaded };
};

export default useImagePreloader;
