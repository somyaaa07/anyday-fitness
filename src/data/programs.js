import { Dumbbell, Flame, Zap, Move, Bike, Timer, UserCheck, Wind } from "lucide-react";

export const programs = [
  {
    id: "muscle-building",
    title: "Muscle Building",
    icon: Dumbbell,
    description: "Build strength and gain lean muscle effectively.",
    longDescription:
      "A structured hypertrophy program combining progressive overload with compound and isolation lifts to pack on quality lean muscle mass.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
    duration: "60 min",
    difficulty: "Intermediate",
    trainer: "Arjun Sharma",
  },
  {
    id: "weight-loss",
    title: "Weight Loss",
    icon: Flame,
    description: "Burn fat and achieve a fitter, healthier you.",
    longDescription:
      "High-intensity metabolic conditioning paired with nutrition coaching designed to accelerate fat loss while preserving lean muscle.",
    image:
      "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=1200&auto=format&fit=crop",
    duration: "45 min",
    difficulty: "Beginner",
    trainer: "Meera Kapoor",
  },
  {
    id: "strength-training",
    title: "Strength Training",
    icon: Zap,
    description: "Improve endurance, strength and overall performance.",
    longDescription:
      "Barbell-focused strength cycles built around the big lifts to increase raw power, endurance, and total-body performance.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
    duration: "75 min",
    difficulty: "Advanced",
    trainer: "Rahul Verma",
  },
  {
    id: "functional-training",
    title: "Functional Training",
    icon: Move,
    description: "Train for real-life movements and everyday strength.",
    longDescription:
      "Multi-planar movement patterns that build mobility, balance and real-world strength for everyday life and sport.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop",
    duration: "50 min",
    difficulty: "Intermediate",
    trainer: "Arjun Sharma",
  },
  {
    id: "crossfit",
    title: "CrossFit",
    icon: Timer,
    description: "Constantly varied, high-intensity functional movement.",
    longDescription:
      "Community-driven WODs blending gymnastics, weightlifting and conditioning for elite, all-round fitness.",
    image:
      "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?q=80&w=1200&auto=format&fit=crop",
    duration: "60 min",
    difficulty: "Advanced",
    trainer: "Rahul Verma",
  },
  {
    id: "hiit",
    title: "HIIT",
    icon: Bike,
    description: "Short, intense intervals for maximum calorie burn.",
    longDescription:
      "Explosive interval circuits engineered to spike your metabolism and torch calories long after the session ends.",
    image:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1200&auto=format&fit=crop",
    duration: "30 min",
    difficulty: "Intermediate",
    trainer: "Meera Kapoor",
  },
  {
    id: "personal-training",
    title: "Personal Training",
    icon: UserCheck,
    description: "One-on-one coaching tailored to your goals.",
    longDescription:
      "Fully personalized programming, form correction and accountability with a dedicated coach by your side.",
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1200&auto=format&fit=crop",
    duration: "60 min",
    difficulty: "All Levels",
    trainer: "Arjun Sharma",
  },
  {
    id: "yoga-mobility",
    title: "Yoga & Mobility",
    icon: Wind,
    description: "Recover, stretch and move with more freedom.",
    longDescription:
      "Guided mobility flows and breathwork to improve recovery, flexibility and long-term joint health.",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop",
    duration: "45 min",
    difficulty: "Beginner",
    trainer: "Meera Kapoor",
  },
];
