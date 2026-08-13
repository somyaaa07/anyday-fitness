import { memberships } from "../data/memberships";
import PricingCard from "./PricingCard";
import SectionHeading from "./SectionHeading";
import Button from "./Button";

export default function MembershipPromoSection() {
  return (
    <section className="relative py-20 sm:py-28 bg-surface2/40">
      <div className="container-x flex flex-col items-center">
        <SectionHeading
          eyebrow="Membership"
          title="Choose Your"
          highlight="Plan"
          className="mb-14"
        />

        <div className="grid lg:grid-cols-[1fr_1fr_1fr_0.9fr] gap-5 w-full items-stretch">
          {memberships.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}

          {/* Promo panel */}
          <div className="relative rounded-lg overflow-hidden border border-white/10 min-h-[280px] group">
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=900&auto=format&fit=crop"
              alt="Luxury modern gym interior"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
            <div className="relative h-full flex flex-col justify-end p-6 gap-4">
              <h3 className="font-teko text-3xl font-semibold uppercase leading-[0.95] text-heading">
                Your Only <span className="text-primary">Limit Is You</span>
              </h3>
              <Button as="a" href="/contact" className="w-fit !py-2.5 text-sm">
                Take A Tour
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
