"use client";
import React from "react";
import { AnimatedTextItemProps } from "./types";

export const TextItem = ({
  text,
  onClick,
  isSelected = false,
  onMouseEnter,
  onMouseLeave,
  variant = "top-border",
  hoverEffect = "border",
}: AnimatedTextItemProps) => {
  return (
    <div
      onClick={onClick} 
      style={{ cursor: 'pointer', padding: '1rem', borderTop: variant === "top-border" ? "2px solid black" : undefined }}
      className={`${hoverEffect} ${isSelected ? "selected" : ""}`}
      onMouseEnter ={onMouseEnter}
      onMouseLeave = {onMouseLeave}
    >
      <div>{text}</div>
    </div>
  );
};
