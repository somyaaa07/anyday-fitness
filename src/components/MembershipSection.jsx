import { memberships } from "../data/memberships";
import PricingCard from "./PricingCard";
import SectionHeading from "./SectionHeading";

export default function MembershipSection() {
  return (
    <section className="relative py-20 sm:py-28 bg-surface2/40">
      <div className="container-x flex flex-col items-center">
        <SectionHeading
          eyebrow="Membership"
          title="Choose Your"
          highlight="Plan"
          className="mb-14"
        />

        <div className="grid md:grid-cols-3 gap-6 w-full max-w-5xl">
          {memberships.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
