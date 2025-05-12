"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const totalFrames = 192;

export default function Transition() {
  const imgRef = useRef<HTMLImageElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    const images: HTMLImageElement[] = [];
    for (let i = 0; i < totalFrames; i++) {
      const frameNumber = String(i).padStart(3, "0");
      const img = new Image();
      img.src = `/imgs/water/water_${frameNumber}.jpg`;
      images.push(img);
    }
    imagesRef.current = images;
  }, []);

  useEffect(() => {
    const obj = { frame: 0 };

    gsap.to(obj, {
      frame: totalFrames - 1,
      ease: "none",
      scrollTrigger: {
        trigger: ".animation-wrapper", 
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        pin: true,
        onUpdate: () => {
          const index = Math.floor(obj.frame);
          const currentImage = imagesRef.current[index];
          if (imgRef.current && currentImage?.src) {
            imgRef.current.src = currentImage.src;
          }
        },
      },
    });
  }, []);

  return (
    <div className="animation-wrapper" style={{ position: "relative" }}>
    
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "auto",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <img
          ref={imgRef}
          src="/imgs/water/water_000.jpg"
          alt="wave animation"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
}
