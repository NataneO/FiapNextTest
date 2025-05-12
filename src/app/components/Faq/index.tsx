"use client";
import React, { useState } from "react";
import { TextItem } from "@/app/shared/TextItem";
import { FAQItem } from "./types";

export default function Faq() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

 
  const faqData: FAQItem[] = [
    {
      question: "QUANDO POSSO ME MATRICULAR?",
      answer: "Você pode se matricular em qualquer dia e hora, basta acessar a página do curso e se inscrever.",
    },
    {
      question: "POSSO FAZER DOIS OU MAIS CURSOS AO MESMO TEMPO??",
      answer: "Sim. Apenas atente-se às datas, elas devem ser diferentes, porque cada curso tem sua dinâmica.",
    },
    {
      question: "QUAIS OS PRÉ-REQUISITOS?",
      answer: "Cada curso tem seus pré-requisitos descritos na própria página. Identifique-os, para que você obtenha um melhor aproveitamento do seu SHIFT.",
    },
    {
      question: "QUAL A DURAÇÃO DOS CURSOS?",
      answer: "De 6 a 42 horas.",
    },
    {
      question: "PRECISO LEVAR ALGUM MATERIAL PARA AS AULAS?",
      answer: "Não. Os materiais utilizados em sala de aula são fornecidos pela FIAP e as aulas mais técnicas são realizadas em nossos próprios laboratórios. Sugerimos somente que traga o que preferir para suas anotações.",
    },
    {
      question: "VOU RECEBER CERTIFICADO DE CONCLUSÃO DE CURSO?",
      answer: "Sim. Ao cumprir pelo menos 75% da carga horária do curso, você receberá um Certificado Digital, que poderá ser acessado na plataforma.",
    },
  ];

  return (
    <section className={`p-160`}>
      <div className={`mb-105`}>
        <h2 className={`text-medium text-primary heading-xl`}>FAQ</h2>
        <span className={`text-medium text-highlight body-xl`}>Dúvidas Frequentes</span>
      </div>
      <div className={`grid three-columns`}>
        {faqData.map((faqItem, index) => (
          <div className={`h-20 pb-1 w-435`} key={faqItem.question}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}>
            <TextItem
              text={faqItem.question}
              variant="full-border"
              isHovered={hoveredIndex === index}
            />
            {hoveredIndex === index && (
              <div  className={`text-medium text-primary body-lg`}>{faqItem.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
