"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import style from "./index.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
  const topTextRefs = useRef<Array<HTMLDivElement | null>>([]);
  const bottomTextRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const allRefs = [...topTextRefs.current, ...bottomTextRefs.current];

    allRefs.forEach((el, i) => {
      if (!el) return;
      const direction = i % 2 === 0 ? -50 : 50;

      gsap.to(el, {
        xPercent: direction * 2,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          scrub: true,
          start: "top bottom",
          end: "bottom top",
          onUpdate: self => {
            if (self.progress === 1) {
              gsap.set(el, { xPercent: 0 });
            }
          },
        },
      });
    });
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="text-light text-primary heading-lg mb-12 space-y-2">
        {[
          "CURSOS E IMERSÕES. UMA NOVA CULTURA DE MERCADO.",
          "TECNOLOGIA, INOVAÇÃO E NEGÓCIOS. PRESENTE E FUTURO.",
        ].map((text, i) => (
          <div
            key={i}
            // 2) Callback ref now returns void
            ref={el => {
              topTextRefs.current[i] = el;
            }}
            className="text-slide pb-1 block whitespace-nowrap"
          >
            <span className="inline-block px-8 bb-solid-2 b-primary">{text}</span>
            <span className="inline-block px-8 bb-solid-2 b-primary">{text}</span>
            <span className="inline-block px-8 bb-solid-2 b-primary">{text}</span>
          </div>
        ))}
      </div>

      <div className={`${style.contentBottom} relative`}>
        <div className="flex justify-around">
          <Image
            src="/imgs/intro.png"
            width={1495}
            height={804}
            alt="Image intro"
          />
        </div>

        <div
          className={`
            text-medium text-gray-300 display-lg stroke absolute w-full text-center
            left-0 translate-y-1/2 top-full space-y-2
          `}
        >
          {[
            "SKILLS. CONHECIMENTO.",
            "MUITO, MUITO ALÉM DOS TUTORIAIS!",
          ].map((text, i) => (
            <div
              key={i}
              ref={el => {
                bottomTextRefs.current[i] = el;
              }}
              className={`text-slide block whitespace-nowrap ${
                i === 1 ? "italic" : ""
              }`}
            >
              <span className="inline-block px-8">{text}</span>
              <span className="inline-block px-8">{text}</span>
              <span className="inline-block px-8">{text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={`${style.contentBottom} spacer`}/>
    </section>
  );
};

export default Intro;
