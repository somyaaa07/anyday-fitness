import { Target, Eye, Building2, ArrowUpRight } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import StatCard from "../components/StatCard";
import CTASection from "../components/CTASection";

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "To empower every member with the tools, coaching and community needed to become their strongest self.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    desc: "To redefine what a premium fitness experience looks like, anyday and anytime.",
  },
  {
    icon: Building2,
    title: "Why Anyday",
    desc: "24/7 access, elite trainers, and a facility engineered for real, sustainable results.",
  },
];

const facilities = [
  {
    title: "Strength Zone",
    desc: "Full range of free weights, racks and plate-loaded machines for serious lifters.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Cardio Deck",
    desc: "Premium cardio equipment with skyline views and immersive sound systems.",
    image:
      "https://images.unsplash.com/photo-1591291621164-2c6367723315?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Recovery Lounge",
    desc: "Stretching zones, foam rolling stations, and recovery amenities.",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="More Than"
        highlight="Just Fitness"
        description="At Anyday Fitness, we believe fitness is not a destination—it's a lifestyle. We've created a premium training environment where commitment meets community, and every workout brings you one step closer to becoming your strongest self."
        image="/About2.png"
        primaryBtnText="Start Your Journey"
        primaryBtnLink="/contact"
        secondaryBtnText="Discover Our Story"
        secondaryBtnLink="/about"
      />

      {/* Brand story */}
 <section className="py-16 sm:py-24 overflow-hidden">
  <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
    <div className="flex flex-col gap-6">
      <span className="eyebrow">Our Philosophy</span>

      <h2 className="section-heading">
        Fitness Is A <span className="text-primary">Lifestyle</span>, Not A Phase
      </h2>

      <p className="font-inter text-body">
        Anyday Fitness was founded on a simple belief: world-class training
        shouldn't be reserved for a select few. We built a space that
        combines luxury hospitality with serious athletic performance —
        premium equipment, certified coaches, and a community that pushes
        you further than you'd go alone.
      </p>
      <p className="font-inter text-body">
        Every detail, from our lighting to our recovery lounge, is designed
        to remove friction between you and your goals. Whether you're
        chasing your first pull-up or your tenth competition, you belong
        here.
      </p>

      {/* Inline stat row — replaces the floating badge that crowded the image */}
      <div className="flex items-center gap-8 mt-2 pt-6 border-t border-white/10">
        <div>
          <div className="font-teko text-4xl font-bold text-heading leading-none">10+</div>
          <div className="font-rajdhani text-xs uppercase tracking-wide text-muted mt-1">
            Years Running
          </div>
        </div>
        <div className="w-px h-10 bg-white/10" />
        <div>
          <div className="font-teko text-4xl font-bold text-heading leading-none">2015</div>
          <div className="font-rajdhani text-xs uppercase tracking-wide text-muted mt-1">
            Founded In
          </div>
        </div>
      </div>
    </div>

    <div className="relative">
      <img
        src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1000&auto=format&fit=crop"
        alt="Trainer coaching a member"
        className="w-full h-[420px] object-cover border border-white/10"
      />

      {/* Single floating quote card — clean, no clipping/overlap issues */}
      <div className="absolute -bottom-8 left-3 right-3 xs:right-auto xs:-left-4 sm:-left-8 max-w-[260px] rounded-xl border border-white/10 bg-surface p-5 shadow-2xl">
        <p className="font-teko text-lg text-heading leading-snug">
          "We built the space we always wished existed."
        </p>
        <p className="font-rajdhani text-xs uppercase tracking-wide text-primary mt-2">
          — Founder, Anyday Fitness
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Mission / Vision / Why — unified panel, not scattered cards */}
      <section className="py-16 sm:py-24 bg-surface2">
        <div className="container-x">
          <div className="grid sm:grid-cols-3 rounded-2xl border border-white/10 overflow-hidden">
            {pillars.map((item, i) => (
              <div
                key={item.title}
                className={`relative p-8 sm:p-10 flex flex-col gap-4 ${
                  i !== 0 ? "sm:border-l border-white/10" : ""
                }`}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                  <item.icon size={22} strokeWidth={1.75} />
                </div>
                <h3 className="font-teko text-2xl font-semibold text-heading uppercase">
                  {item.title}
                </h3>
                <p className="font-inter text-sm text-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 sm:py-24 bg-surface2">
        <div className="container-x flex flex-col items-center">
          <SectionHeading
            eyebrow="Our Space"
            title="World-Class"
            highlight="Facilities"
            className="mb-14"
          />
          <div className="grid sm:grid-cols-3 gap-6 w-full">
            {facilities.map((f, i) => (
              <div
                key={f.title}
                className="group relative rounded-lg overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500 hover:-translate-y-1.5"
              >
                <img
                  src={f.image}
                  alt={f.title}
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/5" />
                <span className="absolute top-4 left-4 font-teko text-sm font-bold text-primary bg-black/50 border border-white/10 rounded-full w-8 h-8 flex items-center justify-center">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="absolute bottom-0 p-6 w-full flex items-end justify-between gap-3">
                  <div>
                    <h3 className="font-teko text-2xl font-semibold text-offwhite uppercase leading-none">
                      {f.title}
                    </h3>
                    <p className="font-inter text-xs text-body mt-1.5 max-w-[220px]">
                      {f.desc}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="shrink-0 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}