import { useState } from "react";
import { Check, X, ChevronDown } from "lucide-react";
import PageHero from "../components/PageHero";
import PricingCard from "../components/PricingCard";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import { memberships, comparisonFeatures, membershipFaqs } from "../data/memberships";

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="card-dark overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-6 py-5 text-left"
      >
        <span className="font-rajdhani font-semibold text-heading uppercase tracking-wide text-base">
          {q}
        </span>
        <ChevronDown
          size={20}
          className={`text-primary shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="font-inter text-sm text-body px-6 pb-5">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function Membership() {
  return (
    <>
      <PageHero
        eyebrow="Membership"
        title="Choose Your"
        highlight="Plan"
        description="Simple, transparent pricing with no hidden fees. Upgrade or cancel anytime."
        image="https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1600&auto=format&fit=crop"
      />

      <section className="py-16 sm:py-24">
        <div className="container-x grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {memberships.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16 sm:py-24 bg-surface2/40">
        <div className="container-x flex flex-col items-center">
          <SectionHeading
            eyebrow="Compare Plans"
            title="Feature"
            highlight="Comparison"
            className="mb-14"
          />

          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 font-rajdhani text-sm uppercase tracking-wide text-muted">
                    Feature
                  </th>
                  <th className="py-4 px-4 font-teko text-xl text-heading uppercase">Basic</th>
                  <th className="py-4 px-4 font-teko text-xl text-primary uppercase">Premium</th>
                  <th className="py-4 px-4 font-teko text-xl text-heading uppercase">Ultimate</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                    <td className="py-4 px-4 font-inter text-sm text-body">{row.feature}</td>
                    {["basic", "premium", "ultimate"].map((key) => (
                      <td key={key} className="py-4 px-4 text-center">
                        {typeof row[key] === "boolean" ? (
                          row[key] ? (
                            <Check size={18} className="text-primary inline" />
                          ) : (
                            <X size={18} className="text-muted/50 inline" />
                          )
                        ) : (
                          <span className="font-rajdhani text-sm text-body">{row[key]}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24">
        <div className="container-x flex flex-col items-center">
          <SectionHeading eyebrow="FAQ" title="Common" highlight="Questions" className="mb-14" />
          <div className="w-full max-w-2xl flex flex-col gap-4">
            {membershipFaqs.map((f) => (
              <FaqItem key={f.q} {...f} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
