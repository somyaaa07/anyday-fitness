import { Clock, BarChart3, User, ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";
import Button from "../components/Button";
import { programs } from "../data/programs";
import CTASection from "../components/CTASection";
import FacilitiesSection from "../components/FacilitiesSection";

export default function Programs() {
  return (
    <>
      <PageHero
        eyebrow="Training Programs & Services"
        title="Train With"
        highlight="Purpose"
        description="Whether your goal is building strength, gaining muscle, improving mobility, or enhancing overall performance, our expert-led programs and premium in-house services are designed to meet you where you are and push you toward where you want to be."
        image="/programsbanner1.png"
        primaryBtnText="Start Your Journey"
        primaryBtnLink="/contact"
        secondaryBtnText="Discover Our Story"
        secondaryBtnLink="/about"
      />



      <section className="py-16 sm:py-24">
        <div className="container-x flex flex-col gap-16 sm:gap-24">
          {programs.map((program, i) => {
            const Icon = program.icon;
            const reversed = i % 2 !== 0;

            return (
              <div
                key={program.id}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  reversed ? "lg:[&>*:first-child]:order-1" : ""
                }`}
              >
                {/* Image */}
                <div className="relative group order-2">
             
                  <div className="relative  overflow-hidden border border-white/10 h-[320px] sm:h-[420px]">
                    <img
                      src={program.image}
                      alt={program.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-5 relative order-1">
                       <span className="absolute -top-6 -right-2 sm:-top-8 sm:-right-4 font-teko font-black text-[100px] sm:text-[140px] leading-none text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.08)] select-none pointer-events-none z-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/15 border border-primary/50 text-primary">
                    <Icon size={22} strokeWidth={1.75} />
                  </div>

                  <h3 className="font-teko text-4xl sm:text-5xl font-semibold text-heading uppercase leading-[0.95]">
                    {program.title}
                  </h3>

                  <p className="font-inter text-body leading-relaxed max-w-lg">
                    {program.longDescription}
                  </p>

                  <div className="flex flex-wrap items-center gap-x-6 gap-y-3 py-5 border-y border-white/10">
                    <span className="flex items-center gap-2 text-xs font-rajdhani font-bold uppercase tracking-wide text-muted">
                      <Clock size={15} className="text-primary shrink-0" />
                      {program.duration}
                    </span>
                    <span className="flex items-center gap-2 text-xs font-rajdhani font-bold uppercase tracking-wide text-muted">
                      <BarChart3 size={15} className="text-primary shrink-0" />
                      {program.difficulty}
                    </span>
                    <span className="flex items-center gap-2 text-xs font-rajdhani font-bold uppercase tracking-wide text-muted">
                      <User size={15} className="text-primary shrink-0" />
                      {program.trainer}
                    </span>
                  </div>

                  <Button as="a" href="/contact" className="w-fit !py-3 text-sm group/btn">
                    Book A Session
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover/btn:translate-x-1"
                    />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
            <FacilitiesSection />

      <CTASection />
    </>
  );
}