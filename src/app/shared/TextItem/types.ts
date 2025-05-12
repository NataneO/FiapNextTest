export interface AnimatedTextItemProps {
  text: string;
  description?: string;
  onClick?: () => void;
  isSelected?: boolean;
  isHovered?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  variant?: "half-border" | "full-border";
}