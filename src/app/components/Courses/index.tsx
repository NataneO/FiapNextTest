"use client";
import { useState } from "react";
import { Stack, CourseItems, stackLabels } from "./types";
import { TextItem } from "@/app/shared/TextItem";

const Courses = () => {
  const [selectedStack, setSelectedStack] = useState<Stack | "">("technology");

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
    <section className={`p-160`}>
      <div className={`flex w-full justify-between mb-105`}>
        <div>
          <h3 className={`text-medium text-primary heading-xl`}>Cursos</h3>
          <span className={`text-medium text-highlight body-xl`}>
            Cursos de curta duração
          </span>
        </div>

        <div className={`flex w-half justify-around`}>
          {stacks.map((stack) => (
            <TextItem
              key={stack}
              text={stackLabels[stack]}
              onClick={() => setSelectedStack(stack)}
              isSelected={selectedStack === stack}
              variant="half-border"
            />
          ))}
        </div>
      </div>

      {selectedStack && (
        <div className="w-half">
          <h1 className={`mb-105 text-medium heading-md`}>
            {stackLabels[selectedStack]}
          </h1>
          <div>
            {courses[selectedStack]?.map((course, index) => (
              <div
                key={course.name}
                className={`${hoveredIndex === index ? "b-highlight" : "b-primary"} flex pt-18 pb-18 bb-solid g-32`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}>
              
                <span className={`${hoveredIndex === index ? "text-highlight" : "text-primary"} body-lg`}>{course.name}</span>
                <div
                  className={`${hoveredIndex === index ? "text-highlight" : "text-primary"}text-medium text-primary body-md uppercase flex align-center`}
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
