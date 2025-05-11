"use client";
import { useState } from "react";
import { Stack, CourseItems, stackLabels } from "./types";
import { TextItem } from "@/app/shared/TextItem";

const Courses = () => {
  const [selectedStack, setSelectedStack] = useState<Stack | "">("");

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
    <section>
      <div>
        <h3>Cursos</h3>
        <span>Cursos de curta duração</span>
      </div>

      <div>
        {stacks.map((stack) => (
          <TextItem
            key={stack}
            text={stackLabels[stack]}
            onClick={() => setSelectedStack(stack)}
            isSelected={selectedStack === stack}
            variant="top-border"
            hoverEffect="border"
          />
        ))}
      </div>

      {selectedStack && (
        <div>
          <h1>{stackLabels[selectedStack]}</h1>
          <div>
            {courses[selectedStack]?.map((course) => (
              <div key={course.name}>
                <TextItem
                  text={course.name}
                  variant="bottom-border"
                  hoverEffect="color"
                />
                <div>
                  <span>{course.deliveryMode}</span>
                  {course.deliveryMode &&
                    course.transmission.length > 0 &&
                    course.transmission[0] !== "" && (
                      <span style={{ margin: "0 8px" }}>•</span>
                    )}
                  <span>
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
