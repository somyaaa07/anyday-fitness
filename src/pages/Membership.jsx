import { useState, useRef, useEffect } from "react";
import { Check, X, Plus, Minus, Crown } from "lucide-react";
import PageHero from "../components/PageHero";
import PricingCard from "../components/PricingCard";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import { memberships, comparisonFeatures, membershipFaqs } from "../data/memberships";

function FaqItem({ q, a, index }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 py-6 text-left"
      >
        <span
          className={`font-rajdhani font-semibold text-base sm:text-lg transition-colors duration-300 ${
            open ? "text-primary" : "text-heading"
          }`}
        >
          {q}
        </span>
        <span
          className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${
            open ? "bg-primary text-black rotate-180" : "bg-white/5 text-body"
          }`}
        >
          {open ? <Minus size={15} /> : <Plus size={15} />}
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="font-inter text-sm text-body pb-6 pr-10 max-w-lg">{a}</p>
        </div>
      </div>
    </div>
  );
}

function PlanTabs({ memberships, activeTab, setActiveTab }) {
  const containerRef = useRef(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const idx = memberships.findIndex((p) => p.id === activeTab);
    const btn = containerRef.current?.children[idx+1];
    if (btn) {
      setIndicator({ left: btn.offsetLeft, width: btn.offsetWidth });
    }
  }, [activeTab, memberships]);

  return (
    <div
      ref={containerRef}
      className="relative inline-flex items-center gap-1 p-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm mb-10"
    >
      <span
        className="absolute top-1.5 bottom-1.5 rounded-full bg-primary transition-all duration-300 ease-out"
        style={{ left: indicator.left, width: indicator.width }}
      />
      {memberships.map((plan) => (
        <button
          key={plan.id}
          onClick={() => setActiveTab(plan.id)}
          className={`relative z-10 flex items-center gap-1.5 font-rajdhani font-bold uppercase text-sm tracking-wide px-6 py-2.5 rounded-full transition-colors duration-300 ${
            activeTab === plan.id ? "text-black" : "text-body hover:text-heading"
          }`}
        >
          {plan.popular && (
            <Crown size={13} className={activeTab === plan.id ? "text-black" : "text-primary"} />
          )}
          {plan.name}
        </button>
      ))}
    </div>
  );
}

export default function Membership() {
  const defaultPlan = memberships.find((p) => p.popular)?.id || memberships[0].id;
  const [activeTab, setActiveTab] = useState(defaultPlan);
  const activePlan = memberships.find((p) => p.id === activeTab);

  return (
    <>
<PageHero
  eyebrow="Membership"
  title="Choose "
  highlight="Perfect Plan"
  description="Flexible membership plans designed to fit your fitness goals, schedule, and lifestyle. Get access to quality training, a motivating community, and everything you need to stay consistent and achieve results."
  image="/membershipBanner.png"
  primaryBtnText="Contact Us"
  primaryBtnLink="/contact"
  secondaryBtnText="Learn More"
  secondaryBtnLink="/about"
/>
      {/* Pricing */}
      <section className="py-16 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Pricing"
            title="Plans For Every"
            highlight="Commitment"
            align="center"
            className="mb-16"
          />
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto md:items-center">
            {memberships.map((plan) => (
              <div
                key={plan.id}
                className={`transition-all duration-300 ${
                  plan.popular ? "md:-translate-y-4 md:scale-105 relative z-10" : "opacity-90"
                }`}
              >
                <PricingCard plan={plan} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plan explorer — modern segmented control + glass panel */}
      <section className="py-16 sm:py-24 bg-surface2">
        <div className="container-x flex flex-col items-center">
          <SectionHeading
            eyebrow="What's Included"
            title="Explore Every"
            highlight="Plan"
            className="mb-10"
          />

          <PlanTabs memberships={memberships} activeTab={activeTab} setActiveTab={setActiveTab} />

          <div className="w-full max-w-6xl rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-8 py-7">
              <div>
                <h3 className="font-teko text-3xl font-semibold text-heading uppercase leading-none">
                  {activePlan.name} Plan
                </h3>
                <p className="font-inter text-sm text-muted mt-1.5">
                  Everything included when you choose {activePlan.name}
                </p>
              </div>
              <div className="text-right shrink-0">
                <span className="font-teko text-4xl font-bold text-primary">
                  {activePlan.price}
                </span>
                <span className="font-inter text-sm text-muted ml-1">{activePlan.period}</span>
              </div>
            </div>

            <div className="h-px bg-white/10 mx-8" />

            <div className="grid sm:grid-cols-2 gap-x-8 px-8 py-2">
              {comparisonFeatures.map((row) => {
                const value = row[activeTab];
                const included = value === true || typeof value === "string";
                return (
                  <div
                    key={row.feature}
                    className="flex items-center gap-3 py-4 border-b border-white/5 last:sm:border-0"
                  >
                    <span
                      className={`shrink-0 w-7 h-7 flex items-center justify-center rounded-full ${
                        included ? "bg-primary/15 text-primary" : "bg-white/5 text-muted/40"
                      }`}
                    >
                      {included ? <Check size={14} /> : <X size={14} />}
                    </span>
                    <span
                      className={`font-inter text-sm flex-1 ${
                        included ? "text-body" : "text-muted/40"
                      }`}
                    >
                      {row.feature}
                    </span>
                    {typeof value === "string" && (
                      <span className="font-rajdhani font-semibold text-xs text-primary shrink-0">
                        {value}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="h-8" />
          </div>
        </div>
      </section>

      {/* FAQ — modern flat list, two columns */}
      <section className="py-16 sm:py-24">
        <div className="container-x flex flex-col items-center">
          <SectionHeading eyebrow="FAQ" title="Common" highlight="Questions" className="mb-12" />
          <div className="w-full max-w-6xl mx-auto grid sm:grid-cols-2 sm:gap-x-14">
            <div>
              {membershipFaqs
                .filter((_, i) => i % 2 === 0)
                .map((f) => (
                  <FaqItem key={f.q} {...f} index={membershipFaqs.indexOf(f)} />
                ))}
            </div>
            <div>
              {membershipFaqs
                .filter((_, i) => i % 2 !== 0)
                .map((f) => (
                  <FaqItem key={f.q} {...f} index={membershipFaqs.indexOf(f)} />
                ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}