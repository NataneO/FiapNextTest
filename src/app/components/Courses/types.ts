export type Stack = "technology" | "innovation" | "business";

export interface Course {
  name: string;
  deliveryMode: "" | "presencial"| "remoto";
  transmission: ("" | "live" | "digital" | "multimidia")[];
}

export type CourseItems = Record<Stack, Course[]>;

export const stackLabels: Record<Stack, string> = {
  technology: "TECNOLOGIA",
  innovation: "INOVAÇÃO",
  business: "NEGÓCIOS",
};
