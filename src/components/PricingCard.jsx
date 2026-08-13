import { Check } from "lucide-react";

export default function PricingCard({ plan }) {
  const { name, price, period, popular, features } = plan;

  return (
    <div
      className={`relative flex flex-col rounded-lg p-8 transition-all duration-300 ${
        popular
          ? "bg-surface border-2 border-primary shadow-glow lg:scale-105 z-10"
          : "bg-surface border border-secondary/40 hover:border-secondary"
      }`}
    >
      {popular && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-black font-rajdhani font-bold text-xs uppercase tracking-widest px-4 py-1 rounded-full">
          Most Popular
        </span>
      )}

      <h3
        className={`font-teko text-3xl font-semibold uppercase leading-none ${
          popular ? "text-primary" : "text-heading"
        }`}
      >
        {name}
      </h3>

      <div className="flex items-end gap-1 mt-4 mb-6">
        <span className="font-teko text-5xl font-bold text-offwhite leading-none">
          {price}
        </span>
        <span className="font-rajdhani text-muted text-sm mb-1">{period}</span>
      </div>

      <ul className="flex flex-col gap-3 mb-8 flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2.5 text-sm text-body font-inter">
            <Check size={16} className="text-primary shrink-0" />
            {f}
          </li>
        ))}
      </ul>

      <button
        className={`font-rajdhani font-bold uppercase tracking-wide py-3 rounded-md transition-all duration-300 ${
          popular
            ? "bg-primary text-black hover:bg-primaryDark hover:shadow-glow"
            : "bg-transparent border border-secondary/60 text-offwhite hover:border-primary hover:text-primary"
        }`}
      >
        Choose Plan
      </button>
    </div>
  );
}
