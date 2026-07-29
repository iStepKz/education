type SectionHeaderProps = {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  label,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`mb-12 max-w-3xl lg:mb-16 ${alignment} ${className}`}>
      {label && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-teal">
          {label}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-brand-muted">{description}</p>
      )}
    </div>
  );
}
