import { Dumbbell, Award, UserCheck, Clock, Apple, Users } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ReasonRow from "./ReasonRow";
import StatCard from "./StatCard";

const reasons = [
  {
    icon: Dumbbell,
    title: "Premium Equipment",
    description: "Top-tier machines and free weights, maintained to hotel-grade standards.",
    accent: "primary",
  },
  {
    icon: Award,
    title: "Certified Trainers",
    description: "Every coach is certified, experienced, and invested in your progress.",
    accent: "secondary",
  },
  {
    icon: UserCheck,
    title: "Personalized Training",
    description: "Programs built around your goals, schedule, and starting point.",
    accent: "primary",
  },
  {
    icon: Clock,
    title: "24/7 Access",
    description: "Train on your schedule. Doors never close, anyday or anytime.",
    accent: "secondary",
  },
  {
    icon: Apple,
    title: "Nutrition Guidance",
    description: "Science-backed nutrition coaching to complement every workout.",
    accent: "primary",
  },
  {
    icon: Users,
    title: "Community",
    description: "A driven, welcoming member base that pushes you to show up.",
    accent: "secondary",
  },
];

export default function WhyChooseUs() {
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
                {...r}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}