"use client";

import { useEffect, useState } from "react";
import { Dumbbell, Award, Snowflake, Building2, HeartPulse, Coffee } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ReasonRow from "./ReasonRow";
import StatCard from "./StatCard";

const reasons = [
  {
    icon: Building2,
    title: "18,000+ Sq.Ft. Facility",
    description: "One of the most spacious, luxurious gym floors in Greater Noida West.",
    accent: "primary",
  },
  {
    icon: Award,
    title: "Certified Trainers",
    description: "Every coach is certified, experienced, and invested in your progress.",
    accent: "secondary",
  },
  {
    icon: Dumbbell,
    title: "Matrix & Thor USA Equipment",
    description: "45+ workout stations built on premium Matrix and Thor USA gear.",
    accent: "primary",
  },
  {
    icon: Snowflake,
    title: "Steam, Sauna & Ice Bath",
    description: "A full recovery suite to help you train harder and recover faster.",
    accent: "secondary",
  },
  {
    icon: HeartPulse,
    title: "4D Massage & Physiotherapy",
    description: "On-site massage chairs and physiotherapy for injury care and relief.",
    accent: "primary",
  },
  {
    icon: Coffee,
    title: "In-House Cafe & Lounge",
    description: "Refuel and unwind in our dedicated cafe and lounge area.",
    accent: "secondary",
  },
];

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reasons.length);
    }, 2500); // change speed here (ms)

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-20 sm:py-28 bg-surface2/80 overflow-hidden">
      {/* <div className="absolute top-0 right-0 w-[420px] h-[420px] rounded-full bg-primary/10 blur-3xl pointer-events-none" /> */}

      <div className="container-x">
        <SectionHeading
          eyebrow="Why Anyday Fitness"
          title="Why Choose"
          highlight="Us"
          align="left"
          className="mb-14"
        />

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-start">
          {/* Image panel */}
          <div className="relative lg:sticky lg:top-28">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 h-72 sm:h-96 lg:h-[720px]">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000&auto=format&fit=crop"
                alt="Member training at Anyday Fitness"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
            </div>
          </div>

          {/* Reasons list */}
          <div className="flex flex-col">
            {reasons.map((r, i) => (
              <ReasonRow
                key={r.title}
                number={String(i + 1).padStart(2, "0")}
                isActive={i === activeIndex}
                {...r}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}