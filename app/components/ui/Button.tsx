import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-blue text-white shadow-lg shadow-brand-blue/20 hover:bg-[#0066dd] hover:shadow-xl hover:shadow-brand-blue/30 hover:-translate-y-0.5",
  secondary:
    "bg-brand-teal text-white shadow-lg shadow-brand-teal/20 hover:bg-[#009a93] hover:shadow-xl hover:shadow-brand-teal/30 hover:-translate-y-0.5",
  outline:
    "border border-slate-200 bg-white text-brand-navy shadow-sm hover:border-brand-blue/30 hover:bg-brand-blue-light/50 hover:-translate-y-0.5",
  ghost:
    "text-brand-navy hover:bg-slate-100",
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ease-out";

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
