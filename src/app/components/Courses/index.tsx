"use client";
import { useState } from "react";
import { Stack, CourseItems, stackLabels } from "./types";
import style from "./index.module.scss";
import { TextItem } from "@/app/shared/TextItem";

const Courses = () => {
  const [selectedStack, setSelectedStack] = useState<Stack | "">("technology");

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const [hoveredTab, setHoveredTab] = useState<number | null>(null);

  const stacks: Stack[] = ["technology", "innovation", "business"];

  const courses: CourseItems = {
    technology: [
      {
        name: "Big Data Ecosystem",
        deliveryMode: "remoto",
        transmission: ["live"],
      },
      {
        name: "Creating Dashboards for BI",
        deliveryMode: "remoto",
        transmission: ["live"],
      },
      {
        name: "Big Data Science = Machine Learning & Data Mining",
        deliveryMode: "remoto",
        transmission: ["live", "multimidia"],
      },
      { name: "Storytelling", deliveryMode: "remoto", transmission: ["live"] },
    ],
    innovation: [
      { name: "UX", deliveryMode: "", transmission: ["digital"] },
      { name: "UX Writing", deliveryMode: "", transmission: ["live"] },
      {
        name: "Storytelling para Negócios",
        deliveryMode: "",
        transmission: ["live"],
      },
      { name: "Chatbots", deliveryMode: "", transmission: ["live"] },
    ],
    business: [
      { name: "Agile Culture", deliveryMode: "", transmission: ["digital"] },
      {
        name: "DPO Data Protection Officer",
        deliveryMode: "",
        transmission: ["live"],
      },
      { name: "IT Business Partner", deliveryMode: "", transmission: ["live"] },
      {
        name: "Perícia Forense Computacional",
        deliveryMode: "",
        transmission: ["live"],
      },
    ],
  };

  return (
    <section className={`${style.coursesContainer}`}>
      <div className={`${style.coursesHeader} flex w-full justify-between mb-105`}>
        <div className={`${style.coursesHeaderTitle}`} >
          <h3 className={`text-medium text-primary heading-xl`}>Cursos</h3>
          <span className={`text-medium text-highlight body-xl`}>
            Cursos de curta duração
          </span>
        </div>

        <div className={`${style.coursesHeaderTabs} flex w-half justify-around`}
        >
          {stacks.map((stack, index) => (
            <div  onMouseEnter={() => setHoveredTab(index)}
            onMouseLeave={() => setHoveredTab(null)} key={index}>
            <TextItem
              
              text={stackLabels[stack]}
              onClick={() => setSelectedStack(stack)}
              isSelected={selectedStack === stack}
              isHovered={hoveredTab === index}
              variant="half-border"
            />
            </div>
          ))}
        </div>
      </div>

      {selectedStack && (
        <div className={`${style.coursesContent} w-half`}>
          <h1 className={`${style.selectedStack} mb-105 text-medium heading-md`}>
            {stackLabels[selectedStack]}
          </h1>
          <div className={`${style.coursesContentData}`}>
            {courses[selectedStack]?.map((course, index) => 
            (
              <div
                key={index}
                className={`${style.courseItem} ${hoveredIndex === index ? "b-highlight" : "b-primary"} flex pt-18 pb-18 bb-solid g-32`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}>
              
                <span className={`${hoveredIndex === index ? "text-highlight" : "text-primary"} body-lg`}>{course.name}</span>
                <div
                  className={`${style.courseData} ${hoveredIndex === index ? "text-highlight" : "text-primary"}text-medium text-primary body-md uppercase flex align-center`}
                >
                  <span className={`${hoveredIndex === index ? "text-highlight" : "text-primary"}`} >{course.deliveryMode}</span>
                  {course.deliveryMode &&
                    course.transmission.length > 0 &&
                    course.transmission[0] !== "" && (
                      <span className={`${hoveredIndex === index ? "text-highlight" : "text-primary"}`} style={{ margin: "0 8px" }}>•</span>
                    )}
                  <span className={`${hoveredIndex === index ? "text-highlight" : "text-primary"}`}>
                    {course.transmission.filter((t) => t).join(" + ")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Courses;
