export const memberships = [
  {
    id: "basic",
    name: "Basic",
    price: "₹999",
    period: "/ month",
    popular: false,
    features: ["Gym Access", "Basic Equipment", "1 Trainer Session / Month"],
  },
  {
    id: "premium",
    name: "Premium",
    price: "₹1499",
    period: "/ month",
    popular: true,
    features: [
      "Gym Access",
      "All Equipment",
      "4 Trainer Sessions / Month",
      "Nutrition Guide",
    ],
  },
  {
    id: "ultimate",
    name: "Ultimate",
    price: "₹1999",
    period: "/ month",
    popular: false,
    features: [
      "Gym Access",
      "All Equipment",
      "Unlimited Trainer Sessions",
      "Nutrition Guide",
      "Priority Support",
    ],
  },
];

export const comparisonFeatures = [
  { feature: "Gym Access", basic: true, premium: true, ultimate: true },
  { feature: "Basic Equipment", basic: true, premium: true, ultimate: true },
  { feature: "All Equipment", basic: false, premium: true, ultimate: true },
  { feature: "Trainer Sessions", basic: "1 / month", premium: "4 / month", ultimate: "Unlimited" },
  { feature: "Nutrition Guide", basic: false, premium: true, ultimate: true },
  { feature: "Priority Support", basic: false, premium: false, ultimate: true },
  { feature: "24/7 Access", basic: true, premium: true, ultimate: true },
  { feature: "Locker Room", basic: true, premium: true, ultimate: true },
];

export const membershipFaqs = [
  {
    q: "Can I upgrade my plan later?",
    a: "Yes, you can upgrade from Basic to Premium or Ultimate at any time from your account dashboard or at the front desk.",
  },
  {
    q: "Is there a joining fee?",
    a: "No hidden joining fees. The price you see is the price you pay every month.",
  },
  {
    q: "Can I freeze my membership?",
    a: "Yes, memberships can be frozen for up to 30 days per year for travel or medical reasons.",
  },
  {
    q: "Is personal training included?",
    a: "Trainer sessions are included based on your plan. Additional sessions can be purchased separately.",
  },
];
