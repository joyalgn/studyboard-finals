
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

// Reusable button component
export default function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "px-4 py-2 rounded-md text-sm font-medium transition-colors";

  const styles =
    variant === "primary"
      ? "bg-pink-200 text-pink-900 hover:bg-pink-300"
      : "bg-pink-50 text-pink-800 border border-pink-200 hover:bg-pink-100";

  return (
    <button
      className={`${base} ${styles} ${className}`}
      {...props}
    />
  );
}
