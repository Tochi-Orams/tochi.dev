"use client";

import { FC, useEffect, useState } from "react";
import { bgImages } from "./preload";
import useImagePreloader from "@/app/Hooks/UseImagePreloader";

interface props {
  limit: number;
}

const Background: FC<props> = ({ limit }) => {
  const [progress, setProgress] = useState(1);

  const { pageLoaded } = useImagePreloader(bgImages);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    const scrollFraction = window.scrollY / limit;
    const index = Math.min(190, Math.ceil(scrollFraction * 190));

    setProgress(index > 0 ? index : 1);
  };

  return (
    <div
      className={`w-full h-full duration-500 pointer-events-none ${
        progress > 40 ? "opacity-50" : "opacity-100"
      }`}
    >
      {pageLoaded && (
        <div>
          {bgImages.map((image, i) => (
            <img
              key={i}
              src={image.src}
              alt="bg"
              className={`absolute top-0 left-0 object-cover w-full h-full ${
                progress - 1 === i ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Background;
