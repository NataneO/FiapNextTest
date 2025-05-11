export interface AnimatedTextItemProps {
  text: string;
  description?: string;
  onClick?: () => void;
  isSelected?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  variant?: "top-border" | "bottom-border" | "none";
  hoverEffect?: "color" | "border";
}