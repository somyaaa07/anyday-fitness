import { useState, useEffect, useRef } from "react";
import { CheckCircle2, Dumbbell } from "lucide-react";

const features = [
  "Matrix USA & Thor USA equipment across 45+ stations",
  "Certified trainers with personalized attention",
  "Steam, sauna, ice bath & 4D massage recovery zone",
  "In-house cafe, lounge and on-site physiotherapy",
];

const stats = [
  { number: "18,000+", label: "Sq.Ft. Area" },
  { number: "45+", label: "Workout Stations" },
  { number: "12+", label: "Premium Amenities" },
  { number: "Upto 50%", label: "Launch Offer" },
];

const marqueeWords = ["STRENGTH", "DISCIPLINE", "ANYDAY", "ANYTIME", "NO LIMITS"];

export default function About() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative bg-surface2 overflow-hidden pt-20 sm:pt-32">
      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .marquee-track { animation: marquee 22s linear infinite; }
        @media (prefers-reduced-motion: reduce) { .marquee-track { animation: none; } }
      `}</style>

      {/* Giant watermark numeral — signature element */}
      {/* <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute -top-10 sm:-top-20 right-0 sm:right-10 font-teko font-black text-[240px] sm:text-[400px] leading-none text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.06)]"
      >
        10
      </span> */}

      <div className="container-x relative">
        {/* Header row — asymmetric, editorial */}
        <div
          className={`grid lg:grid-cols-[1.3fr_1fr] gap-8 lg:gap-16 items-end mb-14 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-primary" />
              <span className="eyebrow">About Anyday Fitness</span>
            </div>
            <h2 className="font-teko text-6xl sm:text-7xl lg:text-8xl font-semibold uppercase text-heading leading-[0.88]">
              Built For Those <br />
              Who <span className="text-primary">Never Settle</span>
            </h2>
          </div>

          <p className="font-inter text-body max-w-md lg:pb-2">
            Anyday Fitness isn't just a gym — it's a community built around
            discipline, strength, and consistency. Every corner of our
            facility is designed to help you become the strongest version of
            yourself, anyday, anytime.
          </p>
        </div>

        {/* Image + feature panel */}
        <div
          className={`grid lg:grid-cols-[1.1fr_0.9fr] gap-0 lg:gap-0 rounded-2xl overflow-hidden border border-white/10 transition-all duration-700 delay-150 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Image with diagonal clip on the inner edge */}
          <div className="relative h-[320px] sm:h-[420px] lg:h-auto">
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop"
              alt="Anyday Fitness gym floor"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-surface" />
          </div>

          {/* Feature panel */}
          <div className="bg-surface p-8 sm:p-10 flex flex-col justify-center gap-6">
            <h3 className="font-teko text-2xl sm:text-3xl font-semibold uppercase text-heading">
              Why Members Stay
            </h3>
            <ul className="flex flex-col gap-4">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" />
                  <span className="font-inter text-sm sm:text-base text-body">{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="/membership"
              className="group inline-flex w-fit items-center gap-2 bg-primary hover:opacity-90 text-black font-rajdhani font-bold uppercase text-sm tracking-wide px-7 py-4 rounded-sm transition mt-2"
            >
              Join The Movement
              <Dumbbell size={16} className="transition-transform group-hover:rotate-12" />
            </a>
          </div>
        </div>
      </div>

      {/* Full-bleed marquee strip — scoreboard signature, echoes Hero */}
      <div
        className={`relative mt-16 sm:mt-24 border-y border-white/10 bg-primary overflow-hidden transition-opacity duration-700 delay-300 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex whitespace-nowrap py-4 marquee-track w-max">
          {[...marqueeWords, ...marqueeWords, ...marqueeWords].map((w, i) => (
            <span
              key={i}
              className="flex items-center font-teko text-2xl sm:text-3xl font-bold uppercase text-black tracking-wide px-6"
            >
              {w}
              <Dumbbell size={18} className="ml-6 text-black/60" />
            </span>
          ))}
        </div>
      </div>

      {/* Stats scoreboard row */}
      {/* <div
        className={`container-x transition-all duration-700 delay-500 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="grid grid-cols-2 sm:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`py-8 px-2 sm:px-6 ${i !== 0 ? "sm:border-l border-white/10" : ""}`}
            >
              <div className="font-teko text-4xl sm:text-5xl font-bold text-heading tabular-nums">
                {s.number}
              </div>
              <div className="font-rajdhani text-[11px] uppercase tracking-[0.15em] text-muted mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
}