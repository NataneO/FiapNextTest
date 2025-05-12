"use client";
import React from "react";
import { AnimatedTextItemProps } from "./types";

export const TextItem = ({
  text,
  onClick,
  isSelected = false,
  isHovered = false,
  variant = "half-border",
}: AnimatedTextItemProps) => {
  const borderClass = variant === "full-border" ? "full-border-t" : "half-border-t";

  return (
    <div
      onClick={onClick}
      style={{ cursor: "pointer" }}
      className={`${borderClass} ${isSelected ? "active" : ""} ${isHovered ? "is-hovered" : ""} mb-14`}
    >
      <div className={`text-medium body-xl ${(isHovered || isSelected) ? "text-primary" : "text-gray-400"}`}>
        {text}
      </div>
    </div>
  );
};
