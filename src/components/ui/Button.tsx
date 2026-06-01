type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {

  const baseStyles =
    "rounded-full px-8 py-4 text-sm font-medium transition-all duration-300";

  const variants = {
    primary:
      "bg-green-600 hover:bg-green-500 text-white",

    secondary:
      "border border-zinc-700 bg-white/5 hover:bg-white/10 hover:border-zinc-500 text-white",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </button>
  );
}